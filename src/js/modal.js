const openBtn = document.querySelector('.create-home__add');
const modal = document.querySelector('.create-home__modal');
const closeBtn = document.querySelector('.create-home__close');
const form = document.querySelector('.form');
const blogList = document.querySelector('.blogList');
const imageInput = document.querySelector('#image');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
});

imageInput.addEventListener('paste', function(e) {
  const clipboardItems = e.clipboardData.items;
  for (const item of clipboardItems) {
    if (item.type.indexOf("image") === 0) {
      const file = item.getAsFile();
      const reader = new FileReader();
      reader.onload = function(e) {
        imageInput.setAttribute("data-image", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const mainContent = document.querySelector('#mainContent');
  const link = document.querySelector('#link');

  const isValid = validateInputs(title, author, mainContent, link, imageInput);
  if (!isValid) return;

  let imageSrc = '';
  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imageSrc = e.target.result;
      createPost(imageSrc, title, author, mainContent, link);
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    imageSrc = imageInput.getAttribute("data-image");
    if (!imageSrc) {
      alert("Будь ласка, додайте зображення.");
      return;
    }
    createPost(imageSrc, title, author, mainContent, link);
  }
});

function validateInputs(title, author, mainContent, link, imageInput) {
  if (!title.value.trim() || !author.value.trim() || !mainContent.value.trim() || !link.value.trim()) {
    alert('Будь ласка, заповніть усі поля');
    return false;
  }

  if (title.value.length < 1 || title.value.length > 20) {
    alert('Назва повинна бути від 1 до 20 символів');
    return false;
  }

  if (author.value.length < 3 || author.value.length > 15) {
    alert('Автор повинен бути від 3 до 15 символів');
    return false;
  }

  if (mainContent.value.length < 20 || mainContent.value.length > 300) {
    alert('Основний текст має бути від 20 до 300 символів');
    return false;
  }

  if (!imageInput.files.length && !imageInput.getAttribute("data-image")) {
    alert("Будь ласка, додайте зображення.");
    return false;
  }

  return true;
}

function createPost(imageSrc, title, author, mainContent, link) {
  const newPost = {
    title: title.value.trim(),
    author: author.value.trim(),
    article: { text: mainContent.value.trim() },
    link: link.value.trim(),
    image: imageSrc,
  };

  const postMarkup = `
    <li class="form-items">
      <img src="${newPost.image}" alt="Зображення" class="form-img" />
      <h1 class="form-title">${newPost.title}</h1>
      <p class="form-author">${newPost.author}</p>
      <p class="form-article">${newPost.article.text}</p>
      <a href="${newPost.link}" target="_blank" class="form-link">Посилання</a>
    </li>
  `;

  blogList.innerHTML += postMarkup;

  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
  form.reset();
  imageInput.removeAttribute("data-image");
  alert('Рецепт успішно створено!Щоб переглянути натисніть "нові рецепти"');
}

//! buttons

const button1 = document.querySelector('.base-home__button');
const button2 = document.querySelector('.create-home__all');
const buutonBack = document.querySelector('.all-home__back');

function closeSections() {
  document.getElementById('section1').style.display = 'none';
  document.getElementById('section2').style.display = 'none';
  document.getElementById('section3').style.display = 'block';
  
  document.getElementById('section3').scrollIntoView({ behavior: 'smooth' });
}

function schowSections() {
    document.getElementById('section1').style.display = 'block';
  document.getElementById('section2').style.display = 'block';
  document.getElementById('section3').style.display = 'none';
  
  document.getElementById('sections1').scrollIntoView({ behavior: 'smooth' });

}

button1.addEventListener('click', closeSections);
button2.addEventListener('click', closeSections);
buutonBack.addEventListener('click', schowSections);