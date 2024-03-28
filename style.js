/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

In JavaScript abbiamo varie tipologie di datatype e vengono rappresentati dal loro valore associato.
Ci rientrano sei diversi tipi:
Number= sono valori numerici inseriti senza "" ''.
String= sono vlaori testuali racchiusi in "" ''.
Bollean= facili da riconoscere perche possono assumere soltanto due valori che sono  TRUE o FALSE.
Undefined= sono quelle variabili non ancora definite ma non dichiarate vuote. Possiamo pensare ad una variabile la quale dobbiamo definire.
Null= al contrario di Undefined è dichiarata nulla, quindi una variabile vuota.
BigInt= utilizzata in presenza di valori numerici molto alti.
Symbol= Entità fise utilizzate sempre all'interno di funzioni.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

Oggetti= sono raccolte di coppie chiavi-valori.
Possiamo pensarli come gruppi di variabili che descrivono la stessa entità.

*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let mele = 5
let pere = 2
 let somma = mele + pere

 console.log(somma)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let name = "loredana"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4
let sottrazione = x - y

console.log(sottrazione)



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let name1 = "john"
let name2 = "John"

if (name1){
console.log("name1 is a true");
}else{
    console.log("name2 is false")
}