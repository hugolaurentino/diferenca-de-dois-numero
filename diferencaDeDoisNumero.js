const numeros = [8, 11, 4, 1];

let numeroMaior = 0
let numeroMenor = numeros[0]

for (const maior of numeros) {
    if (maior > numeroMaior) {
        numeroMaior = maior
    }
}

for (const menor of numeros) {
    if (menor < numeroMenor) {
        numeroMenor = menor
    }
}

console.log(numeroMaior - numeroMenor);