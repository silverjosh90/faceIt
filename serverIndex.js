var unirest = require('unirest')


// Setting Hashtag parameter

// Twitter profile picture URL's

function urlFunc(response) {

var urlArray = []
var twitterResponse = response.raw_body

twit = JSON.parse(twitterResponse)
imageURL= twit["statuses"]

for(var i =0; i <imageURL.length; i++) {
  var j = imageURL[i]["user"]["profile_image_url_https"]
  urlArray.push(j)
}
return urlArray
}

// Face ++ API call
function facePlus(face) {
unirest.get('https://apius.faceplusplus.com/v2/detection/detect?url=http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzNTU2NjAwMzMy.jpg&api_secret=feLqtEaQo2FF5fwPMGrEsF3KTUYNhfE5&api_key=3a66b94f0a395a0cae0dc57451ff1375&attribute=glass,pose,gender,age,race,smiling')
  .end(function (response) {
    var data = response.body
    var age = data["face"][0]["attribute"]["age"]
    var gender = data["face"][0]["attribute"]["gender"]
    var race = data["face"][0]["attribute"]["race"]
    console.log(age);
  });
}

//Twitter API call

function twitterCall(search) {
  url = []
unirest.get('https://api.twitter.com/1.1/search/tweets.json?q=%23' + search)
.headers({
  'Host': 'api.twitter.com',
  'UserAgent': 'FaceIt Analyzer',
  'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAJXtjAAAAAAAsCq%2FDdho0BH3XcpIs3a7KSv3eTQ%3DmalMDz9X4egeebhLVmlH7KLgpHDKBGjJuQREXSEBIo1q9kgcKd'
})
.end(function(response){
  var profileImage = urlFunc(response)
  for(x in profileImage) {
    console.log(profileImage[x].replace("_normal",""))
    url.push(profileImage[x])
  }
  });
console.log(url)
return url
}


module.exports =  {
  urlFunc: urlFunc,
  twitterCall: twitterCall,
  facePlus: facePlus
}
