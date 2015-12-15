var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var keys = require('/Users/joshsilverstein/workspace/express/express-introduction/faceAnalyzer/configure.js');
var server = require('../serverIndex.js')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Face It' });
});

router.post("/", function(req,res,next){
  console.log(req.body.hashtag)

  var twitter = server.twitterCall(req.body.hashtag)
  console.log(twitter)
  res.render('index', {title: 'Face It'})
});

router.get('/book', function(req,res){

server.facePlus()

  res.render('face', {Hello: 'Unirest'})
})



module.exports = router;
