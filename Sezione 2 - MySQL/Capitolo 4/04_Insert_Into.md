# 04 - Insert Into (query)

Per `riempire una tabella` nel database usiamo la dichiarazione `INSERT INTO`
    (esempio [qui](04_INSERT_INTO_1.js))


## Come inserire record multipli

Per `inserire più di un record` basta realizzare un `array` contenente dei valori, per poi inserire un `"?"` nell'`sql`,
    nel quale verrà `rimpiazzato` con tutti i valori presenti all'array:

```
INSERT INTO clienti (nome, indirizzo) VALUES ?
```

Esempio [qui](04_INSERT_INTO_2.js)


## L'oggetto 'risultato'

Quando emettiamo una `query`, ci viene restituito un `oggetto 'risultato'`

L'oggetto `risultato` contiene le `informazioni` sulla `query` che ricerca la tabella.
L'oggetto `risultato` ritorna una serie di valori come:

```
{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}
```


## Come ottenere un ID auto inserito

Per ottenere il `campo id` nelle tabelle dove viene `auto incrementato`
 puoi fare richiesta all'oggetto `risultato` (esempio [qui](04_INSERT_INTO_3.js))