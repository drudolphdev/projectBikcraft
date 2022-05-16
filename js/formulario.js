const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
    if(resposta.ok) {
        formulario.innerHTML = "<p class='font-2L' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: color: #f7f7f7;'><span style='#317A00'>Mensagem enviada com sucesso.</span> Aguarde que entraremos em contato logo que possivel.</p>";
    } else {
        formulario.innerHTML = "<p class='font-2L' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: color: #f7f7f7;'><span style='#E00000'>Erro no envio</span>, voce pode enviar diretamente para o nosso email: contato@bikcraft.net</p>";
    }
}
function enviarFormulario(event) {
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando...";

    const data = new FormData(formulario);
    fetch('./enviar.php', {
        method: 'POST',
        body: data,
    }).then(formularioEnviado);
}
formulario.addEventListener("submit", enviarFormulario);
