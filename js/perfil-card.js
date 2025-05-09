class PerfilCard extends HTMLElement {
    constructor(){
        super();
        const shadow=this.attachShadow({ mode: 'open'});

        const wrapper = document.createElement('div');
        wrapper.innerHTML = /*html*/`
            <h2><slot name="nombre">[Sin nombre]</slot></h2>
            <img id="id-perfil" src="" alt="Foto-perfil">
            <slot name="idname">[Sin nombre clave]</slot>
            <slot name="house">[Sin casa]</slot>
            <slot name="age">[Sin año de aparicion]</slot>
            <slot name="descripcion">[Sin descripcion]</slot>
            <button id="btn">Ver mas</button>
        `;
        const style = document.createElement('style');
        style.textContent = `
        div {
            width: 20vw;
            border: 2px solid #333;
            border-radius: 7px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            font-family: Arial, sans-serif;
            background-color: #05050573;
            color: #ffffff;
            h2{
                font-size: 20px;
                text-align: center;
            }
            h2:hover {
                color: #ff1100;
                transition: color 0.3s ease; /* Transición suave */
            }
            img {
                width: 250px;
                height: 250px;
                margin-bottom: 10px;
                display: block;
                margin: 0 auto;
                border-radius: 3px;
                
            }

        }
        button {
            background-color: #ff1100;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 12px;
            padding: 5px;
            width: 80px;
            margin-left: 85px;
            }
        button:hover {
            transform: translateY(-10px); /* Se mueve 10px hacia arriba */
            transition: transform 0.3s ease; /* Transición suave */
        }

        
        `;

        shadow.append(style, wrapper);

    }
    connectedCallback() {
        const slot = this.querySelector('[slot="imagen"]');
        const imgNombre = slot?.textContent?.trim() || 'default.png';
        const imgElement = this.shadowRoot.querySelector('#id-perfil');
        imgElement.src = `img/${imgNombre}`;
      }

}

// Registrar el componente personalizado
customElements.define('perfil-card', PerfilCard);