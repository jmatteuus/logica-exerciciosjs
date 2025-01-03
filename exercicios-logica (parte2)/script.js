//Exercicio 01 (Anagrama)
const anagrama = (frase1, frase2) => {
  const Frase1 = frase1.split('').sort().join('');
  const Frase2 = frase2.split('').sort().join('');

  return Frase1 === Frase2;
};
console.log(anagrama('estudo', 'duetos'));


//Exercicio 02
let numeros = [];
let frequencia = {};
for (let i = 1; i <= 100; i++) {
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
  { nome: 'Arthur', idade: 25 },
  { nome: 'Caio', idade: 24 },
  { nome: 'Levi', idade: 35 },
  { nome: 'Mateus', idade: 21 }
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
const num = [5, 5, 6, 7, 9, 7, 7, 9, 4, 2, 3, 5, 1];

function obterNumerosUnicos(array) {
  let numerosUnicos = array.filter((num, index, array) => {
    return array.indexOf(num) === array.lastIndexOf(num);
  });
  return numerosUnicos;
};
console.log(obterNumerosUnicos(num));


//Exercicio 05
function calcularTempoExecucao(funcao) {

  const inicio = performance.now();
  for (let i = 0; i < 1000000; i++) {
    funcao()
  }
  const fim = performance.now();

  const tempoExecucao = fim - inicio;
  return tempoExecucao;
}

let exemplo = () => 5 + 5; //Função a ser calculada o tempo de execução.

console.log(calcularTempoExecucao(exemplo).toFixed(2));


//Exercicio 06
function fibonacci() {
  let n1 = 0;
  let n2 = 1;
  let sequencia = `${n1} ${n2} `;
  for (let i = 0; i <= 10; i++) {
    let n3 = n1 + n2;
    sequencia += `${n3} `
    n1 = n2;
    n2 = n3;
  }
  console.log(sequencia);
}
fibonacci();


//Exercicio 07
const Num = [-6, -3, 9, 5, -7, 10, -15, 4, 7, 3];

let positivo = Num.filter(num => num > 0);
console.log(positivo);
let negativo = Num.filter(num => num < 0);
console.log(negativo);


//Exercicio 08
let frase = 'Calcular maior palavra desta frase';

function calcularMaiorPalavra(frase){
  let maiorFrase =  frase.split(' ').reduce((atual, maior) => atual.length > maior.length ? atual : maior);
  console.log(maiorFrase);
};
calcularMaiorPalavra(frase);


//Exericio 09
const arrayMultidimensional = [
  [5,8,3,4],
  [9,1,7,2],
  [2,5,0,1]
];

function flattenArray(array){
  let arrayUnidimendional = array.flat(Infinity);
  console.log(arrayUnidimendional);
};
flattenArray(arrayMultidimensional);