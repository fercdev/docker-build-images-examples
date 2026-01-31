const http = require('http')
const PORT = process.env.PORT || 5000;

http.createServer((req, res) => {
    console.log('Server levantando');
    res.writeHead(200,{ 'Content-type': 'text/plain'});
    res.end('Hola desde el servidor de ejemplo!!');
}).listen(PORT);