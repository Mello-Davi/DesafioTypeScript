/*Defina um type alias chamado StatusRequisicao que pode ser "sucesso", "erro" ou "carregando" . Em seguida, implemente uma função
mostrarMensagemStatus que recebe um parâmetro desse tipo e
retorna uma mensagem correspondente.
Exemplo de uso esperado:
mostrarMensagemStatus("carregando");
//"Aguarde... carregando dados."
*/

type StatusRequisicao = 'sucesso' | 'carregando' | 'erro'; 


function mostrarMensagemStatus (parametro: StatusRequisicao): string{
    if(parametro === 'sucesso'){
        return "A requisição foi recebida com sucesso.";
    } else {
        if(parametro === 'erro'){
            return "Erro na requisição.";
        } else {
            return "Aguarde... carregando dados.";
        }
    }
}
console.log(mostrarMensagemStatus('carregando'));