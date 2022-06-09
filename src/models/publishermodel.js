// const mongoose = require('mongoose');

// const publisherSchema = new mongoose.Schema({

//     name: String,
//     headQuarter: String

// }, { timestamps: true });

// module.exports = mongoose.model('pratikPublisher', publisherSchema)

const mongoose = require('mongoose');

const PSchema = new mongoose.Schema({
    name: String,
    publisher_id: Number,
    headQuarter: String,

}, { timestamps: true });


module.exports = mongoose.model('Publisherpp', PSchema)