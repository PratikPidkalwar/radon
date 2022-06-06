// const UserModel = require("../models/userModel")

// const createUser = async function(req, res) {
//     let data = req.body
//     let savedData = await UserModel.create(data)
//     res.send({ msg: savedData })
// }

// const getUsersData = async function(req, res) {
//     let allUsers = await UserModel.find()
//     res.send({ msg: allUsers })
// }

// module.exports.createUser = createUser
// module.exports.getUsersData = getUsersData

// const UserModel = require("../models/userModel")

// const createNewBook = async function(req, res) {
//     let data = req.body
//     let savedData = await UserModel.create(data)
//     res.send({ msg: savedData })
// }

// const getAllBook = async function(req, res) {
//     let allbooks = await UserModel.find()
//     res.send({ msg: allbooks })
// }

// module.exports.createNewBook = createNewBook
// module.exports.getAllBook = getAllBook

const UserModel = require("./userModel")

const createNewBook = async function(req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({ msg: savedData })
}

const getAllBook = async function(req, res) {
    let allbooks = await UserModel.find() //if u want specfic authorName find({authorName:pk, isPublish:true})
    res.send({ msg: allbooks })
}

module.exports.createNewBook = createNewBook
module.exports.getAllBook = getAllBook