const Spell = require("../model/Spell");
const ApiError = require("../model/ApiError");

class SpellDao {

    constructor() {
        this.spells = [];
    }

    async create ({ level, name, type, castTime, range, components, duration, description, source }) {
        const spell = new Spell(level, name, type, castTime, range, components, duration, description, source);
        this.spells.push(spell);
        return spell;
    }

    async update (id, { level, name, type, castTime, range, components, duration, description, source }) {
        const index = this.spells.findIndex((spell) => spell._id === id);

        if (index === -1) {
            throw new ApiError(404, "There is no spell with the given ID!");
        }

        // Add code for updating fields
        if (level !== undefined) {
            this.spells[index].level = level;
        }
        if (name !== undefined) {
            this.spells[index].name = name;
        }

        return this.spells[index];
    }

    async delete (id) {
        const index = this.spells.findIndex((spell) => spell._id === id);

        if (index === -1) {
            throw new ApiError(404, "There is no spell with the given ID!");
        }
        const spell = this.spells[index];
        this.spells.splice(index, 1);
        return spell;
    }

    async read (id) {
        return this.spells.find((spell) => spell._id === id);
    }

    async readAll (query = "") {
        if (query !== "") {
            return this.spells.filter(
                (spell) => spell.name.includes(query)
            );
        }
        return this.spells;
    }
}

module.exports = SpellDao;
