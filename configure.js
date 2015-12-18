var encoded_ck= '65O2gFJnGQwf1hW2k0Xjks0HY'

// unirest.post('https://api.twitter.com/oauth2/token')
// .headers({
//   'Host': 'api.twitter.com',
//   'UserAgent': 'FaceIt Analyzer',
//   'Authorization': 'Basic NjVPMmdGSm5HUXdmMWhXMmswWGprczBIWTpCMTNTSlB6N3dlWDdneTRuSzBwc3JNa0JJYVk2bUxsd3ZxcDhOOW16SVUyWHE3UnNQbQ==',
//   'ContentType': 'application/x-www-form-urlencoded;charset=UTF-8',
//   'ContentLength': 29,
//   'AcceptEncoding': 'gzip'
// })
// .send({
// grant_type: "client_credentials"
// })

// function runFaceAPI(urlArray, callback) {
//   faceStats = []
//   for (var i = 0; i < 4; i++) {
//     facePlus(urlArray[i], function(response) {
//       var facialInfo = pullFacialInfo(response)
//       faceStats.push(facialInfo)
//       if(faceStats.length === 3){
//         return callback(faceStats)
//       }
//     })
//   }
// }

// google.load('visualization', '1.0', {'packags':['corechart']});
//
// google.setOnLoadCallback(drawChart);
//
//
//function drawBarGraph() {
//       var data= gogle.visualization.arrayToDataTable([
//   ['Element', 'Density', { role: 'style' }, { role: 'annotation' } ],
//   ['Copper', 8.94, '#b87333', 'Cu' ],
//   ['Silver', 10.49, 'silver', 'Ag' ],
//   ['Gold', 19.30, 'gold', 'Au' ],
//   ['Platinum', 21.45, 'color: #e5e4e2', 'Pt' ]
// ]);
//   var options = {'title': 'Gender',
// 'width': 500,
// 'height': 300};
//   var bar = new google.visualization.BarChart(document.getElementById('infoPic'));
//   bar.draw(data, options);
//
// }

module.exports = {
  consumer_key: '65O2gFJnGQwf1hW2k0Xjks0HY',
  consumer_secret: 'B13SJPz7weX7gy4nK0psrMkBIaY6mLlwvqp8N9mzIU2Xq7RsPm',
  access_token_secret: 'd3L13y1AEH6DVEjfbS5Kq6u4doSCLgrB6Kf9Sy4E5D1PJ',
  access_token: '1002396163-AxflU4hlzpm4pKnOSQu7Sak0QmDvydBCHu69YBL',
  bearer_token_credentials: "65O2gFJnGQwf1hW2k0Xjks0HY:B13SJPz7weX7gy4nK0psrMkBIaY6mLlwvqp8N9mzIU2Xq7RsPm"
  //base64_encoded_code: 'NjVPMmdGSm5HUXdmMWhXMmswWGprczBIWTpCMTNTSlB6N3dlWDdneTRuSzBwc3JNa0JJYVk2bUxsd3ZxcDhOOW16SVUyWHE3UnNQbQ=='
//  bearer_token = 'AAAAAAAAAAAAAAAAAAAAAJXtjAAAAAAAsCq%2FDdho0BH3XcpIs3a7KSv3eTQ%3DmalMDz9X4egeebhLVmlH7KLgpHDKBGjJuQREXSEBIo1q9kgcKd'
};
