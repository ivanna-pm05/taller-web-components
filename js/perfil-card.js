class PerfilCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});

        const wrapper = document.createElement('div');
        wrapper.innerHTML = /*html*/`
        <img id="img-perfile" src="" alt="Foto-perfil">
        <h3><slot name="nombre">[Sin nombre]</slot></h3>
        <p><slot description="descripcion">[Sin descripcion]</slot></p>

        `
    }
    

}