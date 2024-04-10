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
console.log(categoria(7));*/

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
        return (raio**2)*3.14
    return raio*raio*3.14
}
console.log(area(6))

//Exercício 07
function temperatura(graus){
    return(graus**1.8)+32
    return graus*graus*1.8
}
console.log(temperatura(4))

//Exercício 08
function imc(altura, peso){
    let altura=('Digite uma altura: ')
    let peso=('Digite um peso: ')
        return((altura*altura)/peso);

}
console.log(imc())

//Exercício 09
function senha(){
    senha=input('Digite uma senha: ')

}