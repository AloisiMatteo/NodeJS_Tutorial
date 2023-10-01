# 05 - URL Module (Integrato)

## Come importare il modulo

Un modulo si include, ovviamente, con il metodo `fs.require()`

```
var url = require('url');
```

## Come analizzare un URL

Per analizzare un URL si usa il metodo `url.parse()`, questo ritornerà un oggetto con tutte le
    proprietà dell'indirizzo specificato

Esempio:

```
var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //ritorna 'localhost:8080'
console.log(q.pathname); //ritorna '/default.html'
console.log(q.search); //ritorna '?year=2017&month=february'

var qdata = q.query; //ritorna an object: { year: 2017, month: 'february' }
console.log(qdata.month); //ritorna 'february'
```

## Come mandare una file al client

Adesso che sappiamo come analizzare appieno una richiesta e che nello scorso capitolo abbiamo visto come
    far diventare NodeJS un file server. Proviamo a mandare un file al client.

Prenderemo come riferimento `summer.html` e `winter.html`.

Creiamo un file NodeJs che `apre un file` specificato e ne `ritorna il contenuto` al client.
In caso di un errore, questo manderà un `404 error` (esempio [qui](05_URL_Module.js))
