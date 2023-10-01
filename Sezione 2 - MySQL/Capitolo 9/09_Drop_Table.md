# 09 - Drop Table (Statment)

Si può ` cancellare un tabella` esistente usando lo statment `DROP TABLE`
    (esempio [qui](09_DROP_TABLE_1.js))


## Come eliminare una tabella solo se esiste

Se la tabella che vuoi eliminare è gia `stata cancellata`, oppure per un altra ragione `non esiste`,
    puoi usare la parola chiave `IF EXIST` per evitare di avere un errore (esempio [qui](09_DROP_TABLE_2.js))

Se la tabella `esiste` otterremo questo risultato:

```
{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
```

Invece se la tabella `non esiste` otterremo:

```
{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 1,
  message: '',
  protocol41: true,
  changedRows: 0
}
```

Come si può vedere se la tabella `non esiste` la proprietà `varningCount` sarà 1.