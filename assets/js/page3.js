let selectNumber1 = document.querySelector("#selectNumber1");
let selectNumber2 = document.querySelector("#selectNumber2");
let selectNumber3 = document.querySelector("#selectNumber3");

const answer = document.querySelector("#answer");

const btnCheck = document.querySelector("#btnCheck");

btnCheck.addEventListener("click", () => {
  let number1 = selectNumber1.value;
  let number2 = selectNumber2.value;
  let number3 = selectNumber3.value;

  let pass = number1 + number2 + number3;

  if (pass === "911") {
    answer.textContent = "password 1 correcto";
  } else if (pass === "714") {
    answer.textContent = "password 2 correcto";
  } else {
    answer.textContent = "password incorrecto";
  }
});
