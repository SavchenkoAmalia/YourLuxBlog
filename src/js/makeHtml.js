const blogList = document.querySelector('.blogList');
const blogListSecondary = document.querySelector('.blogListSecondary');

export function makehtml(data) {
  const reversedData = data.slice().reverse(); // Нові пости — на початку

  // Перші 6 для головної секції
  const limitedMarkup = reversedData.slice(0, 6).map(item => getPostMarkup(item)).join(' ');

  // Усі пости — для другої секції
  const fullMarkup = reversedData.map(item => getPostMarkup(item)).join(' ');

  if (blogList) blogList.innerHTML = limitedMarkup;
  if (blogListSecondary) blogListSecondary.innerHTML = fullMarkup;

  return fullMarkup;
}

function getPostMarkup(item) {
  return `
    <li class="form-items">
      <img src="${item.image}" alt="Зображення" class="form-img" />
      <h1 class="form-title">${item.title}</h1>
      <p class="form-author">${item.author}</p>
      <p class="form-article">${item.article.text}</p>
      <a target="_blank" href="${item.link}" class="form-link">посилання на рецепт</a>
      <div class="buttons-container">
        <button id="${item.id}" class="updatePost-button">ОНОВИТИ</button>
        <button class="delete" id="${item.id}">ВИДАЛИТИ</button>
      </div>
    </li>
  `;
}
