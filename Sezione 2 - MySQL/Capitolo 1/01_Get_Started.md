# 01 - Get Started 

## Database SQL

Per accedere a queste funzioni deve esserci `MySQL` nel tuo pc.
Puoi scaricarlo [qui](https://www.mysql.com/downloads/)

## Come installare il modulo MySQL (Esterno)

Per `accedere al database MySQL` si usa il `modulo mysql`, per scaricarlo useremo `npm`

```
npm install mysql
```

Una volta scaricato possiamo `includerlo` usando il metodo `require()`:

```
let mysql = require('mysql')
```

## Come creare una connessione

Possiamo `creare una connessione` al database attraverso `username` e `password`
    del tuo `database MySQL` (esempio [qui](01_Esempio01.js))


## Come interrogare un database (fare una query)

Le `interrogazioni` al database sono denominate `query`.
Facciamo una prova su com'è possibile `interrogare` un database `MySQL` (esempio [qui](01_Esempio02.js))