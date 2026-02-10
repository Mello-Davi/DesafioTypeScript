/* Crie uma interface chamada Livro com os seguintes campos: titulo,
autor , anoPublicacao.
Depois, escreva uma função resumirLivro que recebe um objeto do tipo
Livro e retorna uma string como:
"O livro 'Dom Casmurro' foi escrito por Machado de Assis em 1899."
"*/

interface ILivro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function resumirLivro (parametro: ILivro) {
    return `O livro ${parametro.titulo} foi escrito por ${parametro.autor} em ${parametro.anoPublicacao}.`
}

console.log(resumirLivro({titulo: "'Senhor dos Anéis: A Sociedade do Anel'", autor: "J.R.R. Tolkien", anoPublicacao: 1954}));