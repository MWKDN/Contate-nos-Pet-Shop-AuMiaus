const formulario = document.getElementById('formulario-para-contato');
const resposta = document.getElementById('resposta');
const botaoEnviar = formulario.querySelector('button[type="submit"]');

// Intercepta o envio para enviar os dados à API sem recarregar a página.
formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Evita envios duplicados e informa que a requisição está em andamento.
    botaoEnviar.disabled = true;
    resposta.textContent = 'Enviando sua mensagem...';

    // Lê e remove espaços extras dos valores preenchidos no formulário.
    const dadosFormulario = {
        nome: formulario.elements.nome.value.trim(),
        email: formulario.elements.email.value.trim(),
        telefone: formulario.elements.telefone.value.trim(),
        mensagem: formulario.elements.mensagem.value.trim()
    };

    try {
        // Simula o envio dos dados em JSON para uma API fictícia.
        const respostaApi = await fetch('https://exemplo.com/api/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosFormulario)
        });

        // Respostas HTTP fora da faixa de sucesso também são tratadas como falha.
        if (!respostaApi.ok) {
            throw new Error(`A API respondeu com o status ${respostaApi.status}.`);
        }

        // Confirma o envio e limpa os campos após a resposta bem-sucedida.
        resposta.textContent = 'Mensagem enviada com sucesso para o AuMiaus!';
        formulario.reset();
    } catch (erro) {
        // Registra detalhes técnicos no console e mostra uma mensagem simples ao cliente.
        console.error('Erro ao enviar a mensagem:', erro);
        resposta.textContent = 'Não foi possível enviar sua mensagem. Tente novamente mais tarde.';
    } finally {
        // Reabilita o botão tanto após o sucesso quanto após uma falha.
        botaoEnviar.disabled = false;
    }
});
