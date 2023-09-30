# 03 - Modulo HTTP (Integrato)

## includere il modulo HTTP

Come sempre per includerlo bisogna usare il `require`

```
var http = require('http');
```

## Creare un server con NodeJS

Il `modulo HTTP` può creare un server che ascolta in una determinata porta,
    questa emetterà una risposta ai client

Per farlo si usa il metodo `createServer()`

```
//Crea un oggetto nel server:
http.createServer(function (req, res) {

    //Manda una risposta al client
    res.write('Hello World!'); 

    //Termina la risposta
    res.end(); 

}).listen(8080); //L'oggetto server acolterà sulla porta 8080
```

## Come aggiungere un Header HTTP

Se la `risposta` dovrà essere mostrata come `file HTML`, allora dovremmo includere un `Header HTTP`:

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
```

Il `primo argomento` del metodo `res.writeHeade()` è il codice di stato, 200 significa che è tutto OK.
Il `secondo argomento` è `un oggetto` contenente gli headers di risposta.


## Come leggere una stringa di una Query

La funzione passa da `http.createServer()` come argomento `req`,
    il quale rappresenta la richiesta del client come un oggetto `(http.IncomingMessage object)`

Quest'oggetto ha una proprietà chiamata `url`che tiene tracca dell'url che proviene
    dopo il nome di dominio:

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
```

## Come dividere la stringa di una Query

Ci sono dei `moduli pre-definiti` che dividono facilmente la stringa in entrata in `parti leggibili`,
    come ad esempio il `modulo URL`:

```
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
```