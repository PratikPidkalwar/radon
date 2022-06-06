// const express = require('express');
// const bodyParser = require('body-parser');
// const route = require('./routes/route.js');
// const { default: mongoose } = require('mongoose');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// mongoose.connect("mongodb+srv://rhutvik-patel:jiCI0diV4CDbN9Pr@cluster0.afbog.mongodb.net/rhutvikpatel/my1stdatabase", {
//         useNewUrlParser: true
//     })
//     .then(() => console.log("MongoDb is connected"))
//     .catch(err => console.log(err))

// app.use('/', route);

// const express = require('express');
// var bodyParser = require('body-parser');

// const route = require('./routes/route.js');
// const { default: mongoose } = require('mongoose');
// mongoose.connect("mongodb+srv://chetan1297:9JBxn4iQEY3rMnB@cluster0.gi2f1j9.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// })

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', route);

// app.listen(process.env.PORT || 3000, function() {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
// });


// app.listen(process.env.PORT || 3000, function() {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
// });
const express = require('express');
var bodyParser = require('body-parser');

const route = require('./router');
const { default: mongoose } = require('mongoose');
mongoose.connect("mongodb+srv://chetan1297:9JBxn4iQEY3rMnB@cluster0.gi2f1j9.mongodb.net/chetan?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});