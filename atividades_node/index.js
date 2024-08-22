//import entradaDados from 'readline-sync'

//let nome= entradaDados.question('Digite seu nome: ');
//console.log(`Olá, ${nome}.`)

//let x = entradaDados.question('X: ')
//let y = entradaDados.question('Y: ')
//console.log(`Total: ${x+y}`);
import rl from 'readline-sync'

let ddd= rl.questionInt("Digite seu DDD:");

switch (ddd) {
    case 69:
    console.log("Rondônia")        
        break;
    case 21:
        console.log("Rio de Janeiro")
        break
    case 11: 
    console.log("São Paulo")    
        break
        case 65: 
        console.log("Mato Grosso")    
            break
    default:
        break;
}