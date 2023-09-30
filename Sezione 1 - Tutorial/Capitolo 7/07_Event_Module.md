# 07 - Event Module (Integrato)

`NodeJs` è un tipo di applicazione `orientata agli eventi`

## Come gestire gli eventi con NodeJS

`Ogni azione` può essere considerata un `evento`, anche l'apertura o la chiusura di un file.

In NodeJS gli oggetti possono generare `eventi`, per esempio un oggetto `readStream`
    che emette un `evento` quanto apriamo o chiudiamo un file:

```
let fs = require('fs')
let rs = fs.createReadStream('./nomeFile.txt')

rs.on('open', () => {
    console.log('Il file è stato aperto')
})
```

# Gestire gli eventi attraverso il modulo integrato

Il `modulo Events` ci consente di chiamare, creare e metterci in ascolto dei nostri eventi.

Per includerlo come al solito usiamo il metodo `require()`.
Tutte le proprietà ed i metodi degli eventi sono un `instanza` di un oggetto `EventEmitter`.
Per aver accesso a tutto questo `creiamo` un `oggetto EventEmitter`:

```
let event = require('events')
let eventEmitter = event.EventEmitter()
```

## Scopo dell'oggetto EventEmitter

Attraverso l'oggetto `EventEmitter` puoi assegnare dei `gestori di eventi` ai tuoi eventi.
Per mandare un evento, si usa il metodo `fire()`:

```
let event = require('events')
let eventEmitter = event.EventEmitter()

// Creiamo un gestore di un evento
const mioGestore = () => {
    console.log('Ho sentito un urlo!')
}

// Assegno il gestore ad un evento
eventEmitter.on('scream', mioGestore);

// Faccio partire l'evento scream
eventEmitter.emit('scream')
```