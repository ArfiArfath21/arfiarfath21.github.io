import express from "express";
import bodyParser from "body-parser"
import pg from "pg";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import session from "express-session";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
