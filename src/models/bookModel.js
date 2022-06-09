// const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

// const bookSchema = new mongoose.Schema({
//     name: String,
//     author_id: {
//         type: ObjectId,
//         ref: "pratikAuthor"
//     },
//     price: Number,
//     ratings: Number,
//     publisher: {
//         type: ObjectId,
//         ref: "pratikPublisher"
//     }


// }, { timestamps: true });


// module.exports = mongoose.model('pratikBook', bookSchema)

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: String,
    author: {
        type: ObjectId,
        ref: "Authorpp"
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "myPublisherpp"
    }
}, { timestamps: true });


module.exports = mongoose.model('Bookpp', bookSchema)