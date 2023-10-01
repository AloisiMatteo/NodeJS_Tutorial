# 08 - Upload File Module (Esterno)

## Come scaricare il modulo

Per `caricare un file` si usa il `modulo formidable`, per scaricarlo useremo `npm`

```
npm install formidable
```

Una volta scaricato possiamo `includerlo` usando il metodo `require()`:

```
let formidable = require('formidable')
```

## Come caricare un file

Bisogna effettuare 3 passaggi per `caricare un file` attraverso l'uso del `modulo formidable`:

1. Creare una form di compilazione
2. Analizza il file caricato (`metodo parse()`)
3. Salva il file

### Creare un form

`Creiamo una form` di compilazione `HTML` con NodeJS, questa form dovrà avere un campo di `caricamento file`
   (esempio [qui](08_Esempio01.js))

### Analizzare il file caricato

Includendo il `modulo Formidable` saremo in grado di analizzare il file caricato una volta che viene
    caricato nel server.

Quando il file in questione viene `analizzato`, questo ha un proprio `spazio` in una `cartella temporanea`
    all'interno del tuo computer (esempio [qui](08_Esempio02.js)).

### Salvare il file caricato

Quando un file è stato `caricato` nel server, questo viene `collocato` in una cartella temporanea.

Il percorso di questa cartella si trova nell'`oggetto files`, passato dal `metodo parse()` come `terzo parametro`

Per `spostare il file` in una cartella prestabilita, useremo il `modulo File System`, e `rinomineremo` il file
To move the file to the folder of your choice, use the File System module, and rename the file
    (esempio [qui](08_Esempio03.js))
