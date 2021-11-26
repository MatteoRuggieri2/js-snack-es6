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


// Inizializzo la variabile con il primo oggetto dell'array per confrontarlo
let lightestBike = bikeArray[0]

// Lettura e destructuring degli oggetti
for (let i = 0; i < bikeArray.length; i++) {
    const singleBike = bikeArray[i]

    
    // Destucturing degli oggetti
    const {nome, peso} = singleBike;
    
    // Seleziono il container
    const container = document.getElementById('container');

    // Se il peso della bici è inferiore di quela di default lo sovrascrivo 
    if (singleBike.peso < lightestBike.peso) {
        lightestBike = singleBike

        // Stampo le Bike Features
        container.innerHTML += `
            <ul id="bike-fetures-list">
                <li>Nome: ${lightestBike.nome}</li>
                <li>Peso: ${lightestBike.peso} kg</li>
            </ul>
        `
    }
    
}