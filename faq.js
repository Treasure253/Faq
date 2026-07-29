const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((quest, index) => {
  quest.addEventListener("click", () => {
    quest.classList.toggle("active");
    answers[index].classList.toggle("open");
  });
});
