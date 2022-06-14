// const UserModel = require("../models/userModel")

// let checkisFreeApp = function(req, res, next) {

//     let headervalue = req.headers.isfreeappuser // headers.content-type
//     if (headervalue === undefined) {
//         res.send({ Messege: 'Header is missing it is mandatory' })
//     } else(next())

// }

// module.exports.checkisFreeApp = checkisFreeApp

const UserModel = require("../models/userModel")
let checkisFreeApp = function(req, res, next) {

    let headervalue = req.headers["isfreeappuser"] // headers.content-type
    if (!headervalue) {
        res.send({ Messege: 'Header is missing it is mandatory' })
    } else {
        if (headervalue == 'true') {
            headervalue = true
        } else {
            headervalue = false
        }
        req.isFreeAppUser = headervalue
        next()
    }
}
module.exports.checkisFreeApp = checkisFreeApp