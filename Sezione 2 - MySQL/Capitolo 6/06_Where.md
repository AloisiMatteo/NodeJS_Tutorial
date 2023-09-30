# 06 - Where (query)

Per `filtrare i record` mostrati in una tabella interna al database usiamo la dichiarazione `WHERE`
    (riferimento `06_WHERE_1`)

## Uso dei caratteri jolly

Puoi anche `mostrare` i record che `cominciano`, `includono` oppure che `finisco` con una lettera specifica.

Usando `%` vengono rappresentate zero, una o più lettere (riferimento `06_WHERE_2.js`)


## Uso di query con valori di escape

Quando i valori delle variabili sono inseriti dall'utente, questi possono essere `emessi`

Questo è usato per `prevenire` le iniezioni SQL (comunemente `hacking` per `distruggere` o `abusare` del tuo database)

Il modulo MySQL presenta metodi per `emettere` i valori di una query:

```
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
```

Puoi anche usare `?` come `placeholder` per i tuoi valori che vuoi `emettere`
In questo case, le variabili vengono inserite nel `secondo parametro` nel metodo `query()`:

```
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
```

Puoi fare lo stesso anche in caso di `valori multipli` da emettere:

```
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
```