const imageExercise1 = document.querySelector("#imageExercise1");

imageExercise1.addEventListener("click", () => {
  if (imageExercise1.style.border === "") {
    imageExercise1.style.border = "solid red 2px";
  } else {
    imageExercise1.style.border = "";
  }
});
