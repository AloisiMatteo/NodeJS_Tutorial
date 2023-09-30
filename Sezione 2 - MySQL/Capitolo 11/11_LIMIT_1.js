let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore

    let query = "SELECT * FROM clienti LIMIT 5"
    connessione.query(query, (errore, risultato) => {
        if (errore) throw errore
        console.log('Risultato: ' + risultato);
    })
})


// [
//     { id: 1, name: 'John', address: 'Highway 71'},
//     { id: 2, name: 'Peter', address: 'Lowstreet 4'},
//     { id: 3, name: 'Amy', address: 'Apple st 652'},
//     { id: 4, name: 'Hannah', address: 'Mountain 21'},
//     { id: 5, name: 'Michael', address: 'Valley 345'}
//   ]