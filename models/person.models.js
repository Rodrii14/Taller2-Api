const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    familyId: {
        type: Number,
        required: true
    },
    dui: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    educationalLevel: {
        type: String,
        required: true
    },
    literacy: {
        type: Boolean,
        required: true
    }
},{ timestamps: true });

module.exports = mongoose.model('person', personSchema)