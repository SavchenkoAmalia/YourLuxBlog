const blogList = document.querySelector(".blogList");
export function makehtml(data){
    const markup = data.map(item =>{
        return `
            <li class="form-items">
                <img src="${item.image}" alt="Зображення" class="form-img" />
                <h1 class="form-title">${item.title}</h1>
                <p class="form-author">${item.author}</p>
                <p class="form-article">${item.article.text}</p>
                <a class="form-link">${item.link}</a>
                <div class="buttons-container">
                <button id"${item.id}" class="updatePost-button">ОНОВИТИ</button>
                <button id"${item.id}" class="deletePost-button">ВИДАЛИТИ</button>
                </div>
            </li>`;
        }).join(" ");
    blogList.innerHTML = markup;
    return markup;
}