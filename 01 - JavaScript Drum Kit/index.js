const handleSound = (e) => {
  const soundElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!soundElement) {
    return;
  }
  soundElement.currentTime = 0;
  soundElement.play();
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
};

const keys = document.querySelectorAll(".key");

const removeTransition = (e) => {
  if (e.propertyName !== "transform") {
    return;
  }
  e.target.classList.remove("playing");
};

keys.forEach((item) =>
  item.addEventListener("transitionend", removeTransition)
);

window.addEventListener("keydown", handleSound);
