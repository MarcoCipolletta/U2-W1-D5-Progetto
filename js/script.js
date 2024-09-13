const header = document.querySelector("header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", function () {
  // Ottieni la posizione del top dell'elemento

  const heroBottom = hero.offsetTop + hero.offsetHeight; // Calcola la distanza dal top del documento al bottom dell'elemento
  const heroDistanceFromTop = heroBottom - window.pageYOffset;

  if (heroDistanceFromTop - 50 < header.offsetHeight) {
    header.classList.add("changeColor");
  } else {
    header.classList.remove("changeColor");
  }
});
