let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore

    let query = "SELECT nome, indirizzo FROM clienti"
    connessione.query(query, (errore, risultato, campi) => {

        if (errore) throw errore
        console.log('Risultato: ' + risultato);

    })
})