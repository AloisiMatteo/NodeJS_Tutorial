let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore

    let query = "SELECT * FROM clienti LIMIT 2, 5"
    connessione.query(query, (errore, risultato) => {
        if (errore) throw errore
        console.log('Risultato: ' + risultato);
    })
})


// [
//     { id: 3, name: 'Amy', address: 'Apple st 652'},
//     { id: 4, name: 'Hannah', address: 'Mountain 21'},
//     { id: 5, name: 'Michael', address: 'Valley 345'},
//     { id: 6, name: 'Sandy', address: 'Ocean blvd 2'},
//     { id: 7, name: 'Betty', address: 'Green Grass 1'}
//   ]