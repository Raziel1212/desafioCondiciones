let selectStickers1 = document.querySelector("#selectStickers1");
let selectStickers2 = document.querySelector("#selectStickers2");
let selectStickers3 = document.querySelector("#selectStickers3");

const idAnswer = document.querySelector("#idAnswer");
const btnCheck = document.querySelector("#btnCheck");

btnCheck.addEventListener("click", () => {
  let stickerDK1 = parseInt(selectStickers1.value);
  let stickerDK2 = parseInt(selectStickers2.value);
  let stickerDK3 = parseInt(selectStickers3.value);

  let answer = stickerDK1 + stickerDK2 + stickerDK3;

  if (answer >= 1 && answer <= 10) {
    idAnswer.innerHTML = `${answer}`;
  } else if (answer > 10) {
    idAnswer.innerHTML = `demasiados`;
  }
});
