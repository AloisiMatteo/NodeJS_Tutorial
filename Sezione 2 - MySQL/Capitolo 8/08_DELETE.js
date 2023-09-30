let mysql = require('mysql');

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore

    let query = "DELETE FROM clienti WHERE indirizzo = 'Mountain 21'"
    connessione.query(query, (errore, risultato) => {
        if (errore) throw errore
        console.log('Record eliminati: ' + risultato.affectedRows);
    })
})

// Record eliminati: 1