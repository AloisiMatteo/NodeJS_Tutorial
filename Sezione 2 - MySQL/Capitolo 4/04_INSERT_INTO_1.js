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
    connessione.query("INSERT INTO client (nome, indirizzo) VALUE ('Company Inc', 'Highway 37') ", 
        (errore, risultato) => {
            if (errore) throw errore
            console.log('Inserito un registro/record!');
        })
})