let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore

    let query = "DROP TABLE FROM IF EXIST clienti"
    connessione.query(query, (errore, risultato) => {
        if (errore) throw errore
        console.log(risultato);
    })
})
