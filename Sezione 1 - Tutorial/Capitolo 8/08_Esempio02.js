let http = require ('http')
let formifable = require('formidable')

http.createServer((req, res) => {

    if (req.url = '/fileupload') {

        // Creo il flusso della mia form
        let form = new formifable.IncomingForm()

        // Ora posso analizzare il file
        form.parse(req, (errore, campi, files) => {
            res.write('File Caricato con successo!')
            res.end()
        })
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }


}).listen(8080)