//Exercício 1
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


//Exercício 2
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

//Exercício 3
let fatorial = ((a) => {
    let fatorial = 1
    for(let i = 1;i <= a;i++){
        fatorial *= i;
    }
    return fatorial;
});
console.log(fatorial(5));

//Exercício 4
const Numbers = [99,66,325,124,64,7,36,25,85];
const somaMedia = Numbers.reduce((numero,acumulador) => acumulador += numero);
let media = somaMedia / Numbers.length;
console.log(media.toFixed(2));