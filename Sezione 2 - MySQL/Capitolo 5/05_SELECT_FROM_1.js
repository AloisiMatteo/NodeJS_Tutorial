let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore
    console.log('Connesso!');
    connessione.query("SELECT * FROM clienti", 
        (errore, risultato, campi) => {
            if (errore) throw errore
            console.log('Inserito un registro/record!');
        })
})