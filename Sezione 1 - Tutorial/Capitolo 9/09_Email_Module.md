# 09 - Email Module (Esterno)

## Come scaricare il modulo

Per `inviare un email` si usa il `modulo nodemailer`, per scaricarlo useremo `npm`

```
npm install nodemailer
```

Una volta scaricato possiamo `includerlo` usando il metodo `require()`:

```
let nodemailer = require('nodemailer')
```

## Come mandare un email

Adesso sei pronto per `mandare una mail` nel tuo server.

Usando `username` e `password` della tua email selezionata potrai inviarci un messaggio.
Con questa spiegazione sarai in grado di usare il tuo `account Gmail` per spedire un email:
    (riferimento `09_Email_Module.js`)


## Come mandare un email a piu persone

Esattamente come nell'esempio precedente (riferimento `09_Email_Module.js`), per inviare un email
    a più persone basta `modificare` leggermente le `opzioni dell'email`

```
let opzioniEmail = {
    from: 'tuaemail@gmail.com',
    to: 'primaemail@gmail.com', 'secondaemail@gmail.com',
    subject: 'soggetto email',
    text: 'testo email'
}
```

## Come spedire una pagina HTML nell'email

Per `spedire` un `testo HTML` nella tua email, usa la `proprietà html` al posto della `proprietà text`:

```
let opzioniEmail = {
    from: 'tuaemail@gmail.com',
    to: 'primaemail@gmail.com', 'secondaemail@gmail.com',
    subject: 'soggetto email',
    html: '<h1>Esempio</h1><p>Testo HTML</p>'
}
```