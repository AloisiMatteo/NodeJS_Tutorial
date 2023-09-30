let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password'
})

connessione.connect((errore) => {
    if (errore) throw errore
    console.log('Connesso!');
    connessione.query("CREATE DATABASE mydb", (errore, risultato) => {
        if (errore) throw errore
        console.log('Database Creato!');
    })
})