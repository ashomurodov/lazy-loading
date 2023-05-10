var images = document.querySelectorAll("img[data-src]");
var imageBoxes = document.querySelectorAll(".grid-item");
var _loop_1 = function (i) {
    var newURL = images[i].getAttribute("data-src");
    if (newURL)
        images[i].src = newURL;
    images[i].addEventListener("load", function () {
        imageBoxes[i].classList.remove("lazy");
    });
};
for (var i = 0; i < images.length; i++) {
    _loop_1(i);
}
