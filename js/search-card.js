/* class SearchCard  extends HTMLElement {
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
        .search-card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 16px;
        }
        .search-card input {
          width: 100%;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
      </style>
      <div class="search-card">
        <input type="text" placeholder="Search..." />
      </div>
    `;
    }
    connectedCallback() {
        this.input = this.shadowRoot.querySelector('input');
        this.input.addEventListener('input', this.handleInput.bind(this));
        } 
    handleInput(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.dispatchEvent(new CustomEvent('search', {
            detail: { searchTerm },
            bubbles: true,
            composed: true
        }));
    }
    disconnectedCallback() {
        this.input.removeEventListener('input', this.handleInput.bind(this));
    }
}
customElements.define('search-card', SearchCard); */
