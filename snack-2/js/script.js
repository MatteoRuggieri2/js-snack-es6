// SNACK 2

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// Creo un array di oggetti con le squadre di calcio
const footballTeamsArray =
[
    {
        nome: 'Ascoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Pescara',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Teramo',
        puntiFatti: 0,
        falliSubiti: 0
    },
];


// Genero numeri random per punti fatti e falli subiti
let teamScore;
let foulsSuffered;
const newFootballTeamsArray = [];

for (let i = 0; i < footballTeamsArray.length; i++) {
    let team = footballTeamsArray[i];

    // Genero un numero casuale per il punteggio
    teamScore = getRndInteger(0, 50);
    console.log('Team score: ', teamScore);

    // Genero un numero casuale per i falli subiti
    foulsSuffered = getRndInteger(0, 20);
    console.log('Fouls Suffered: ', foulsSuffered);

    // Assegno i dati agli oggetti
    team.puntiFatti = teamScore;
    team.falliSubiti = foulsSuffered;

    // Usando la destrutturazione, creo un nuovo array e lo popolo solo con i nomi delle squadre e i falli subiti
    const {nome, falliSubiti} = team;

    newFootballTeamsArray.push({
        nome: nome,
        falliSubiti: falliSubiti
    });
    
    console.log('Nuovo array: ', newFootballTeamsArray);

}



// FUNCTION
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}