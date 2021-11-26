// SNACK 1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

// Creo l'array
const bikeArray = 
[
    {
        nome: 'Trek Émonda SLR 9 eTap',
        peso: 7
    },
    {
        nome: 'Giant Propel Advanced PRO DISC 0',
        peso: 8
    },
    {
        nome: 'Cannondele SuperSix EVO Carbon Disc Ultegra',
        peso: 6
    }
]


// Lettura e destructuring degli oggetti
for (let i = 0; i < bikeArray.length; i++) {
    const singleBike = bikeArray[i]

    // Destucturing degli oggetti
    const {nome, peso} = singleBike;

    // Inizializzo la variabile con il primo oggetto dell'array per confrontarlo
    let lightestBike = bikeArray[0].peso
    console.log('prima: ', lightestBike)

    if (peso < lightestBike) {
        lightestBike = peso
    }
    console.log('Dopo: ', lightestBike)


}
