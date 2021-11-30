// CONSEGNA

// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.


// ESERCIZIO CON 'forEach'
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min = 1;
const max = 5;

// const newNameArray = [];

// myArray.forEach((element, index, array) => {
//     if( index > min && index < max ) {
//         newNameArray.push(element);
//     }

    // (index > min && index < max) ? newNameArray.push(element) : null;
// });

// console.log('newNameArray: ', newNameArray)


// ESERCIZIO CON 'filter'
const newNameArray = myArray.filter((element, index, array) => {

    // Se questa condizione si verifica il return sarà 'true' e quindi 
    // pusherà in automatico l'elemento dentro l'array nuovo (newNameArray).
    if( index > min && index < max ) {
        return true;
    }

    // Versione abbreviata
    // return index > min && index < max;
})

console.log('newNameArray: ', newNameArray)