//Exercicio 01
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}
const pessoa1 = new Pessoa('Mateus', 21);
pessoa1.apresentar();


//Exercicio 02