let $ = document;
const titleElm = $.querySelector("h1");
const inputElm = $.querySelector("#inputElm");
const resultValue = $.querySelector("h2");
const convertBtn = $.querySelector("#convert");
const resetBtn = $.querySelector("#reset");
const changeBtn = $.querySelector("#change");
let placholderValue = inputElm.getAttribute("placeholder");
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
  let counter = 0;
  [...inputValue].forEach(function (ch) {
    if (ch >= "0" && ch <= "9") counter++;
  });
  console.log(counter);
  if ([...inputValue].length == 0) {
    resultValue.textContent = "Input is empety";
    resultValue.classList.add("red");
  } else if (counter === [...inputValue].length) {
    if (placholderValue === "℃") {
      result = (parseInt(inputValue) * 9) / 5 + 32;
    } else {
      result = ((parseInt(inputValue) - 32) * 5) / 9;
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
  placholderValue = inputElm.getAttribute("placeholder");
  oldPlacholder = placholderValue;
  if (placholderValue === "℃") {
    inputElm.setAttribute("placeholder", "℉");
    placholderValue = "℉";
  } else {
    inputElm.setAttribute("placeholder", "℃");
    placholderValue = "℃";
  }

  titleElm.textContent =
    "Conerverter " + placholderValue + " to " + oldPlacholder;
  resultValue.textContent =
    3 + " " + placholderValue + " to " + 45 + oldPlacholder;
  $.title = "JS " + placholderValue + " to " + oldPlacholder;
});
