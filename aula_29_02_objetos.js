const apartamento= {
    quartos: 2,
    tipo: 'Apartamento', 
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7 
}

console.log(`${apartamento.tipo} com ${apartamento.quartos}
quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}`)

const produtoEmbalado= {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preço: 3500.00
}
console.log(` O ${produtoEmbalado.nome}, da ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}, está à venda por R$ ${produtoEmbalado.preço}`)

class IMOVEL {
    quartos;
    tipo;
    endereco; 
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, endereço:${this.endereco}`
    }
}
const Imovel = new IMOVEL();
Imovel.quartos=3;
Imovel.tipo='casa'
Imovel.endereco='Rua da Amizade, 789 - Bairro Alegre'
console.log(imovel.exibirInformacoes());


