// CONSEGNA - BONUS


// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti

// 1-  Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. 
//     Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.

// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70

// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


let students = [
        { name: 'Marco', id: 213, grades: 78 },
        { name: 'Paola', id: 110, grades: 96 },
        { name: 'Andrea', id: 250, grades: 48 },
        { name: 'Gaia', id: 145, grades: 74 },
        { name: 'Luigi', id: 196, grades: 68 },
        { name: 'Piero', id: 102, grades: 50 },
        { name: 'Francesca', id: 120, grades: 84 },
];

// Seleziono la lista degli studenti
const studentNameList = document.getElementById('student-list')

for (let i = 0; i < students.length; i++) {
    let singleStudentName = students[i].name.toUpperCase();
    studentNameList.innerHTML += `
    <li>${singleStudentName}</li>
    `
}

// Al click del bottone "voti >= 70" mostra nella lista di destra gli studenti

// Seleziono il bottone "voti >= 70"
const button70 = document.getElementById('button-70');
button70.addEventListener('click', studentFilter70);

// Seleziono il bottone "voti >= 70 e id >= 120"
const button70And120 = document.getElementById('button-70-120');
button70And120.addEventListener('click', studentFilter70And120);

const filteredStudentList = document.getElementById('filtered-list');
const filteredListTitle = document.getElementById('filtered-list-title');
let studentTitle = document.getElementById('student-title');









// FUNCTION

// Questa funzione filtra gli studenti con voto >= 70,
// e li inserisce nella lista degli studenti filtrati.
function studentFilter70() {

    filteredStudentList.innerHTML = ``
    studentTitle.innerHTML = `Studenti con`
    filteredListTitle.innerHTML = `voti > 70:`

    // Con filter creo un nuovo array dove inserisco gli studenti solo se hanno grades >= 70.
    const students70array = students.filter((element, index, array) => {
         return element.grades >= 70;
    });

    for (let i = 0; i < students70array.length; i++) {
        let singleStudent70 = students70array[i].name;
        filteredStudentList.innerHTML += `
        <li>${singleStudent70}</li>
        `
    }

}

// Questa funzione filtra gli studenti con voto >= 70 e id >= 120,
// e li inserisce nella lista degli studenti filtrati.
function studentFilter70And120() {

    filteredStudentList.innerHTML = ``
    studentTitle.innerHTML = `Studenti con`
    filteredListTitle.innerHTML = `voti > 70 e 120:`

    // Con filter creo un nuovo array dove inserisco gli studenti solo se hanno grades >= 70 e id >= 120.
    const students70And120Array = students.filter((element, index, array) => {
        return element.grades >= 70 && element.id >= 120;
    });

    for (let i = 0; i < students70And120Array.length; i++) {
        let singleStudent70And120 = students70And120Array[i].name;
        filteredStudentList.innerHTML += `
        <li>${singleStudent70And120}</li>
        `
    }

}