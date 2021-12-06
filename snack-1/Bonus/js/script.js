// SNACK 1 - BONUS

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

// Creo l'array
const bikeArray = 
[
    {
        nome: 'Trek Émonda SLR 9 eTap',
        peso: 7,
        image: 'img/trek-emonda-slr-9-etap.png'
    },
    {
        nome: 'Giant Propel Advanced PRO DISC 0',
        peso: 8,
        image: 'img/giant-propel-advanced-pro-disc-0.jpg'
    },
    {
        nome: 'Cannondele SuperSix EVO Carbon Disc Ultegra',
        peso: 6,
        image: 'img/cannondele-supersix-evo-carbon.webp'
    }
]

// seleziono bike-container
const bikeContainer = document.querySelector('.bike-container');

// Inizializzo la variabile con il primo oggetto dell'array per confrontarlo
let lightestBike = bikeArray[0]

// Lettura e destructuring degli oggetti
for (let i = 0; i < bikeArray.length; i++) {
    const singleBike = bikeArray[i]

    let activeClass = '';
    // Se il peso della bici è inferiore di quela di default lo sovrascrivo 
    if (singleBike.peso < lightestBike.peso) {
        lightestBike = singleBike
        activeClass = 'active';
    }

    bikeContainer.innerHTML += `
    <!-- Single Bike -->
    <div class="card ${activeClass}">
        <img src="${singleBike.image}" alt="${singleBike.nome}">
        <h2>${singleBike.nome}</h2>
    </div>
    `
}