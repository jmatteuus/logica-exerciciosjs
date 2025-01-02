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
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    };
    info(){
        console.log(`Informações do Livro: \nTítulo: ${this.titulo} \nAutor: ${this.autor} \nAno: ${this.ano}`);
    }
};
const livro1 = new Livro('Os inovadores','Walter isaacson',2014);
livro1.info();


//Exercicio 05
class Pessoas{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`${this.nome} está falando`)
    }
}

class Aluno extends Pessoas{
    constructor(nome, nota){
        super(nome);
        this.nota = nota;
    }
    mostrarNota(){
        console.log(`Aluno: ${this.nome} \nNota: ${this.nota}`);
    }
}
const aluno1 = new Aluno('Joãozinho', 9.5);
aluno1.mostrarNota();
aluno1.falar();


//Exercicio 06
class Animal{
    fazerSom(){
        console.log('O animal está fazendo um som...');
    }
}

class Cachorro{
    fazerSom(){
        console.log('O cachorro está latindo...');
    }
}
const cachorro1 = new Cachorro();
cachorro1.fazerSom();


//Exercicio 07
class Produto{
    constructor(nome, preco, quantidadeEstoque){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }
    desconto(valor){
        this.preco -= valor;
    }
}
const produto1 = new Produto('Notebook',3000.90,357);
produto1.desconto(0.90);


//Exercicio 08
class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        const area = this.largura * this.altura;
        return console.log(`A área do seu retângulo é: ${area}`);
    }
    calcularPerimetro(){
        const perimetro = 2 * (this.largura + this.altura);
        return console.log(`O perímetro do seu retângulo é: ${perimetro}`);
    }
}
const retangulo1 = new Retangulo(9,12);
retangulo1.calcularArea();
retangulo1.calcularPerimetro();


//Exercicio 09
class Empresa{
    constructor(){
        this.funcionarios = []
    }
    adicionarFuncionario(funcionario){
        funcionario.forEach(funcionario => {
            this.funcionarios.push({ nome: funcionario });
        });
    }
    listarFuncionarios(){
        console.table(this.funcionarios);
    }
}
const empresa1 = new Empresa();

empresa1.adicionarFuncionario(['João','Maria','Lucas','Júlia']);
empresa1.listarFuncionarios();


//Exercicio 010
class FormaGeometrica{
    constructor(cor){
        this.cor = cor;
    }
    area(){
        console.log('Aqui não se calcula nada!');
    }
}

class Quadrado extends FormaGeometrica{
    constructor(cor, lado){
        super(cor);
        this.lado = lado;
    }
    area(){
        return console.log(this.lado * this.lado);
    }
}

class Circulo extends FormaGeometrica{
    constructor(cor, raio){
        super(cor);
        this.raio = raio;
    }
    area(){
        return console.log(Math.PI * this.raio * this.raio);
    }
}

const quadrado1 = new Quadrado('Azul',7);
const circulo1 = new Circulo('Vermelho',9.18);

quadrado1.area();
circulo1.area();