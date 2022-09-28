import express from "express";
import dotenv from "dotenv";
import { translate } from "./Translate.js";

dotenv.config();
const app = express();

app.listen(process.env.PORT);

app.get("/", (req, res) => {
    res.send("App is listening and Get checkpoint is working");
});

app.use(express.json({ extended: false}));

app.post('/translate', async (req, res) => {
    try {
        const word = req.body.word;
        let translation = await translate(word);
        let response = {
            original: word,
            translated: translation
        };
        res.send(response);

    } catch (err) {
        res.send(err);
    }
});