//Exercicio 01
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
const pessoa1 = new Pessoa('Mateus', 21);
pessoa1.apresentar();


//Exercicio 02
class Carro{
    constructor(marca, modelo, ano, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    info(){
        console.log(`INFORMAÇÕES: \n ano: ${this.ano} \n marca: ${this.marca} \n modelo: ${this.modelo} \n cor: ${this.cor}`)
    }
}
const carro1 = new Carro('Volkswagen','Tiguan All-space',2021,'Preto');
carro1.info();


//Exercicio 03
class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor
    }
    extrato(){
        console.log(this.saldo);
    }
    info(){
        console.log(`INFORMAÇÕES: \nTitular: ${this.titular} \nExtrato: ${this.saldo}`);
    }
};

let conta1 = new ContaBancaria('João',3890.90);
conta1.depositar(2000.10);
conta1.sacar(500.00);
conta1.extrato();
conta1.info();


//Exercicio 04
class Livro{
    
}