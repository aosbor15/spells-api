import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import connect from './data/db.js';
import SpellDao from './data/SpellDao.js';

const spells = new SpellDao();

await connect();

app.get("/", (req, res) => {
    res.send("The Mystical Magical Spells API");
});

app.listen(port, () => {
    console.log(`Express app listening at port: http://localhost:${port}/`);
});

app.get("/api/spells", async (req, res) => {
    const data = await spells.readAll();
    res.json({ data });
});
