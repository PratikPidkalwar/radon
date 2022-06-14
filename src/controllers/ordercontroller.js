const UserModel = require("../models/userModel")
const productModel = require("../models/productmodel")
const orderModel = require("../models/orderModel")

// const createOrder = async function(req, res) {
//     let userId = req.body.userId
//     let productId = req.body.productId
//     let user = await UserModel.findById(userId);
//     let product = await productModel.findById(productId);

//     if (user === undefined) {
//         res.send({ msg: "user does not exist.please provide valid userId" })
//     } else if (product === undefined) {
//         res.send({ msg: "product does not exist.please provide valid productId" })
//     }
// }
// module.exports.createOrder = createOrder

const createOrder = async function(req, res) {
    let userId = req.body.userId
    let productId = req.body.productId
    let appTypeFree = req.isFreeAppUser //this attribute was set in the appmiddelware
    let orderAmount
    let orderDate = Date()
    let user = await UserModel.findById(userId);
    let product = await productModel.findById(productId);
    //userId validation
    if (!user) {
        res.send({ msg: "user does not exist.please provide valid userId" })
    }
    //product validation
    else if (!product) {
        res.send({ msg: "product does not exist.please provide valid productId" })
    }
    //user balance validation
    else if (!appTypeFree && user.balance < product.price) {
        res.send({ msg: "user does not have enough balance to purches the product" })
    }
    if (appTypeFree) {
        orderAmount = 0
    } else {
        //paid app
        orderAmount = product.price
    }
    let orderDetails = {
        userId: userId,
        productId: productId,
        Amount: orderAmount,
        isFreeAppUser: appTypeFree,
        date: orderDate
    }
    let orderCreated = await orderModel.create(orderDetails)
    if (!appTypeFree) {
        await UserModel.findByIdAndUpdate({ _id: userId }, { balance: user.balance - product.price })
            //For paid user app and the user has sufficient balance.
            // We deduct the balance from user's balance and update the user. We create an order document
    }
    res.send({ msg: orderCreated })
}
module.exports.createOrder = createOrder