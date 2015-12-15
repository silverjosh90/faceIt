var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var keys = require('/Users/joshsilverstein/workspace/express/express-introduction/faceAnalyzer/configure.js')

/* GET home page. */
router.get('/', function(req, res, next) {
unirest.get('https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi')
.headers({
  'Host': 'api.twitter.com',
  'UserAgent': 'FaceIt Analyzer',
  'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAJXtjAAAAAAAsCq%2FDdho0BH3XcpIs3a7KSv3eTQ%3DmalMDz9X4egeebhLVmlH7KLgpHDKBGjJuQREXSEBIo1q9kgcKd'
})
.end(function(response){
  for(thing in response) {
  console.log(thing)
}
  });

  res.render('index', { title: 'Face It' });
});

router.get('/book', function(req,res){
  unirest.get('https://apius.faceplusplus.com/v2/detection/detect?url=http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzNTU2NjAwMzMy.jpg&api_secret=feLqtEaQo2FF5fwPMGrEsF3KTUYNhfE5&api_key=3a66b94f0a395a0cae0dc57451ff1375&attribute=glass,pose,gender,age,race,smiling')
    .end(function (response) {
      var data = response.body
      var age = data["face"][0]["attribute"]["age"]
      var gender = data["face"][0]["attribute"]["gender"]
      var race = data["face"][0]["attribute"]["race"]
      console.log(age);
    });

  res.render('face', {Hello: 'Unirest'})
})



module.exports = router;
