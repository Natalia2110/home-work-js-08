// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
const galleryItemMurkup = createGalleryItemsMarkup (galleryItems);



galleryList.insertAdjacentHTML('beforeend', galleryItemMurkup)

// console.log(createGalleryItemsMarkup (galleryItems));

function createGalleryItemsMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>
        `;
    }).join('')
    
}

const lightboxGallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition:'bottom',
    captionDelay: 250, });