# 10 - Update (statement)

Puoi `aggiornare` record esistenti in una tabella usando lo statement `UPDATE`
    (riferimento `10_UPDATE.js`)

>   
La clausola `WHERE` specifica quali record saranno aggiornati.
Se erroneamente viene `emessa` la clausola, `tutti i record` saranno aggiornati!

## Oggetto Risultato

Usando lo statment `UPDATE` l'oggetto avrà un output di questo tipo:

```
{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '(Rows matched: 1 Changed: 1 Warnings: 0',
  protocol41: true,
  changedRows: 1
}
```