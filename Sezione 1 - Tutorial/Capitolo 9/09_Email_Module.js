let nodemailer = require('nodemailer')

// Creo il servizio di trasporto email
let trasporto = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'miaemail@gmail.com',
        pass: 'password'
    }
})

// Setto le opzioni dell'email
let opzioniEmail = {
    from: 'miaemail@gmail.com',
    to: 'amicocaro@gmail.com',
    subject: 'soggetto email',
    text: 'testo email'
}

// Ora posso spedire l'email
trasporto.sendMail(opzioniEmail, (errore, info) => {
    if (errore) throw errore
    else console.log('Messaggio inviato: ' + info)
})