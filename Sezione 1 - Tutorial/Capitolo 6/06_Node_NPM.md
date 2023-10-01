# 06 - NodeJS NPM (Node Package Module)

## Come scaricare un modulo esterno

Per `scaricare` un modulo esterno a NodeJS basta usare la parola chiave `npm` nel terminale
Proviamo a scaricare il `modulo upper-case`

```
npm install upper-case
```

## Come importare un modulo da NPM

Esattamente come per i moduli integrati, i moduli scaricati via NPM si includono attraverso `require()`

```
let uc = require('upper-case');
```

Ora `creiamo un file` NodeJs che convertirà l'output `"Hello World!"` in `lettere maiuscole`
Esempio [qui](06_Node_NPM.js)