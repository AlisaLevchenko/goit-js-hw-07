import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWrapper = document.querySelector(".gallery");
// console.log(createGalaryMarkup(galleryItems));

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
  })
  .join("");

galleryWrapper.insertAdjacentHTML("afterbegin", markup);
galleryWrapper.addEventListener("click", (evt) => {
  evt.preventDefault();
  const el = evt.target.dataset.source;
  if (evt.target.classList.contains("gallery")) return;
  const instance = basicLightbox.create(`
    <img src="${el}" width="800" height="600">
`);

  instance.show();
});

// console.log(markup);
// console.log(galleryItems);
