/*Crie uma função genérica chamada retornarElemento<T> que recebe
dois parâmetros:
-> Um array de tipo genérico T
-> Um número index
A função deve retornar o elemento do array na posição indicada. T este
a função com um array de strings e um de números.
Exemplo:
retornarElemento([10,20,30], 1) => 20
retornarElemento(["a", "b", "c"], 0) => "a" 
*/

function retornarElemento<T>(array: T[], i: number): T | undefined {
    return array[i];
}
const sagaDoInfinito = ['Desafio Infinito', 'Guerra Infinita', 'Cruzada Infinita'];
const numerosDaSorte = [20, 48, 8];

console.log(retornarElemento(sagaDoInfinito, 1));
console.log(retornarElemento(numerosDaSorte, 2));