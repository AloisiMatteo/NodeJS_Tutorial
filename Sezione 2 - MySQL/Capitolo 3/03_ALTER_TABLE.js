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

    connessione.query("ALTER TABLE clienti ADD COLUMN id INT AUTO_INCREMENT PRIMARY_KEY", 
    (errore, risultato) => {

        if (errore) throw errore
        console.log('Tabella creata!');

    })
})


