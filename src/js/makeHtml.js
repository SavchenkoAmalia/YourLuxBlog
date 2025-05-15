const blogList = document.querySelector(".blogList");
export function makehtml(data){
    const markup = data.map(item =>{
        return `
            <li class="form-items">
                <img src="${item.image}" alt="Зображення" class="form-img" />
                <h1 class="form-title">${item.title}</h1>
                <p class="form-author">${item.author}</p>
                <p class="form-article">${item.article.text}</p>
                <a  target="_blank" href="${item.link}" class="form-link">посилання на рецепт</a>
                <div class="buttons-container">
                <button id="${item.id}" class="updatePost-button">ОНОВИТИ</button>
                <button class="delete" id="${item.id}">ВИДАЛИТИ</button>
                </div>
            </li>`;
        }).join(" ");
    blogList.innerHTML = markup;
    return markup;
}