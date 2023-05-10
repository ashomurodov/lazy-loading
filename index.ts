const images = document.querySelectorAll<HTMLImageElement>("img[data-src]");
const imageBoxes = document.querySelectorAll(".grid-item");

for (let i = 0; i < images.length; i++) {

  const newURL = images[i].getAttribute("data-src");

  if (newURL) images[i].src = newURL;

  images[i].addEventListener("load", () => {
    imageBoxes[i].classList.remove("lazy");
  });
  
}
