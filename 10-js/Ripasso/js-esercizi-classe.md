1 - Crea una variabile di nome isRaining

Uso di if - else: se la variabile è true deve comparire il messaggio in console: Ricordati di prendere l'ombrello. Se la variabile è false compare il messaggio: non c'è bisogno dell'ombrello.

2 - Crea una variabile di nome number a cui associare un numero. Usa if assieme a else if  ed a else per fare comparire un messaggio in console: se number è maggiore di zero: `${number} è un numero positivo` Se è minore di zero: ${number} è un numero negativo`. Se è uguale a zero: number è uguale a zero. Se è una lettera o un simbolo : number non è un numero.

3 - Ottieni l'input dell'utente usando prompt('inserisci la tua età'). Se l'utente ha 18 o più vecchio, devi dare un feedback: hai l'età giusta per guidare. Se l'età è sotto i 18 deve comparire un messaggio in cui si dice quanti anni mancano alla patente.

4 - imposta una variabile myAge e yourAge e usa if...else per comparare le due età. In console deve comparire un messaggio: sei cinque anni più vecchio di me, oppure: sei due anni più giovane di me

5 - imposta due variabili:

```
  let a = 4
  let b = 3
```

usando prima if...else e poi il **ternary operator**, deve comparire un messaggio: a è più grande di b, oppure: a è più piccolo di b.

6 - pari e dispari

I numeri pari sono divisibili per due e il resto è zero. Controlla come controllare se un numero è pari o no

```
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
```

### Switch

Switch è un'alternativa per **if else if else else**. Esempio:

```
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}
```

7- Scrivi un programma che assegna voti agli studenti in relazione al loro punteggio:

- 80-100, A
- 70-79, B
- 60-69, C
- 50-59, D
- 0-49, F

8 - Controlla se la stagione è Autunno, Inverno, Primavera, Estate. Se l'user input è:

- Settembre, Ottobre, Novembre, la stagione è Autunno.

- Dicembre, Gennaio, Febbraio: la stagione è Inverno.

- Marzo, Aprile, Maggio: Primavera.

- Giugno, Luglio, Agosto: Estate.

9 - Scrivi un programma che dice il numero dei giorni in un mese:

```
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
```
