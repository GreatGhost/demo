var http = require('http')
http.createServer(function(req, res){
 res.writeHead(200, { 'Content-Type': 'text-plain' });
 res.end('Hello World');
}).listen(8083);
//8083是服务端口号，可以任意设置