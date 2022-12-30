const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const faker = require("faker");
const SpellDao = require("./data/SpellDao");

const NUM_SAMPLES = 3;
const spells = new SpellDao();
for (let i = 0; i < NUM_SAMPLES; i++) {
    spells.create({
        level: faker.lorem.sentence(),
        name: faker.lorem.sentence(),
        type: faker.lorem.sentence(),
        castTime: faker.lorem.sentence(),
        range: faker.lorem.sentence(),
        components: faker.lorem.sentence(),
        duration: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        source: faker.lorem.sentence(),
    });
}

app.get("/", (req, res) => {
    res.send("QuickNote API!");
});

app.listen(port, () => {
    console.log(`Express app listening at port: http://localhost:${port}/`);
});

app.get("/api/spells", async (req, res) => {
    const data = await spells.readAll();
    res.json({ data });
});
