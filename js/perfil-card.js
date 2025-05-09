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
            min-height: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h2{
                font-size: 20px;
                text-align: center;
            }
            h2:hover {
                color: #ff1100;
                transition: color 0.3s ease;
            }
            img {
                width: 100%;
                height: 250px;
                object-fit: cover;
                max-width: 250px;
                margin: 0 auto 10px auto;
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
            transform: translateY(-10px);
            transition: transform 0.3s ease;
        }
        @media (max-width: 768px) {
            div {
            width: 90vw;
            max-width: 100%;
            margin: 10px 0;
            padding: 15px;
            box-sizing: border-box;
            border-radius: 0;
            }

            img {
                max-width: 100%;
                height: auto;
            }

            button {
                margin-left: auto;
                margin-right: auto;
                display: block;
            }
            }
        
        `;

        shadow.append(style, wrapper);

    }
    connectedCallback() {
        const slot = this.querySelector('[slot="imagen"]');
        const imgNombre = slot?.textContent?.trim() || 'default.png';
        const imgElement = this.shadowRoot.querySelector('#id-perfil');
        imgElement.src = `img/${imgNombre}`;

        const btn = this.shadowRoot.querySelector('#btn');
        btn.addEventListener('click', () => {
            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("modal-img");
            const modalNombre = document.getElementById("modal-nombre");
            const modalIdname = document.getElementById("modal-idname");
            const modalHouse = document.getElementById("modal-house");
            const modalAge = document.getElementById("modal-age");
            const modalDescripcion = document.getElementById("modal-descripcion");

            const nombre = this.querySelector('[slot="nombre"]')?.textContent || '';
            const idname = this.querySelector('[slot="idname"]')?.textContent || '';
            const house = this.querySelector('[slot="house"]')?.textContent || '';
            const age = this.querySelector('[slot="age"]')?.textContent || '';
            const descripcion = this.querySelector('[slot="descripcion"]')?.textContent || '';

            modalImg.src = `img/${imgNombre}`;
            modalNombre.textContent = nombre;
            modalIdname.textContent = idname;
            modalHouse.textContent = house;
            modalAge.textContent = age;
            modalDescripcion.textContent = descripcion;

            modal.classList.remove("hidden");
        });
        if (!window.__modal_close_initialized) {
            const closeBtn = document.querySelector(".modal .close");
            closeBtn.addEventListener("click", () => {
                document.getElementById("modal").classList.add("hidden");
            });

            window.addEventListener("click", (e) => {
                const modal = document.getElementById("modal");
                if (e.target === modal) {
                    modal.classList.add("hidden");
                }
            });

            window.__modal_close_initialized = true;
        }
    }
}
customElements.define('perfil-card', PerfilCard);