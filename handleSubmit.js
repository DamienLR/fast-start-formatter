import formatData from "./formatData.js";

const form = document.querySelector(".form");
const formInput = document.querySelector(".formInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formInput.value);
  formatData(formInput.value);
  formInput.value = "";
});
