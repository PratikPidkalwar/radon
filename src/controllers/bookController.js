// const authorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel");
// const publisherModel = require("../models/publishermodel");

// const createBook = async function(req, res) {
//     let data = req.body
//     if (!data.author) {
//         res.send({
//             msg: "author detail is required"
//         })
//     }
//     let author = await authorModel.findOne({ _id: id })
//     if (!author) {
//         res.send({
//             msg: "author detail is not valid"
//         })
//     }
//     if (!data.publisher) { res.send("publisher detail is required") }
//     let publisher = await publisherModel.findById(data.publisher)
//     if (!publisher) {
//         res.send("publisher detail is not valid")
//         let bookCreated = await bookModel.create(data)
//         res.send({ data: authorCreated })
//     }
// }

// // const getBooksData = async function(req, res) {
// //     let books = await bookModel.find()
// //     res.send({ data: books })
// // }

// const getBooksWithAuthorDetails = async function(req, res) {
//     let specificBook = await bookModel.find().populate('author_id', 'publisher_id')
//     res.send({ data: specificBook })

// }

// module.exports.createBook = createBook
//     // module.exports.getBooksData = getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const mongoose = require("mongoose")

const createBook = async function(req, res) {
    let book = req.body
    let a_id = req.body.author
    let p_id = req.body.publisher
    let bookPresent = await authorModel.findById(a_id);
    let publisherPresent = await publisherModel.findById(p_id);
    if (bookPresent) {
        if (publisherPresent) {
            let saveData = await bookModel.create(book)
            res.send({ msg: saveData })
        } else {
            res.send({ msg: "publisher is not present" })
        }
    } else {
        res.send({ msg: "author is not present" })
    }
}

const getBooksData = async function(req, res) {
    let books = await bookModel.find().populate("author")
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function(req, res) {
    let specificBook = await bookModel.find()
    res.send({ data: specificBook })

}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails