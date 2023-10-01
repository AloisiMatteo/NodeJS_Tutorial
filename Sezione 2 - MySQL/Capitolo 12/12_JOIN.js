// 1. Mostra il nome degli utenti come "user"
// 2. Mostra il nome dei prodotti come "favorite"
// 3. Mostra tutto dall'unione di utenti e prodotti, ma solo se il prodotto preferito degli utenti
//    è uguale all'id del prodotto


let mysql = require('mysql')

let connessione = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
})

connessione.connect((errore) => {
    if (errore) throw errore

    let query = 
    " SELECT nome FROM utenti AS user," +
    " nome FROM prodotti AS favorite" +
    " FROM utenti JOIN prodotti" +
    " ON utenti.prodotto_preferito = prodotto.id"

    connessione.query(query, (errore, risultato) => {
        if (errore) throw errore
        console.log('Risultato: ' + risultato);
    })
})


// [
//     { user: 'John', favorite: 'Chocolate Heaven' },
//     { user: 'Peter', favorite: 'Chocolate Heaven' },
//     { user: 'Amy', favorite: 'Tasty Lemons' }
//   ]