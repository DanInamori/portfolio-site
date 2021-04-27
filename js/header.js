let pos = 0;
window.addEventListener("scroll", function() {

  const scrollY = window.pageYOffset;
  const headerElement = document.getElementById("header")
  if (scrollY > pos) {
    headerElement.classList.add("active");
  } else {
    headerElement.classList.remove("active");
  };
  pos = scrollY;
});