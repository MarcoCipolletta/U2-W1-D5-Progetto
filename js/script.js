const header = document.querySelector("header>div");
const hero = document.querySelector(".hero");
const mSvg = document.querySelectorAll(".m-svg svg> g>g>g");

window.addEventListener("scroll", function () {
  // Ottieni la posizione del top dell'elemento

  const heroBottom = hero.offsetTop + hero.offsetHeight; // Calcola la distanza dal top del documento al bottom dell'elemento
  const heroDistanceFromTop = heroBottom - window.pageYOffset;
  const headerButton = document.querySelector("header button");

  if (heroDistanceFromTop - 50 < header.offsetHeight) {
    header.classList.add("changeColor");
    headerButton.classList.add("changeColor");
  } else {
    header.classList.remove("changeColor");
    headerButton.classList.remove("changeColor");
  }
  let valueForOpacity = (heroDistanceFromTop / header.offsetHeight).toFixed(1);
  const transform = (x) => {
    let result = 2 - (x % 2);
    return result === 2 ? 0 : result;
  };
  console.log(valueForOpacity);
  if (valueForOpacity >= 1 && valueForOpacity <= 2) {
    let opacity = transform(valueForOpacity);
    console.log(opacity);
    header.style.setProperty("--opacity", opacity);
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
