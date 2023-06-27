import mongoose from "mongoose";

const SpellSchema = new mongoose.Schema({
    level: { type: String, required: true  },
    name: { type: String, required: true  },
    type: { type: String, required: true  },
    castTime: { type: String, required: true  },
    range: { type: String, required: true  },
    components: { type: String, required: true  },
    duration: { type: String, required: true  },
    description: { type: String, required: true  },
    source: { type: String, required: true  }
});

const Spell = mongoose.model("Spell", SpellSchema);

export default Spell;
