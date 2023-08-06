var http = require('http');

//!) Create an http server
http.createServer(function (req, res) {
//2) Return “Hello world” from the response
  res.write('Hello World!'); 
//3) Ensure when you navigate to the server on the browser, “Hello world” is returned.
  res.end(); 
}).listen(8081); 
