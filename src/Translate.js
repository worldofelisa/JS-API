import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const key = process.env.API_KEY;

async function translate(word) {
    try {
        let res = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${key}`,
        { q: word, target: "ja" }
        );
        let translation = res.data.data.translations[0].translatedText;
        return translation;
    } catch (err) {
        return err; 
    };
};

export {translate};