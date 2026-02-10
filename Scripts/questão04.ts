/*Crie uma interface Usuario com:
-> nome: string
-> email: string
-> Um método exibirInfo() que retorna uma string com os dados do
usuário formatados.

Depois, crie um objeto baseado nessa interface e chame o método para
testar.

Exemplo de retorno:
"Nome: João - Email: joao@email.com"
*/

interface IUsuario{
    nome: string;
    email: string;
    exibirInfo(): string;
}

const Usuario: IUsuario = { 
    nome: "Davi",
    email: "davi@email.com",
    exibirInfo(){
        return `Nome: ${this.nome} - Email: ${this.email}.`
    }
}

console.log(Usuario.exibirInfo());





