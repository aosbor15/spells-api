import Spell from "../model/Spell.js";
import ApiError from "../model/ApiError.js";

class SpellDao {

    constructor() {
        this.spells = [];
    }

    async create ({ level, name, type, castTime, range, components, duration, description, source }) {
        const spell = await Spell.create({level, name, type, castTime, range, components, duration, description, source});
        return spell;
    }

    async update (id, { level, name, type, castTime, range, components, duration, description, source }) {
        const spell = await Spell.findByIdAndUpdate(id, { level, name, type, castTime, range, components, duration, description, source }, { new: true, runValidators: true });

        if (spell === null) {
            throw new ApiError(404, "There is no spell with the given ID!");
        }

        return spell;
    }

    async delete (id) {
        const spell = await Spell.findByIdAndDelete(id);

        if (spell === null) {
            throw new ApiError(404, "There is no spell with the given ID!");
        }
        return spell;
    }

    async read (id) {
        const spell = await Spell.findById(id);
        return spell ? spell: [];
    }

    async readAll (query = "") {
        if (query !== "") {
            const spells = await Spell.find().or([{ name: query }, { description: query }]);
            return spells;
        }
        const spells = await Spell.find({});
        return spells;
    }
}

export default SpellDao;
