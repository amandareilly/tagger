const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const habitSchema = mongoose.Schema({
    shortName: {type: String, required: true},
    longName: {type: String, required: true},
    description: {type: String},
    completionsRequired: {type: Number, required: true, default: 1},
    completions: [{type: Date}]
});

habitSchema.methods.serialize = function() {
    return {
        id: this._id,
        shortName: this.shortName,
        longName: this.longName,
        description: this.description,
        completionsRequired: this.completionsRequired,
        completions: this.completions
    }
};

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
