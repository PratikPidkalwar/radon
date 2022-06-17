// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token

//     next()
// }
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = function(req, res, next) {
    try {
        //check the token in request header
        //validate this token
        // comapre the logged in user's id and the id in request
        let token = req.headers["x-Auth-token"];
        console.log(req.headers["x-Auth-token"]);
        if (!token) token = req.headers["x-auth-token"];
        console.log(token)
        if (!token) return res.send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, 'functionup-thorium')

        if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })
        next()
    } catch (err) {
        res.staus(500).send({ msg: "error", error: err.messege })
    }
}

const authorise = function(req, res, next) {
    try {
        // comapre the logged in user's id and the id in request
        let token = req.headers["x-auth-token"]
        if (!token) return res.send({ status: false, msg: "token must be present in the request header" })
        let decodedToken = jwt.verify(token, 'functionup-thorium')

        if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })

        //userId for which the request is made. In this case message to be posted.
        let userToBeModified = req.params.userId
            //userId for the logged-in user
        let userLoggedIn = decodedToken.userId

        //userId comparision to check if the logged-in user is requesting for their own data
        if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
        next()
    } catch (err) {
        res.staus(500).send({ msg: "error", error: err.messege })
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise