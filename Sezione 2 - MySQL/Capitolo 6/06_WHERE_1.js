let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore

    let query = "SELECT * FROM clienti WHERE indirizzo = 'Park Lane 38'"
    connessione.query(query, (errore, risultato) => {
        if (errore) throw errore
        console.log('Risultato: ' + risultato);
    })
})