const shiftSystemImage = document.getElementsByClassName("shift-system-image");
const mottoImage = document.getElementsByClassName("motto-image");
window.addEventListener("scroll", function() {
  const getElementDistanceA = shiftSystemImage[0].getBoundingClientRect().top + shiftSystemImage[0].clientHeight * 0.5
  const getElementDistanceB = mottoImage[0].getBoundingClientRect().top + mottoImage[0].clientHeight * 0.5
  if (window.innerHeight > getElementDistanceA) {
    shiftSystemImage[0].classList.remove("show");
  }
  if (window.innerHeight > getElementDistanceB) {
    mottoImage[0].classList.remove("show");
  }

});