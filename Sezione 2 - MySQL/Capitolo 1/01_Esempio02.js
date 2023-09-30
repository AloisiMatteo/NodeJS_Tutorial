let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password'
})

connessione.connect((errore) => {
    if (errore) throw errore
    console.log('Connesso!');
    connessione.query(sql, (errore, risultato) => {
        if (errore) throw errore
        console.log('Risultato: ' + risultato);
    })
})