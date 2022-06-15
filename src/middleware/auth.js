const jwt = require('jsonwebtoken')

const tokenCheck = function(req, res, next) {
    let token = req.headers["x-auth-token"];
    let valid = jwt.verify(token, "mySecretKey");
    if (!valid) {
        res.send({ status: false, msg: "Invalid Token" });
    } else {
        req.valid = valid;
        next();
    }
};

module.exports.tokenCheck = tokenCheck