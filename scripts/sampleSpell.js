import { faker } from '@faker-js/faker';
import connect from '../server/data/db.js';
import SpellDao from '../server/data/SpellDao.js';

async function createSampleNotes() {
  try {
    await connect();

    const spells = new SpellDao();
    const spell = await spells.create({
    level: faker.lorem.sentence(),
    name: faker.lorem.sentence(),
    type: faker.lorem.sentence(),
    castTime: faker.lorem.sentence(),
    range: faker.lorem.sentence(),
    components: faker.lorem.sentence(),
    duration: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    source: faker.lorem.sentence()
    });
    console.log(spell);
  } catch (err) {
    console.log(err);
  }
}

createSampleNotes();