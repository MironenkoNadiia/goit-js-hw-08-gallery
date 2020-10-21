import images from './gallery-items.js';
console.log(images);

const galleryContainer = document.querySelector('.js-gallery');
const mainGallery = createGallery(images);
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeLightbox = document.querySelector('button[data-action="close-lightbox"]')

galleryContainer.insertAdjacentHTML('beforeend', mainGallery);



function createGallery(images) {
    return images.map(image => {
        return `
        <li class="gallery__item">
    <a
    class="gallery__link"
    href="${image.original}"
    >
    <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
    </a>
    </li>`
    }).join('');
}
console.log(createGallery);

function updateAttributeValue (src,alt) {
	lightboxImage.src = src;
	lightboxImage.alt = alt;
}

galleryContainer.addEventListener('click', onImageClick);
function onImageClick(event) {
    event.preventDefault();
	
    if (event.target.nodeName !== 'IMG') return;
    updateAttributeValue(event.target.dataset.source, event.target.alt);
    lightbox.classList.add('is-open');
}


closeLightbox.addEventListener('click', onCloseLightbox);
function onCloseLightbox() {
    lightbox.classList.remove('is-open');

    updateAttributeValue('','');
}

