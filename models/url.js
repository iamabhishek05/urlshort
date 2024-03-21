const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({

    shortid: {
        type: String,
        required: true,
        unique: true
    },

    redirectingurl: {
        type: String,
        required: true
    },

    visithistory: [
        { timestamps: { type: Number } }
    ]

}, { timestamps: true });


const URL = mongoose.model('URL', urlSchema)

module.exports = URL; 