var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url; //request한 url은 사용자가 요청한 주소
    var queryData = url.parse(_url,true).query;
    console.log(queryData.id);
    //console.log(_url);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    //console.log(__dirname + _url);
    response.end(queryData.id);
    response.end(fs.readFileSync(__dirname + _url));
 
});
app.listen(3000);