// Сохранение отзывов

const nameProductEl = document.querySelector(".name_product");
const feedbackEl = document.querySelector(".feedback");
const saveFeedbackEl = document.querySelector(".btn");
const errorMessage = document.querySelector(".error__message");
const changePageEl = document.querySelector(".changePage");

// Cохранения нового отзыва
function saveFeedback() {
  const nameProduct = nameProductEl.value.trim();
  const feedback = feedbackEl.value.trim();
  // проверка, что поля не пустые
  if (nameProduct && feedback) {
    saveFeedbackInStorage(nameProduct, feedback);
  } else {
    errorMessage.textContent = "Необходимо заполнить все поля";
  }
}

// функция перехода на страницу с продуктами
function changePage() {
  window.open("product.html", "_self");
}

saveFeedbackEl.addEventListener("click", saveFeedback);

changePageEl.addEventListener("click", changePage);
