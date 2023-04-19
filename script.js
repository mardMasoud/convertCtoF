let $ = document;
const titleElm = $.querySelector("h1");
const inputElm = $.querySelector("#inputElm");
const resultValue = $.querySelector("h2");
const convertBtn = $.querySelector("#convert");
const resetBtn = $.querySelector("#reset");
const changeBtn = $.querySelector("#change");
let placholderValue = inputElm.placeholder
let result;

let oldPlacholder = "℉";
//********************************************resetBtn */
resetBtn.addEventListener("click", function () {
  document.title = "JS| ℃ to ℉;";
  placholderValue.textContent = "℃";
  resultValue.textContent = "? ℃ to ? ℉;";
  inputElm.value = "";
  titleElm.textContent = "Conerverter ℃ to ℉";
  resultValue.classList.remove("red");
  resultValue.classList.remove("black");
  resultValue.classList.remove("green");
});
//********************************************convertBtn */
convertBtn.addEventListener("click", function () {
  let inputValue = inputElm.value;
  console.log(inputElm.value);
  if (inputValue==='') {
    resultValue.textContent = "Input is empety";
    resultValue.classList.add("red");
  } else if (!isNaN(inputValue)) {
    if (placholderValue === "℃") {
      result = ((inputValue * 9) / 5) + 32;
    } else {
      result = ((inputValue - 32) * 5) / 9;
    }
    $.title = "JS " + placholderValue + " to " + oldPlacholder;
    resultValue.classList.remove("red");
    resultValue.classList.remove("black");
    resultValue.classList.add("green");
    resultValue.textContent =
      inputValue + " " + placholderValue + " to " + result + oldPlacholder;
    titleElm.textContent =
      "Conerverter " + placholderValue + " to " + oldPlacholder;
  } else {
    resultValue.textContent = "Input NOT Valid";
    resultValue.classList.add("black");
  }
});
//******************************changebtn */
changeBtn.addEventListener("click", function () {
  placholderValue = inputElm.placeholder
  oldPlacholder = placholderValue;
  if (placholderValue === "℃") {
    inputElm.placeholder="℉"
    placholderValue = "℉";
  } else {
    inputElm.placeholder="℃";
    placholderValue = "℃";
  }

  titleElm.textContent =
    "Conerverter " + placholderValue + " to " + oldPlacholder;
  resultValue.textContent =
    3 + " " + placholderValue + " to " + 45 + oldPlacholder;
  $.title = "JS " + placholderValue + " to " + oldPlacholder;
});
