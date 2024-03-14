import input from'readline-sync'
//Questãso 1
let mes= input.questionInt('Digite um número:')
switch (mes) {
    case 1:
        console.log('Segunda-Feira')
        break;
    case 2:
        console.log('Terça-Feira')
        break;
    case 3:
    console.log('Quarta-Feira')
        break;
    case 4:
    console.log('Quinta-Feira')
        break;
    case 5:
    console.log('Sexta-Feira')
        break;
    case 6:
    console.log('Sábado-Feira')
        break;
    case 7:
    console.log('Segunda-Feira')
        break;
    default:
        console.log('Dia da Semana não encontrado/não existe')
        break;
}
//Questão 2
let num_mes= input.questionInt('Digite um número:')
switch (num_mes) {
    case 1:
        console.log('Janeiro')
        break;
    case 2:
        console.log('Fevereiro')
        break;
    case 3:
    console.log('Março')
        break;
    case 4:
    console.log('Abril')
        break;
    case 5:
    console.log('Maio')
        break;
    case 6:
    console.log('Junho')
        break;
    case 7:
    console.log('Julho')
        break;
    case 8:
    console.log('Agosto')
        break;
    case 9:
    console.log('Setembro')
        break; 
    case 10:
    console.log('Outubro')
        break;
    case 11:
    console.log('Novembro')
        break;
    case 12:
    console.log('Dezembro')
        break;
    default:
        console.log('Este número de mês não existe')
        break;
}

//Questão 3
let num1= input.questionInt('Digite um número: ')
let num2= input.questionInt('Digite um número: ')
let operacao = input.question('digite sua operação: ')

switch (operacao) {
    case '+':
    console.log(`Total: ${num1+num2}`)
        break;
    case '-':
    console.log(`Total: ${num1-num2}`)
        break;
    case '*':
    console.log(`Total: ${num1*num2}`)
        break;
    case '/':
    console.log(`Total: ${num1/num2}`)
        break; 
    default:
        console.log('Operação não realizada')
        break;
}

//Questão 4
let salario= input.questionInt('digite seu salario:')
let bonifi= input.question('Coloque sua Bonificação: ')

switch (bonifi) {
    case 'A':
        console.log(`Sua bonificao sera de:R$${salario*(5/100)}`)
        break;
    case 'B':
        console.log(`Sua bonificao sera de:R$${salario*(10/100)}`)
        break;    
    case 'C':
        console.log(`Sua bonificao sera de:R$${salario*(15/100)}`)
        break;
    case 'D':
        console.log(`Sua bonificao sera de:R$${salario*(20/100)}`)
        break;
    default:
        console.log(`Aumento nao encontrado`)
        break;
}