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

    connessione.query("CREATE TABLE clienti (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), indirizzo VARCHAR(255))", 
    (errore, risultato) => {

        if (errore) throw errore
        console.log('Tabella creata!');

    })
})


