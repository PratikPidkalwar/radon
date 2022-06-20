let axios = require("axios")


let getStates = async function(req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function(req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function(req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function(req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByDistricts = async function(req, res) {
    try {
        let district_Id = req.query.district_Id
        let date = req.query.date
        console.log(`query params are: ${district_Id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_Id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getLondonWeather = async function(req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=28e8b25e46b520d479b7508009be5184'
        }
        let result = await axios(options);
        console.log(result);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getLondonTemperature = async function(req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=28e8b25e46b520d479b7508009be5184'
        }
        let result = await axios(options);
        console.log(result);
        let temp = result.data.main.temp
        res.status(200).send({ LondonTemperature: temp, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getCitiesWeather = async function(req, res) {

    try {

        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let selectedCities = []

        for (let i = 0; i < cities.length; i++) {

            let city = ({ city: cities[i] })

            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=28e8b25e46b520d479b7508009be5184`)

            city.temp = result.data.main.temp

            selectedCities.push(city)
        }
        let sortedResult = selectedCities.sort(function(a, b) { return a.temp - b.temp })

        res.status(200).send({ data: sortedResult, status: true })

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistricts = getByDistricts
module.exports.getLondonWeather = getLondonWeather
module.exports.getLondonTemperature = getLondonTemperature
module.exports.getCitiesWeather = getCitiesWeather