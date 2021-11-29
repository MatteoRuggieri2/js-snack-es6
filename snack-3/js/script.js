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

const newNameArray = [];
myArray.forEach((element, index, array) => {
    if( index > min && index < max ) {
        newNameArray.push(element);
    }
});
console.log('newNameArray: ', newNameArray)