# 11 - Limit (statement)

Puoi `limitare` i `record mostrati` dalla query attraverso lo statement `LIMIT`
    (esempio [qui](11_LIMIT_1.js))


## Come ricevere dati partendo da un altra posizione

Se vuoi `mostrare` solo cinque record, ma `partendo` dal terzo, allora puoi usare la parola chiave `OFFSET`
    (esempio [qui](11_LIMIT_2.js))

>   
`OFFSET 2` significa che parte dalla `terza posizione`, non dalla seconda!


## Come scriverlo con una sintassi abbreviata

Puoi anche scrivere il tutto questo come `LIMIT 2, 5`, la quale darà come risultato lo stesso visto sopra
    (esempio [qui](11_LIMIT_3.js))

>   
Anche se i numeri sono invertiti, `LIMIT 5 OFFSET 2` è equivalente a `LIMIT 2, 5`