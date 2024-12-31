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


//Exercicio 03
const pessoas = [
  {nome: 'Arthur', idade: 25},
  {nome: 'Caio', idade: 24},
  {nome: 'Levi', idade: 35},
  {nome: 'Mateus', idade: 21}
]

function ordenarPorPropriedade(array, propriedade) {
  return array.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });
}
console.log(ordenarPorPropriedade(pessoas, 'nome'));


//Exercicio 04
const num = [5,5,6,7,9,7,7,9,4,2,3,5,1];

function obterNumerosUnicos(array){
  let numerosUnicos = array.filter((num, index, array) => {
    return array.indexOf(num) === array.lastIndexOf(num);
  });
  return numerosUnicos;
};
console.log(obterNumerosUnicos(num));