/*Crie um type alias chamado Genero que pode ser
"masculino" | "feminino". 
 Depois, crie uma interface Pessoa com as propriedades
nome (string), idade (number) e genero (Genero). Por fim, implemente
uma função apresentarPessoa que recebe uma Pessoa e retorna uma
mensagem apresentando-a.
Exemplo:
"Maria tem 30 anos e se identifica como feminino."
*/

type Genero = 'masculino' | 'feminino';

interface IPessoa {
    nome: string;
    idade: number;
    genero: Genero;
}

//obejeto apenas para teste
const davi: IPessoa = {
    nome: "Davi",
    idade: 19,
    genero: 'masculino',
    }

    function apresentarPessoa(pessoa: IPessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`
}

console.log(apresentarPessoa(davi));