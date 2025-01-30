class FooterDefault extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer">
                <p class="footer_text">
                    2024 © Grupo Sygecom Cleantech</p>
                <img src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sygecom-l09u91/assets/gp065r7hripp/icon-sygecom-black.png"
                    class="footer_img">
            </div>
        `;
    }
}

customElements.define('footer-default', FooterDefault);