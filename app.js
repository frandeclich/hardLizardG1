const http = require('http'); //requiero el modulo nativo HTTP
const router = require('./router'); //requiero el enrutador

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    // Route System
    router(req,res)
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));