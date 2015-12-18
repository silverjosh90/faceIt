var unirest = require('unirest')



function pullFacialInfo(response) {
  var info = []
  var data = response.body
  if (data["face"][0] !== undefined) {
    var age = data["face"][0]["attribute"]["age"]
    info.push({"age":age})
  }
  if (data["face"][0] !== undefined) {
    var gender = data["face"][0]["attribute"]["gender"]
    info.push({"gender": gender})
  }
  if (data["face"][0] !== undefined) {
    var race = data["face"][0]["attribute"]["race"]
    info.push({"race": race})
  }
  return info
}

function facePlus(face, callback) {
  unirest.get('https://apius.faceplusplus.com/v2/detection/detect?url=' + face + '&api_secret=feLqtEaQo2FF5fwPMGrEsF3KTUYNhfE5&api_key=3a66b94f0a395a0cae0dc57451ff1375&attribute=glass,pose,gender,age,race,smiling')
    .end(function(response) {
      return callback(response);
    });

}

function runFaceAPI(urlArray, callback) {
  faceStats = []
  for (var i = 0; i < 3; i++) {
    facePlus(urlArray[i], function(response) {
      var facialInfo = pullFacialInfo(response)
      faceStats.push(facialInfo)
      if(faceStats.length === 3){
        return callback(faceStats)
      }
    })
  }
}

function urlFunc(response) {
  var urlArray = []
  var twitterResponse = response.raw_body

  twit = JSON.parse(twitterResponse)
  imageURL = twit["statuses"]

  for (var i = 0; i < imageURL.length; i++) {
    var j = imageURL[i]["user"]["profile_image_url_https"]
    var bigImg = j.replace("_normal", "")
    urlArray.push(bigImg)
  }
  return urlArray
}

// Face ++ API call

//Twitter API call

function twitterCall(search, callback) {
  var url = [];
  return unirest.get('https://api.twitter.com/1.1/search/tweets.json?q=%23' + search)
    .headers({
      'Host': 'api.twitter.com',
      'UserAgent': 'FaceIt Analyzer',
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAJXtjAAAAAAAsCq%2FDdho0BH3XcpIs3a7KSv3eTQ%3DmalMDz9X4egeebhLVmlH7KLgpHDKBGjJuQREXSEBIo1q9kgcKd'
    })
    .end(function(response) {
      return callback(response);
      // var profileImage = urlFunc(response)
      // for(x in profileImage) {
      //   var bigImg= profileImage[x].replace("_normal","")
      //   url.push(bigImg)
      // }
      // return response
    });
}

function makeItReadAble(x) {
  faces= {}
  for (var i = 0; i < x.length; i++) {

  faces["Person"+i] = x[i]
  // var taco = faces["Person"+i]
  //
  // if(taco !== []) {
  //   faces["Person"+i]["age"] = taco[0]["age"]
  //   faces["Person"+i]["gender"] = taco[1]["gender"]
  //   faces["Person"+i]["race"] = taco[2]["race"]
  //   console.log("*****TACO");
  //   console.log(taco["gender"]);
  //   console.log("END TACO");
  }
  return faces
}




module.exports = {
  urlFunc: urlFunc,
  twitterCall: twitterCall,
  facePlus: facePlus,
  pullFacialInfo: pullFacialInfo,
  runFaceAPI: runFaceAPI,
  makeItReadAble: makeItReadAble
}
