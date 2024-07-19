import input from 'readline-sync';

//questao 1
function simples(letras){
    return letras.toUpperCase();
}
console.log(simples('nao sei'));

let simples=function(letras){
    return letras.toUpperCase();
};
console.log(simples('nao sei'));


//questao 2
function categoria(numero){
     return numero%2===0?"Par":"Impar"
};
console.log(categoria(2));

let categoria=function(numero){
    return numero%2===0?"Par":"Impar";
};
console.log(categoria(7));

//questao 3

function soma(num1, num2){
    return num1+num2;
};
console.log(soma(7,9));*/

let soma=function(num1, num2){
    return num1+num2;
};
console.log(soma(10,90));


//questao 4
function valor(numero, porcentagem){
    return numero*(porcentagem/100)};
    
let valor=(numero, porcentagem)=>{ return numero*(porcentagem/100)}
    console.log(valor(5,12)) 


//Exercicio 5
function produto(valor,porcentagem){
    return valor-(porcentagem/100)
}
console.log(produto(150,30))
let produto=(valor,porcentagem)=>{return valor-(porcentagem/100)}
console.log(produto(100,30))

//Nível Médio
//exercicio 6
function area(raio){
        let resultado = (raio*2)*3.14
        return `A área de um círculo com o raio de ${raio} é de ${resultado}`
    }
console.log(area(6))

//Exercício 07
function temperatura(graus){
    let  fahrenheit = (graus*1.8)+32
    return console.log(`${celsius}°C = ${fahrenheit}°F`)
}
console.log(temperatura(4))


//Exercício 08
function imc(altura, peso){
    let altura=('Digite uma altura: ')
    let peso=('Digite um peso: ')
        return(peso/(altura*altura));
}
console.log(imc())

//Exercício 09
function vereficar(senha) 
{
    if (senha.toUpperCase() === senha) {
        console.log("A senha não contem letras minúsculas.")
    } else if (senha.toLowerCase() === senha) {
        console.log("A senha não contem letras maiúcula.")
    } else if (senha.replace(/[^a-zA-Z0-9]/g, '') === senha) {
        console.log("A sua senha não tem caractere especial.")
    } else if (senha.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === senha) {
        console.log("A sua senha não tem caractere especial.")
    } else if (senha.length < 8) {
        console.log("Sua senha é muito curta.")
    } else console.log("Sua senha é segura.")
}

let senha = input.question("Crie uma senha: ")

vereficar(senha)


//Exercício 10
let numerosVerificadoresApresentados;
let cpfSemNumeroVerificador;
let numeroSeparado;
let soma = 0;
let numeroSeparadoMultiplicado;
let numeroVerificador;
let restoDaDivisao;
let cont = 0;
let multiplicador = 10;

function validarCPF(cpfVariavel) {
    cpfVariavel = cpfVariavel.replace(/-/g, '')
    cpfVariavel = cpfVariavel.replace(/\./g, '')
    if (cpfVariavel.length != 11) {
        console.log("Seu cpf não a o número correto de digitos")
        return false
    }
    numerosVerificadoresApresentados = cpfVariavel.slice(-2);
    cpfSemNumeroVerificador = cpfVariavel.slice(0, 9);

    while (cont < 2) {
        for (let index = 0; index < cpfSemNumeroVerificador.length; index++) {
            numeroSeparado = cpfSemNumeroVerificador[index];
            numeroSeparadoMultiplicado = numeroSeparado * (multiplicador - index);
            soma += numeroSeparadoMultiplicado;
        };

        restoDaDivisao = soma % 11;
        if (restoDaDivisao < 2) {
            numeroVerificador = 0
        } else {
            numeroVerificador = 11 - restoDaDivisao;
        }
        cpfSemNumeroVerificador += numeroVerificador.toLocaleString()
        multiplicador += 1
        soma = 0
        cont++
        
    }
    if (cpfVariavel === cpfSemNumeroVerificador) {
        console.log("Seu cpf é válido")
        return true
    } else {
        console.log("Seu cpf não é válido")
        return false
    }
};

let cpf = input.question("Digite seu cpf: ")
validarCPF(cpf)

//Exercício 11 

let resultadoDoInvestimento;
let taxaDeJurosDecimal;

function retornoInvestimento(capitalInicial, taxaDeJurosPorcentagem, tempo) {
    taxaDeJurosDecimal = taxaDeJurosPorcentagem / 100;
    resultadoDoInvestimento = capitalInicial * (1+taxaDeJurosDecimal) * tempo;
    return `Após ${tempo} meses com ${taxaDeJurosPorcentagem}% de taxa de juros, seu capital irá de R$ ${capitalInicial.toFixed(2)} para R$ ${resultadoDoInvestimento.toFixed(2)}` 
};

let c = input.questionFloat("Digite o seu capital inicial: ")
let i = input.questionInt("Digite a taxa de juros, em percentual: ")
let t = input.questionInt("Digite o tempo de investimento em meses: ")


console.log(retornoInvestimento(c, i, t));