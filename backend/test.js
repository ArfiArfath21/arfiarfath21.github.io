import express from "express";
import bodyParser from "body-parser"
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from 'passport';
import { Strategy } from 'passport-local';
import env from "dotenv";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PSWD,
    port: process.env.PG_PORT,
});

try {
    await db.connect();
} catch (error) {
    console.log(`Couldn't connect to DB: ${error}`);
};

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const checkResult = await db.query("SELECT * FROM users WHERE username = $1", [
        username,
    ]);
    if (checkResult.rowCount > 0) {
        res.render("auth.ejs", { message: "User already exists. Use the login option.", alertType: "warning" });
    } else {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                res.render("register.ejs", { message: "An error occurred during registration. Please try again.", alertType: "danger" });
            } else {
                const result = await db.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", [username, hash]);
                const user = result.rows[0];
                req.login(user, (err) => {
                    console.log(err)
                    res.redirect("/personal");
                });
            }
        });
    }
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/personal",
    failureRedirect: "/login",
    failureFlash: true
}));

app.get("/personal", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("personal.ejs");
    } else {
        res.render("login.ejs", { message: "User not authenticated. Login/Sign Up first.", alertType: "warning" });
    };
});

app.post("/mailer", async (req, res) => {
    const {email} = req.body;
    console.log(`email: ${email}`)
    const checkResult = await db.query("SELECT * FROM mailer WHERE email = $1", [
        email,
    ]);
    if (checkResult.rowCount > 0) {
        console.log("Email already exists.")
    } else {
        console.log(`Registering email: ${email}`);
        const result = await db.query(
            "INSERT INTO mailer (email) VALUES ($1)",
            [email]
        );
        console.log("Email registered.")
    }
});

passport.use(
    new Strategy(async function verify(username, password, cb) {
        try {
            const result = await db.query("SELECT * FROM users WHERE username = $1 ", [
                username,
            ]);
            if (result.rows.length > 0) {
                const user = result.rows[0];
                await bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        return cb(err);
                    } else {
                        if (result) { return cb(null, user); } 
                        else { return cb(null, false); }
                    }
                });
            } else { return cb("User not found"); };
        } catch (err) {
            console.log(err);
            return cb(err);
        }
    })
);

passport.serializeUser((user, cb) => { cb(null, user); });
passport.deserializeUser((user, cb) => { cb(null, user); });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 

// res.render("auth.ejs", { message: "Incorrect password. Please try again.", alertType: "danger" });
