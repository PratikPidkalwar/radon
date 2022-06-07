// const { count } = require("console")
const { count } = require("console")
const bookModel = require("../models/bookModel")
    // const BookModel = require("../models/bookModel")

const createBook = async function(req, res) {
    let data = req.body

    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function(req, res) {
    const allBook = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBook })
}

const getBooksInYear = async function(req, res) {
    let publicyears = req.body.year
    const inYearbooks = await bookModel.find({ year: publicyears })
    res.send({ msg: inYearbooks })
}

const getParticularBooks = async function(req, res) {

    let output = await bookModel.find(req.body)
    res.send(output);
}

const getXINRBooks = async function(req, res) {
    const INRBook = await bookModel.find({ $or: [{ "price.indianPrice": { $eq: "200INR" } }, { "price.indianPrice": { $eq: "500INR" } }, { "price.indianPrice": { $eq: "100INR" } }] })
    res.send({ msg: INRBook })
}
const getRandomBooks = async function(req, res) {
    let RandomBook = await bookModel.find({ $or: [{ totalPages: { $gt: "500" } }, { stockAvailable: true }] })
    res.send({ msg: RandomBook })
}

// {name: "hi"},
module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getXINRBooks = getXINRBooks
module.exports.getParticularBooks = getParticularBooks
module.exports.getRandomBooks = getRandomBooks
    // const BookModel = require("../models/bookModel")

// const createBook = async function(req, res) {
//     let data = req.body

//     let savedData = await BookModel.create(data)
//     res.send({ msg: savedData })
// }

// const getBooksData= async function (req, res) {

//     // let allBooks= await BookModel.find( ).count() // COUNT

//     // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND

//     // let allBooks= await BookModel.find( { 
//     //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
//     // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

//     // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

//     // PAGINATION 
//     // let page= req.query.page
//     // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

//     // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


//     // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
//     // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
//     // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
//     // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
//     // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
//     // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 

//     // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
//     // sales : { $in: [10, 17, 82] }

//     // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})

//     //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
//     //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


//     //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
//     //  let allBooks= await BookModel.findOne( {sales: 10}) 
//     //  let allBooks= await BookModel.find( {sales: 10}) 



//     // //  update (not covered: - findByIdAndUpdate | updateOne )
//     // let allBooks= await BookModel.update(   
//     //     {  sales: {$gt: 10}  }, //condition
//     //     { $set: { isPublished: true} } // the change that you want to make
//     //     ) 



//     // REGEX
//     // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
//     // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
//     // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
//     // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 

//     // ASYNC AWAIT

//     let a= 2+4
//     a= a + 10
//     console.log(a)
//     let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


//     // WHEN AWAIT IS USED: - database + axios
//     //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
//     console.log(allBooks)
//     let b = 14
//     b= b+ 10
//     console.log(b)
//     res.send({msg: allBooks})
// }const { count } = require("console")
// const bookModel = require("../models/bookModel")
// const BookModel = require("../models/bookModel")

// const createBook = async function(req, res) {
//     let data = req.body

//     let savedData = await BookModel.create(data)
//     res.send({ msg: savedData })
// }

// const bookList = async function(req, res) {
//     const allBook = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
//     res.send({ msg: allBook })
// }
// const getBooksInYear = async function(req, res) {
//         let years = req.body.year
//         const inYearbooks = await BookModel.find({ years: year })
//         res.send({ msg: inYearbooks })
//     }
//     // const getParticularBooks = async function(req, res) {
//     //     const particular = await BookModel.find({ year: 2013 })
//     // }
// const getXINRBooks = async function(req, res) {
//     const INRBook = await BookModel.find({
//         indianPrice: Number,
//         europePrice: Number
//     });
//     res.send({ msg: INRBook })
// }
// const getParticularBooks = async function(req, res) {

//     let output = await bookModel.find(req.body)
//     res.send(output);
// }
// const getRandomBooks = async function(req, res) {
//         const RandomBooks = await BookModel.find({
//             $or: [{
//                 totalpages: { $gt: 500 }
//             }, { stockAvailable: true }]
//         }).count();
//         res.send({ msg: RandomBooks })
//     }
//     // {name: "hi"},
// module.exports.createBook = createBook
// module.exports.bookList = bookList
// module.exports.getBooksInYear = getBooksInYear
// module.exports.getParticularBooks = getParticularBooks
// module.exports.getXINRBooks = getXINRBooks
// module.exports.getRandomBooks = getRandomBooks