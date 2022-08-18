const mongoose = require('mongoose')

const broadwaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateSeen: {
        type: Date,
        default: Date.now,
    },
    location: String,
    comments: String
})

module.exports = mongoose.model('broadway-log', broadwaySchema)