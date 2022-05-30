import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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
}

function onGalleryContainerClick(e) {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && instance.visible()) {
      instance.close();
    }
  });
  e.preventDefault();
  const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}">
    `);
  if (!e.target.classList.contains("gallery__image")) {
    return;
  } else {
    instance.show();
  }
  console.log(e.target.dataset.source);
}
