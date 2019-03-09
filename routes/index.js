var express = require('express');
var router = express.Router();
var ethers = require('ethers');

const provider = new ethers.getDefaultProvider('kovan');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exam Q1' });
});

router.post('/messageParrot', function(request, response, next) {

    var json = '{"message":"GBC Exam Question", "detail":"Aced it!"}';

    msg = JSON.parse(json);

    response.send("Message is: " + msg.message + ", " + msg.detail);

});

module.exports = router;