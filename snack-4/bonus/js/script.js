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


const studentNameList = document.getElementById('student-list')

for (let i = 0; i < students.length; i++) {
    let singleStudentName = students[i].name.toUpperCase();
    console.log('singleStudentName: ', singleStudentName)
    studentNameList.innerHTML += `
    <li>${singleStudentName}</li>
    `
}



// Con filter creo un nuovo array dove inserisco gli studenti solo se hanno grades > 70.
const students70array = students.filter((element, index, array) => {
    if( element.grades >= 70 ) {
        return true;
    }
    // Versione abbreviata
    // return element.grades >= 70;
});
console.log('students70array: ', students70array)



// Con filter creo un nuovo array dove inserisco gli studenti solo se hanno grades > 70 e id > 120.
const students70And120Array = students.filter((element, index, array) => {
    if( element.grades >= 70 && element.id >= 120 ) {
        return true;
    }
    // Versione abbreviata
    // return element.grades >= 70 && element.id >= 120;
});
console.log('students70And120Array: ', students70And120Array)

// let studentList = document.getElementById(student-list);
// console.log(studentList)
// // Stampo tutti gli studenti nella pagina a sinistra
// for (let i = 0; i < students.length; i++) {
//     studentList.innerHTML += `
//     <ul>
//         <li>ciao</li>
//         <li>ciao</li>
//         <li>ciao</li>
//         <li>ciao</li>
//         <li>ciao</li>
//         <li>ciao</li>
//         <li>ciao</li>
//     </ul>
    // `
// }

// Al click del bottone 70, stampo tutti glistudenti con più di 70

// Al click del bottone 70-100, cancello quello che c'era prima e stampo
// tutti glistudenti con più di 70 e 100
