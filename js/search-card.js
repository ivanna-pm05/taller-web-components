class SearchCard extends HTMLElement {
  constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
          <input type="text" id="searchInput" placeholder="Buscar por nombre o nombre clave...">
      `;

      const style = document.createElement('style');
      style.textContent = `
           div {
                display: flex;
                justify-content: center;
                margin-top: 20px;
            }
            input {
                width: 80vw;
                padding: 10px;
                border-radius: 8px;
                border: 1px solid #ccc;
                font-size: 16px;
            }
      `;

      shadow.append(style, wrapper);
  }

  connectedCallback() {
      const input = this.shadowRoot.querySelector('#searchInput');
      input.addEventListener('input', () => {
          const searchText = input.value.toLowerCase();
          const cards = document.querySelectorAll('perfil-card');

          cards.forEach(card => {
              const nombre = card.querySelector('[slot="nombre"]')?.textContent.toLowerCase() || '';
              const idname = card.querySelector('[slot="idname"]')?.textContent.toLowerCase() || '';
              if (nombre.includes(searchText) || idname.includes(searchText)) {
                  card.style.display = '';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  }
}

customElements.define('search-card', SearchCard);
