const { v4: uuidv4 } = require("uuid");

class Spell {
    constructor(level, name, type, castTime, range, components, duration, description, source) {
        this._id = uuidv4();
        this.level = level;
        this.name = name;
        this.type = type;
        this.castTime = castTime;
        this.range = range;
        this.components = components;
        this.duration = duration;
        this.description = description;
        this.source = source;
    }
}

module.exports = Spell;
