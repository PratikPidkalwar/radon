const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const memesController = require("../controllers/memesController")



router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByDistricts", CowinController.getByDistricts)
router.get("/cowin/getLondonWeather", CowinController.getLondonWeather)
router.get("/cowin/getLondonTemperature", CowinController.getLondonTemperature)
router.get("/cowin/getCitiesWeather", CowinController.getCitiesWeather)
router.get("/memes/getAllMemes", memesController.getAllMemes)
router.post("createMeme", memesController.createMeme)
router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;