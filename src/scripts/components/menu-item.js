class menuItem extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Sem titulo'
        const icon = this.getAttribute('icon')
        const tp_parent_menu = this.getAttribute('tp-parent-menu')

        const subMenus = [
                {
                    "nm_sub_menu": "Documento de Fornecedores",
                    "ds_description": "Documento de Fornecedores",
                    "id_funcao": "1472",
                    "tp_parent_menu": "DOCUMENTOS",
                    "tp_menu": "DOCUMENTOS_FORNECEDORES",
                    "ds_tags": ["", "documento", "document", "documen", "docume", "docum", "docu", "doc", "do", "d", "favorecidos", "favorecido", "favorecid", "favoreci", "favorec", "favore", "favo", "fav", "fa", "f"],
                    "st_user_access": "false",
                    "qt_access": "0",
                    "st_favorite": "false"
                },
                {
                    "nm_sub_menu": "Documento de Favorecidos",
                    "ds_description": "Documento de Favorecidos",
                    "id_funcao": "1473",
                    "tp_parent_menu": "DOCUMENTOS",
                    "tp_menu": "DOCUMENTOS_FAVORECIDOS",
                    "ds_tags": ["", "documento", "document", "documen", "docume", "docum", "docu", "doc", "do", "d", "fornecedor", "fornecedo", "forneced", "fornece", "fornec", "forne", "forn", "for", "fo", "f"],
                    "st_user_access": "false",
                    "qt_access": "0",
                    "st_favorite": "false"
                },
                {
                    "nm_sub_menu": "Pedidos de Venda",
                    "ds_description": "Pedidos de Venda",
                    "id_funcao": "1473",
                    "tp_parent_menu": "VENDAS",
                    "tp_menu": "VENDAS_PEDIDOS",
                    "ds_tags": ["", "documento", "document", "documen", "docume", "docum", "docu", "doc", "do", "d", "fornecedor", "fornecedo", "forneced", "fornece", "fornec", "forne", "forn", "for", "fo", "f"],
                    "st_user_access": "false",
                    "qt_access": "0",
                    "st_favorite": "false"
                }
        ];

        function build_menus(data, parentMenu) {
            return data.filter(sub => sub.tp_parent_menu === parentMenu).map(sub => `<p class="body_medium text_list_menu">${sub.nm_sub_menu}</p>`).join(''); // Caso não tenha submenus
        }

        


        this.innerHTML = `
            <div class="item_menu">
                <div class="head_item_menu">
                    <div class="icon_text_menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="${icon}" />
                        </svg>
                        <p class="body_medium">${title}</p>
                    </div>
                    <svg class="icon_toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path class="icon_down" stroke-linecap="round" stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <div class="dynmc_list_item_menu">
                    ${build_menus(subMenus, tp_parent_menu)}
                </div>
            </div>
        `;

        const header = this.querySelector('.head_item_menu');
        const menuList = this.querySelector('.dynmc_list_item_menu');
        const icon_in_list = this.querySelector('.icon_toggle');

        header.addEventListener('click', () => {
            const isOpen = menuList.style.maxHeight === '800px';
            menuList.style.transition = isOpen ? '0.3s' : '1.5s';
            menuList.style.maxHeight = isOpen ? '0px' : '800px';
            icon_in_list.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)'; // Rotação do ícone para dar efeito visual
        })

    }
    
}

customElements.define('menu-item', menuItem);

/* Função para quebrar uma frase, e utilizar em ds_tag

function truncateSuffix(textList) {
    let listOfTexts = [];

    textList.forEach(word => {
        // Para cada palavra, geramos a lista de versões reduzidas
        for (let i = 0; i < word.length; i++) {
            listOfTexts.push(word.slice(0, word.length - i));
        }
    });

    return listOfTexts;
}

console.log(truncateSuffix(textList));*/