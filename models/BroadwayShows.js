const mongoose = require('mongoose')

const broadwaySchema = new mongoose.Schema({
    showName: {
        type: String,
        required: true,
    },
    dateSeen: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
        default: 'New York',
    },
    comments: String
})

module.exports = mongoose.model('broadway-log', broadwaySchema)