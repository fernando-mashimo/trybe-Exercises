// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
// Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let gradePercent = -1;
let gradeLetter = "";

if (gradePercent >= 90 && gradePercent <= 100) {
    gradeLetter = "A";
} else if (gradePercent >= 80) {
    gradeLetter = "B";
} else if (gradePercent >= 70) {
    gradeLetter = "C";
} else if (gradePercent >= 60) {
    gradeLetter = "D";
} else if (gradePercent >= 50) {
    gradeLetter = "E";
} else if (gradePercent >= 0) {
    gradeLetter = "F";
} else gradeLetter = "Nota inválida!";

console.log("Nota: " + gradeLetter + " (" + gradePercent + "%).");