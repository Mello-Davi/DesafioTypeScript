/* Crie uma variável total com o valor 100. Depois, crie uma função
adicionar que receba dois parâmetros e retorne a soma deles. Não use
anotações explícitas de tipo. Deixe que o TypeScript faça a inferência
automaticamente.
Exemplo de uso esperado:
const resultado = adicionar(20, 30); / / resultado = 5 */

let variavelTotal = 100;

function adicionar (a: number, b: number) {
    return  a + b;
}

const resultado = adicionar(20, 30);
console.log(resultado);