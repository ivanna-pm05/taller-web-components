 class SearchCard  extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin: 0 auto;
          max-width: 600px;
        }
        input {
          width: 100%;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
          background-color: #8b353591;
          border-radius: 8px;
          color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 16px;
        }
      </style>

        <input type="text" placeholder="Search..." />
    `;
    }
    connectedCallback() {
    this.input = this.shadowRoot.querySelector('input');
    this.input.addEventListener('input', () => {
      const searchTerm = this.input.value.toLowerCase();
      const cards = document.querySelectorAll('perfil-card');
      cards.forEach(card => {
        const idname = card.getAttribute('idname').toLowerCase();
        const visible = idname.includes(searchTerm);
        card.style.display = visible ? 'block' : 'none';
      });
    });
  }
}

customElements.define('search-card', SearchCard);
