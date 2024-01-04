const feedbackKey = "feedback";

// сохранение отзывов
function saveFeedbackInStorage(nameProductIn, feedbackIn) {
  // если localStorage не пустой
  if (localStorage.getItem(feedbackKey)) {
    const feedbackList = JSON.parse(localStorage.getItem(feedbackKey));
    let index = -1;
    // проверяем наличаеи и добавляем в index
    for (let i = 0; i < feedbackList.length; i++) {
      if (feedbackList[i].nameProduct === nameProductIn) {
        index = i;
      }
    }
    
    if (index === -1) {
      feedbackList.push({ nameProduct: nameProductIn, feedback: [feedbackIn] });
    } else {
      feedbackList[index].feedback.push(feedbackIn);
    }
    localStorage.setItem(feedbackKey, JSON.stringify(feedbackList));

    // проверка localStorage на пустоту
  } else {
    localStorage.setItem(
      feedbackKey,
      JSON.stringify([{ nameProduct: nameProductIn, feedback: [feedbackIn] }])
    );
  }
}

// список из localStorage 
function productFromStorage() {
  const feedbackList = JSON.parse(localStorage.getItem(feedbackKey));
  return feedbackList;
}
