var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
    let oggetto = url.parse(req.url)
    let nomeFile = '.' + oggetto.pathname

    fs.readFile(nomeFile, (errore, data) => {
        if (errore) {
            res.writeHead(404, {'Content-Type' : 'text/html'})
            return res.end('File Non Trovato')
        }
        res.writeHead(200, { 'Content-Type' : 'text/html' })
        res.write(data)
        return res.end()
    })
}).listen(8080)