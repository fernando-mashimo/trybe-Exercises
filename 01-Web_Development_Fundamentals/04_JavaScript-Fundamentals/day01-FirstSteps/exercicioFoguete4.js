const alpha = 20;
const beta = 30;
const gamma = 60;
let resultado = true;

if (alpha < 0 || beta < 0 || gamma < 0) {
    console.log("Valores inválidos!")
}   else if (alpha + beta + gamma !== 180) {
        console.log(!resultado);
    } else console.log(resultado);