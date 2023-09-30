# 04 - File System Module (Integrato)

## Importare il modulo

Come gia ripetuto in precedenza un modulo s'importa con `require()`

```
var fs = require('fs');
```

Questo `modulo` viene tipicamente `usato per`:

1. [Leggere un file](README.md#come-leggere-un-file)
2. [Creare un file](README.md#come-creare-un-file)
3. [Aggiornare un file](README.md#come-aggiornare-un-file)
4. [Cancellare un file](README.md#come-cancellare-un-file)
5. [Rinominare un file](README.md#come-rinominare-un-file)


## Come leggere un file

Per leggere un file si usa il metodo `fs.readFile()`
Per quest'esempio prenderemo come riferimento `04_File_System_Module.html`

Ora scriviamo il codice NodeJS in modo che prima `legge` e poi ci `ritorna` il contenuto del `file HTML`

```
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```

## Come creare un file

Ci sono `3 opzioni` per `creare un file` in NodeJs:
1. `fs.appendFile()`
2. `fs.open()`
3. `fs.writeFile()`

### fs.appendFile()

Il metodo `fs.appendFile()` aggiunge del contenuto ad un file esistente,
    se questo non esiste allora lo crea con il contenuto emesso

Esempio con `fs.appendFile()`:

```
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

### fs.open()

Il metodo `fs.open()` opera mediante un `flag` come secondo argomento
    se il `flag` è `w` per writing allora il file è stato aperto per la scrittura
    se il `file non esiste` verrà creato un file vuoto

Esempio con `fs.open()`:

```
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```

### fs.writeFile()

Il metodo `fs.writeFile()` rimpiazza il file specificato con il suo contenuto se esiste
    se il file non esiste ne verrà creato uno nuovo con le informazioni emesse

Esempio con `fs.writeFile()`:

```
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```


## Come aggiornare un file

Ci sono `2 opzioni` per `aggiornare un file` in NodeJs:
1. `fs.appendFile()`
2. `fs.writeFile()`

### fs.appendFile()

Il metodo `fs.appendFile()` aggiunge il contenuto emesse alla fine del file specificato.

Esempio:

```
var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
```

### fs.writeFile()

Il metodo `fs.writeFile()` rimpiazza il file specifico ed il suo contenuto.

Esempio:

```
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
```


## Come eliminare un file

Per eliminare un file usiamo il metodo `fs.unlink()`
Il metodo `fs.unlink()` elimina il file specificato.

Esempio:

```
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```


## Come rinominare un file

Per rinominare un file usiamo il metodo `fs.rename()`
Questo metodo `rinomina` il file specificato 

Esempio:

```
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
```

## Come caricare un file

Un file si può anche `caricare` ma lo vedremo nel `capitolo 8`