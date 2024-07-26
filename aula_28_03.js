/*01 Crie uma função que receba uma string como
parâmetro e retorne a mesma string com todas as letras
em caixa alta;*/

function atividade(tarefa){
    return tarefa.toUpperCase();
}
console.log(atividade('provas'));

let atividade=function(tarefa){
    return tarefa.toUpperCase();
};
console.log(atividade('provas'));

/*02 Crie uma função que receba um número como
parâmetro e verifique se ele é par ou ímpar. Retorne uma
string.*/

function verificar(numero){
    return numero%2===0? 'par':'ímpar';
};
console.log(verificar('6'));

let verificar=function(numero){
    return numero%2===0? 'par':'ímpar';
};
console.log(verificar('7'));
/*03 Crie uma função que receba dois números como
parâmetros e retorne a soma deles.*/

function soma(num1, num2){
    return num1 + num2;
}
console.log(soma('10,20'));

let soma=function(num1, num2){
    return num1 + num2;
}
console.log(soma('10,20'));

/*04 Crie uma função que receba um valor e uma
porcentagem como parâmetros. A função deve retornar o
valor acrescido da porcentagem indicada.*/
 function valor(numero, porcentagem){
    return numero* (porcentagem/200);
 }
let valor=input('Digite um valor: ');