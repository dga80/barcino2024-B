import { products } from './products.js';

const productsContainer = document.getElementById('products-container');

products.forEach(product => {
    product.images.forEach(image => {
        // Crear el contenedor del producto
        const productElement = document.createElement('div');
        productElement.classList.add('cbp-item', 'pork');

        // Crear el enlace
        const linkElement = document.createElement('a');
        linkElement.href = image; 
        linkElement.classList.add('cbp-caption', 'cbp-lightbox');
        linkElement.setAttribute('data-title', `${product.name}<br>${product.description || 'lorem ipsum'}`);

        // Crear el div interno que contiene la imagen
        const captionWrap = document.createElement('div');
        captionWrap.classList.add('cbp-caption-defaultWrap');

        // Crear el elemento de la imagen
        const imgElement = document.createElement('img');
        imgElement.src = image; 
        imgElement.alt = product.name;

        // Estructura de los elementos
        captionWrap.appendChild(imgElement);
        linkElement.appendChild(captionWrap);
        productElement.appendChild(linkElement);
        productsContainer.appendChild(productElement);
    });
});
