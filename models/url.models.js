
const mongoose = require('mongoose')
const shortid = require('shortid')



const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true
    },

    redirectingURL: {
        type: String,
        required: true
    },

    visitHistory: [
        { timestamps: { type: Number } }
    ]

}, { timestamps: true })



const URL = mongoose.model('URL', urlSchema)


module.exports = URL