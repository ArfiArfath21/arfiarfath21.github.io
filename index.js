import express from "express";
import bodyParser from "body-parser"
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'arfsyed',
    password: '',
    port: 5432,
});

try {
    await db.connect();
} catch (error) {
    console.log(`Couldn't connect to DB: ${error}`);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/auth", (req, res) => {
    res.render("auth.ejs");
});

app.post("/auth", async (req, res) => {
    const { username, password, action } = req.body;
    const checkResult = await db.query("SELECT * FROM users WHERE username = $1", [
        username,
    ]);
    if (action === 'register') {
        if (checkResult.rowCount > 0) {
            console.log("User already exists, Use the login option.")
        } else {
            console.log(`Registering user: ${username}`);
            const result = await db.query(
                "INSERT INTO users (username, password) VALUES ($1, $2)",
                [username, password]
            );
            console.log("User registered.");
        }
        res.redirect("/auth");
        return;
    } else if (action === 'login') {
        // Handle login logic
        if (checkResult.rowCount > 0) {
            const user = checkResult.rows[0];
            const storedPassword = user.password;
            if (password === storedPassword) {
                console.log(`Logging in user: ${username}`);
                res.redirect("/personal");
                return;
            } else {
                res.redirect("/auth");
                return;
            }
        } else {
            console.log("User doesn't exist, Register first.");
            res.redirect("/auth");
            return;
        }
    } else {
        res.status(400).send('Invalid action');
    }
})

app.get("/personal", (req, res) => {
    res.render("personal.ejs");
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
    // res.redirect("#");
    // return;
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 
