const AuthorModel = require("../models/publisherModel")

const createPublisher = async function(req, res) {
    let data = req.body
    let saveData = await AuthorModel.create(data)
    res.send({ data: saveData })
}

const getPublisherData = async function(req, res) {
    let publisher = await AuthorModel.find()
    res.send({ data: publisher })
}

module.exports.createPublisher = createPublisher
module.exports.getPublisherData = getPublisherData