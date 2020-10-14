const http = require('http'); // 1 - Import Node.js core module

const hostname ="localhost";
const port = 3000;

var server = http.createServer(function (req, res) {   // 2 - creating server
 	res.statusCode = 200;
	res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World");
	
});

server.listen(port,hostname,()=>{
	console.log(`server running app http://${hostname}:${port}`);
}); 



