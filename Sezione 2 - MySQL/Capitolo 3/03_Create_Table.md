# 03 - Create Table (query)

Per `creare una tabella` nel database usiamo la dichiarazione `CREATE TABLE`


## Uso della Primary Key

Quando crei una tabella puoi anche creare una colonna con un `identificatore univoco` per `ogni record`
    questo viene chiamato `primary key` (Riferimento `02_CREATE_TABLE_1.js`).

Questo può essere fatto definendo una colonna come `INT AUTO_INCREMENT PRIMARY KEY`, nel quale `inserirà`
    un `numero univoco` per ogni record. `Partendo da 1`, ed incrementandosi per ogni altro record.
    (Riferimento `02_CREATE_TABLE_2.js`).

Se la `tabella desiderata` già `esiste`, al posto di `CREATE TABLE` useremo la dichiarazione `ALTER TABLE`
    (riferimento `02_ALTER_TABLE`)