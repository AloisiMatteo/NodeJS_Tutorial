# 02 - Module

# Cos'è un modulo?

`Un modulo` può essere visto come delle `librerie JavaScript`
Un `set di funzioni` che vuoi importare nella tua applicazione.

## Moduli Pre-definiti

`NodeJS` presenta un elenco di `moduli predefiniti` che possono essere usati
    `senza alcuna installazione`

## Come si include un modulo nella proprio applicazione?

Si possono `includere` moduli nell'applicazione attraverso la `funzione require`
    come da esempio:

```
var http = require('http');
```

In questo modo possiamo usare il `modulo http` nella nostra applicazione

```
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

## Come si crea un modulo?

I moduli possono essere creati in questo modo:

```
exports.myDateTime = function () {
  return Date();
};
```

Usando la parola chiave `exports` rendiamo disponibili proprietà e motodi 
    anche fuori dal file del modulo.


## Come si include un modulo creato dall'utente?

Un modulo generato dall'utente di include come se fosse un modulo normale,
    quindi usando `require`

```
var http = require('http');

// Qui dipende da dove si ha salvato il proprio modulo
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
```