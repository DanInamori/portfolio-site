const  mainImage = document.getElementsByClassName("main-image");
const word = document.getElementsByClassName("word")
const flashImage = document.getElementsByClassName("flash-image")
window.onload = function() {
  mainImage[0].classList.add("show");
  word[0].classList.add("show");
  flashImage[0].classList.add("delete");
};
