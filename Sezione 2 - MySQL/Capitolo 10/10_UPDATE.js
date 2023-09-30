let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore

    let query = "UPDATE clienti SET address = 'Canyon 123' WHERE address = 'Valley 345'"
    connessione.query(query, (errore, risultato) => {
        if (errore) throw errore
        console.log('Record Aggiornati: ' + risultato.affectedRows);
    })
})

// Record Aggiornati: 1