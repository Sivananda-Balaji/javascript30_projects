const controlInputs = document.querySelectorAll(".controls input");

function handleInputUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

controlInputs.forEach((inputItem) =>
  inputItem.addEventListener("change", handleInputUpdate)
);

controlInputs.forEach((inputItem) =>
  inputItem.addEventListener("mousemove", handleInputUpdate)
);
