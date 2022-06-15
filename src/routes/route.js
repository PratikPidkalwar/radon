const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const md = require("../middleware/auth")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", md.tokenCheck, userController.getUserData)

router.put("/users/:userId", md.tokenCheck, userController.updateUser)

router.delete("/users/:userId", md.tokenCheck, userController.deletDetails)
    // router.delete("/users/:userId", userController.deleteDetails)
module.exports = router;