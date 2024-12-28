//Exercicio 01 (Anagrama)
const anagrama = (frase1, frase2) => {
    const Frase1 = frase1.split('').sort().join('');
    const Frase2 = frase2.split('').sort().join('');

    return Frase1 === Frase2;
};
console.log(anagrama('estudo','duetos'));


//Exercicio 02
let numeros = [];
let frequencia = {};
for(let i = 1; i <= 100; i++){
    numeros[i] = Math.floor(Math.random() * 6) + 1;
}
numeros.forEach(n => {
    frequencia[n] = (frequencia[n] || 0) + 1;
});
function resultado() {
    console.log('A quantidade de cada número é:');
    for (let num in frequencia) {
      console.log(`Número ${num}: ${frequencia[num]} vezes`);
    }
  }
resultado();