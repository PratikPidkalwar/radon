const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function(req, res) {
    console.log('the constant in logger ' + logger.url)
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason