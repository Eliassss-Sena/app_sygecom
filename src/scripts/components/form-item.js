class form_item extends HTMLElement {
    connectedCallback () {
        const title = this.getAttribute('title')
        const placeHolder = this.getAttribute('placeholder')
        const type = this.getAttribute('typeInput')
        const id = this.getAttribute('idInput')
        const error = this.getAttribute('error')
        this.innerHTML = `
            
            <div class="form_input_column">
                <p class="body_medium">${title}</p>
                <div class="form_input_container">
                    <input type="${type}" class="form_input" id="${id}" placeholder="${placeHolder}" spellcheck="false">
                    <button class="hidden_button" type="button" style="visibility: ${type === 'password' ? 'visible' : 'hidden'}">
                        <i class="fa-regular fa-eye"></i>
                        <i class="fa-regular fa-eye-slash"></i>
                    </button>
                </div>
                <label for="${id}" class="form_erro_text_input ${id}">${error}</label>
            </div>
        `
        
        
        const inputField = this.querySelector('input')
        let eyeicon = this.querySelector('.hidden_button')

        eyeicon.onclick = function() {
            inputField.type = inputField.type === 'password' ? 'text' : 'password';
        }

        function errorMessage (message) {
            const errorLabel = document.querySelector(`.form_erro_text_input.${id}`); // Seleciona o label com ambas as classes
            if (errorLabel) {
                errorLabel.style.display = 'block'; // Torna o label visível
                errorLabel.textContent = message;   // Atualiza a mensagem
            }
        }
        function hideErrorMessage() {
            const errorLabel = document.querySelector(`.form_erro_text_input.${id}`);
            if (errorLabel) {
                errorLabel.style.display = 'none'
                errorLabel.textContent = ''
            }
        }

        inputField.addEventListener('blur', () => {
            if (type == 'password') {
                inputField.value.length < 1 ? errorMessage('Digite sua senha') : hideErrorMessage()
                }
            if (type == 'email') {
                !inputField.value.includes('@') || !inputField.value.includes('.com') ? errorMessage('Digite seu e-mail') : hideErrorMessage()
            }
        });
    }
} 

customElements.define('form-item', form_item) 
