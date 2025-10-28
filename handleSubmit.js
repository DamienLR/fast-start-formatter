import formatData from "./formatData.js";

const form = document.querySelector(".form");
const formInput = document.querySelector(".formInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formatData(formInput.value);
  formInput.value = "";
});
