//Exercicio 01 (Anagrama)
const anagrama = (frase1, frase2) => {
    const Frase1 = frase1.split('').sort().join('');
    const Frase2 = frase2.split('').sort().join('');

    return Frase1 === Frase2;
};
console.log(anagrama('estudo','duetos'));


//Exercicio 02