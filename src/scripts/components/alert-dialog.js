import { change_visibility } from '../global.js'

let title = 'Titulo'
let desc = 'Descrição'
let button_text = 'Ok' 

class alert_dialog extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <div class="alert_dialog" id="alert_dialog">
                <h1 class="title_large">${title}</h1>
                <p class="body_medium">${desc}</p>
                <div class="alert_dialog_row_button">
                    <button class="primary_button" id="alert_button">${button_text}</button>
                </div>
            </div>
        `
        const alert_action = document.getElementById('alert_button')
        const alert_dialog = document.getElementById('alert_dialog')

        alert_action.addEventListener('click', () => {
            change_visibility(alert_dialog, 'flex')
        })
    }
} 

customElements.define('alert-dialog', alert_dialog) 

