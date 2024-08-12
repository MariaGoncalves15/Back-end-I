//Exercicio While
//1
import input from 'readline-sync';
let numero =input.questionInt('Digite um número: ');
let contador=0
while (contador<=10) {
    console.log(`${numero} X ${contador}: ${numero*contador}`)
    contador++;
}

//2
let numAlunos=input.questionInt('Digite o númerode alunos da turma: ');
let somaMedias=0
let contadorAlunos=1
while(contadorAlunos <= numAlunos) {
    console.log(`Aluno ${contadorAlunos}:`);

    let somaNotas = 0;
    let contadorBimestres = 1;

    while (contadorBimestres <= 4) {
        let nota = rl.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
        somaNotas = somaNotas + nota;
        contadorBimestres++;
    }

    let mediaAluno = somaNotas / 4;

    somaMedias += mediaAluno;

    console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);

    contadorAlunos++;
}

let mediaGeralTurma = somaMedias / numAlunos;


console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);

//Exercicio do Do/while
//1
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let num;
do{
    num = input.questionInt('Digite um número aleatório de 1 a 100: ')
    if (num==numeroAleatorio) {
        console.log('Você conseguiu acertar, Parabéns!')    
    } else if (num<numeroAleatorio) {
        console.log("Tente um número maior.")
    } else {
        console.log("tente um número menor.")
    }
} while(num!==numeroAleatorio);

//For
//1
let anterior=0;
let atual=1;
console.log(anterior);
console.log(atual);
    for (let indi = 3; indi <= 20; indi++) {
        let proximo = anterior + atual;
        console.log(proximo);
        anterior = atual;
        atual = proximo
    }

//2
for (let indi = 1; indi <= 10; indi++) {
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);

    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }

    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}    

//For in e for of
//1
console.log("\t--- Exercício 01 ---")
const dadosPessoa = {
    nome: "Maria Eduarda",
    idade: 15,
    cidade: "Vilhena - Rondônia"
};
for (let chave in dadosPessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

//2
console.log("\n\t--- Exercício 02 ---")
const cores = ["Azul", "Roxo", "Cinza", "Verde", "Vermelho"];

for (let cor of cores) {
    console.log(cor);
}

//3
console.log("\n\t--- Exercício 03 ---")
const string = "Estudo no IFRO";
for (let caractere of string) {
    console.log(caractere);
}
