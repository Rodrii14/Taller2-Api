const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familySchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    canton: {
        type: String,
        required: true
    },
    housingType: {
        type: String,
        required: true
    },
    riskLevel: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
},{ timestamps: true });

module.exports = mongoose.model('family', familySchema)