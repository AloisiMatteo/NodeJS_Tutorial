# 05 - Select From (query)

Per `mostrare i volari` in una tabella nel database usiamo la dichiarazione `SELECT FROM`
    (esempio [qui](05_SELECT_FROM_1.js))

> SELECT * mostra tutte le colonne

## Come gestire le colonne mostrate

Per `mostrare` solo qualcuna della colonne interne alla tabella, usiamo la `dichiarazione SELECT`
    specificandone il `nome della colonna` di seguito (esempio [qui](05_SELECT_FROM_2.js))

## Oggetto 'campi'

Il `terzo parametro` della funzione è un `array` contenente informazioni riguardante `ogni campo` del risultato,
    infatti il seguente codice:

```
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
  });
});
```

Darà come `risultato`:

```
[
  {
    catalog: 'def',
    db: 'mydb',
    table: 'customers',
    orgTable: 'customers',
    name: 'name',
    orgName: 'name',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  },
  {
    catalog: 'def',
    db: 'mydb',
    table: 'customers',
    orgTable: 'customers',
    name: 'address',
    orgName: 'address',
    charsetNr: 33,
    length: 765,
    type: 253,
    flags: 0,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  }
]
```