var req;

function requestEmails() {
// Verificar o Browser
// Firefox, Google Chrome, Safari e outros
if(window.XMLHttpRequest) {
   req = new XMLHttpRequest();
}
// Internet Explorer
else if(window.ActiveXObject) {
   req = new ActiveXObject("Microsoft.XMLHTTP");
}
// Aqui vai o valor e o nome do campo que pediu a requisição.
var url = "scripts/listEmails.php";
// Chamada do método open para processar a requisição
req.open("Get", url, true);
// Quando o objeto recebe o retorno, chamamos a seguinte função;
req.onreadystatechange = function() {
    // Exibe a mensagem "Verificando" enquanto carrega
    if(req.readyState == 1) {
        document.getElementById('emails').innerHTML = '<font color="gray">Verificando...</font>';
    }
    // Verifica se o Ajax realizou todas as operações corretamente (essencial)
    if(req.readyState == 4 && req.status == 200) {
    // Resposta retornada pelo validacao.php
    var resposta = req.responseText;
    // Abaixo colocamos a resposta na div do campo que fez a requisição
    document.getElementById('emails').innerHTML = resposta;
    }
}
req.send(null);
}