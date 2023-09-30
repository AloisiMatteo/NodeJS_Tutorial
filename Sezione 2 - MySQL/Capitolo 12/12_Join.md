# 12 - Join (statement)

Puoi `unire righe` da 2 o più tabelle basandoti su una colonna da loro `in comune`,
    per farlo bisogna usare lo statement `JOIN`

Prendi come riferimento adesso queste due tabelle:

> UTENTI

```
[
  { id: 1, nome: 'John', prodotto_preferito: 154},
  { id: 2, nome: 'Peter', prodotto_preferito: 154},
  { id: 3, nome: 'Amy', prodotto_preferito: 155},
  { id: 4, nome: 'Hannah', prodotto_preferito:},
  { id: 5, nome: 'Michael', prodotto_preferito:}
]
```
> PRODOTTI

```
[
  { id: 154, nome: 'Chocolate Heaven' },
  { id: 155, nome: 'Tasty Lemons' },
  { id: 156, nome: 'Vanilla Dreams' }
]
```

Queste due `tabelle` possono essere `combinato` usando da utenti il campo `prodotti_preferiti`,
    mentre da prodotti il campo `id`

>   
Puoi anche usare `INNER JOIN` anzichè `JOIN`, produrranno lo stesso risultato!


## Uso del LEFT JOIN

Se vuoi `mostrare` tutti gli utenti, `senza riguardo` se hanno un prodotto preferito o no,
    possiamo usare lo statement `LEFT JOIN`, infatti la seguente `query`:

```
SELECT nome FROM utenti AS user,
nome FROM prodotti AS favorite
FROM utenti LEFT JOIN prodotti
ON utenti.prodotto_preferito = prodotto.id
```

Produrrà questo risultato:

```
[
  { user: 'John', favorite: 'Chocolate Heaven' },
  { user: 'Peter', favorite: 'Chocolate Heaven' },
  { user: 'Amy', favorite: 'Tasty Lemons' },
  { user: 'Hannah', favorite: null },
  { user: 'Michael', favorite: null }
]
```


## Uso del RIGHT JOIN

Se vuoi `mostrare` tutti i prodotti, e gli utenti che li hanno come `favoriti`, anche `senza` utenti che hanno quel 
prodotto tra i `favoriti`, possiamo usare lo statement `RIGHT JOIN`, infatti:

```
SELECT nome FROM utenti AS user,
nome FROM prodotti AS favorite
FROM utenti RIGHT JOIN prodotti
ON utenti.prodotto_preferito = prodotto.id
```

Produrrà questo risultato:

```
[
  { user: 'John', favorite: 'Chocolate Heaven' },
  { user: 'Peter', favorite: 'Chocolate Heaven' },
  { user: 'Amy', favorite: 'Tasty Lemons' },
  { user: null, favorite: 'Vanilla Dreams' }
]
```

>   
Annah e Michael non vengono mostrati in quanto non hanno prodotti preferiti!
