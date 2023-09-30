let http = require('http')
let formidable = require('formidable')
let fs = require('fs')

http.createServer((req, res) => {

    if (req.url = '/fileupload') {
        let form = new formidable.IncomingForm()
        form.parse(req, (errore, campi, files) => {

            // Memorizzo vecchia e nuova path in modo da poter rinominare il file
            let vecchiaPath = files.filetoupload.filepath
            let nuovaPath = 'C:/Users/Nome Utente/' + files.filetoupload.originalFilename;

            // Rinomino il file (modulo file system)
            fs.rename(vecchiaPath, nuovaPath, (errore) => {
                if (errore) throw errore
                res.write('File caricato con successo!')
                res.end()
            })
        })
    } else {
        res.writeHead(200, { 'Content-Type' : 'text/html' })
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit">')
        res.write('</form>')
        res.end()
    }

}).listen(8080)