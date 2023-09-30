let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore
    connessione.query("INSERT INTO clienti (nome, indirizzo) VALUES ('Michelle', 'Blue Village 1')",
    (errore, risultato) => {
        if (errore) throw errore
        console.log('1 Record auto inserito: ' + risultato.insertId);
    })
})