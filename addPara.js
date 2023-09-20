const textbox = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", function() {
  const text = textbox.value;
  const newP = document.createElement("p");
  newP.textContent = text;
  p.appendChild(newP);
  textbox.value = "";
});
