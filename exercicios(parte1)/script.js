//Exercício 1
let somar = (a, b) => a + b;
console.log(somar(10,5));


//Exercício 2
const numeros = [10,56,23,47,1,8,39,4,57];
const pares = numeros.filter((numeros, par) => par = numeros % 2 === 0);
console.log(pares);


//Exercício 3
const palindromo = ((frase) => {
    frase = frase.toLowerCase();
    let invertida = frase.split('').reverse().join('');
    if(invertida === frase){
        return true;
    } else {
        return false;
    }
});
console.log(palindromo('ovo'));


//Exercício 4
const frase = ((frase) => {
    let quantidade = 0
    for(let letra of frase){
        if(letra === 'a'){
            quantidade += 1
        }
    }
    return quantidade;
});
console.log(frase('ava'));


//Exercício 5
const carro = {
    marca: 'Toyota',
    modelo: 'SW4',
    ano: 2020,
    info(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`);
    }
}
carro.info();


//Exercício 6
let numeros100 = [];
for(let i = 1;i <= 100;i++){
    numeros100.push(i);
}
const soma100 = numeros100.reduce((somar, acumulador) => acumulador += somar);
console.log(soma100);


//Exercício 7
let fatorial = ((a) => {
    let fatorial = 1
    for(let i = 1;i <= a;i++){
        fatorial *= i;
    }
    return fatorial;
});
console.log(fatorial(5));


//Exercício 8
const letras = ['a','k','e','u','b','c','d','e','f','i','q','p']

letras.sort();
console.log(letras);


//Exercício 9
const Numeros = [17,46,93,45,83,79,24,2,3,4,67];
const dobrados = Numeros.map((n) => n * 2);
console.log(dobrados);


//Exercício 10
const Numbers = [99,66,325,124,64,7,36,25,85];
const somaMedia = Numbers.reduce((numero,acumulador) => acumulador += numero);
let media = somaMedia / Numbers.length;
console.log(media.toFixed(2));