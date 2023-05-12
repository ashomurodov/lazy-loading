const images = document.querySelectorAll<HTMLImageElement>("img[data-src]");
const imageBoxes = document.querySelectorAll(".grid-item");
const btn = document.querySelector("button");
const allLazyClass = document.querySelectorAll<HTMLElement>(".lazy");

let counter = 0;
for (let i = 0; i < images.length; i++) {
  const newURL = images[i].getAttribute("data-src");

  if (newURL) images[i].src = newURL;

  images[i].addEventListener("load", () => {
    counter++;
    imageBoxes[i].classList.add("loaded");
    if (counter === images.length) {
      console.log("all images loaded");
      imageBoxes.forEach((i) => {
        i.classList.remove("loaded");
        i.classList.remove("lazy");
      });
    }
  });
}

btn?.addEventListener("click", () => {
  location.reload();
});
