const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const mSvg = document.querySelectorAll(".m-svg svg> g>g>g");

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

const toggleOpacity = () => {
  const currentG = mSvg[Math.floor(Math.random() * mSvg.length)];
  const currentOpacity = parseFloat(currentG.getAttribute("opacity"));
  currentG.setAttribute("opacity", currentOpacity === 0 ? 1 : 0);
};

const startRandomOpacityToggle = () => {
  setInterval(toggleOpacity, Math.floor(Math.random() * 1000));
};

startRandomOpacityToggle();
startRandomOpacityToggle();
startRandomOpacityToggle();
startRandomOpacityToggle();
