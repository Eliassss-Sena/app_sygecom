import './src/scripts/global.js'

// Seleciona os elementos HTML
let email = document.getElementById('form_email_input');
let password = document.getElementById('form_pass_input');
const enter_button = document.getElementById('enter_button');

const apiUrl = 'https://api.sagierp.com.br/api/v1/auth';

// Função para chamar a API
async function callApi(email, password) {
    try {
        const resp = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-secret': 'ZThiMGYzZjhkNGNjNjhmMmViY2Q1NjgwY2FlMGM0ZTU='
            },
            body: JSON.stringify({ email, password }), // Converte os valores para JSON
        });

        if (resp.ok) {
            const obj = await resp.json(); // Extrai o JSON da resposta
            console.log('Resposta da API:', obj); // Mostra a resposta no console
        } else {
            console.error(`Erro: ${resp.status} - ${resp.statusText}`); // Mostra erro no console
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

// Evento do botão
enter_button.addEventListener('click', () => {
    // Obtém os valores dos campos de input
    let errorMessage = document.querySelectorAll('.form_erro_text_input') // Remove espaços desnecessários
    let hasErrors = false

    errorMessage.forEach(function(errorMessage) {
        if (errorMessage.style.display === 'block' || email.value === '') {
            email.style.border = '1px solid var(--error-color)'
            errorMessage.style.display = 'block'
            hasErrors = true
        }
        if (errorMessage.style.display === 'block' || password.value === '') {
            password.style.border = '1px solid var(--error-color)'
            errorMessage.style.display = 'block'
            hasErrors = true
        }
    })
    

    if (hasErrors) return

    // Chama a função com os valores capturados
    callApi(email.value, password.value);
});