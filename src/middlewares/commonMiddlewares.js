const mid1 = function(req, res, next) {
    req.falana = "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2 = function(req, res, next) {
    // console.log("Hi I am a middleware named Mid2")
    // console.log("hello mid2")
    // const today = moment()
    // const date = today.format()
    // console.log(date)
    // console.log(req.ip)
    // const a = router.stack
    // const out = a.pop()
    // console.log(out.path)
    // next()
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
    let ip = req.ip
    let url = req.originalUrl
    console.log(`${datetime} ${ip} ${url}`)
    next()
}

const mid3 = function(req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4 = function(req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}
app.use(mid2)

module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3
module.exports.mid4 = mid4