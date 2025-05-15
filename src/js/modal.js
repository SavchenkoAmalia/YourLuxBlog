import axios from 'axios';
import { getBlog } from './getBlogs.js';
import { makehtml } from './makeHtml.js';

const openBtn = document.querySelector('.create-home__add');
const modal = document.querySelector('.create-home__modal');
const closeBtn = document.querySelector('.create-home__close');
const submit = document.querySelector('.submitBtn');

const posts = [];

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

submit.addEventListener('click', async function (event) {
  const image = document.getElementById('image').value.trim();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const mainContent = document.getElementById('mainContent').value.trim();
  const link = document.getElementById('link').value.trim();

  const isValid = validateInputs(title, author, mainContent, link, image);

  if (!isValid) {
    event.preventDefault();
    return;
  }

  const newPost = {
    id: Date.now(),
    image,
    title,
    author,
    article: {
      text: mainContent
    },
    link
  };

  try {
    await axios.post("http://localhost:3000/blogs", newPost);
    alert('Пост успішно створено!');
    getBlog();
    closeModal();
    clearForm();
  } catch (error) {
    console.error("Помилка при збереженні посту:", error);
  }
});


function validateInputs(title, author, mainContent, link, image) {
  if (!title || !author || !mainContent || !link || !image) {
    alert('Будь ласка, заповніть усі поля');
    return false;
  }

  if (title.length < 1 || title.length > 20) {
    alert('Назва повинна бути від 1 до 20 символів');
    return false;
  }

  if (author.length < 3 || author.length > 15) {
    alert('Автор повинен бути від 3 до 15 символів');
    return false;
  }

  if (mainContent.length < 20 || mainContent.length > 300) {
    alert('Основний текст має бути від 20 до 300 символів');
    return false;
  }

  return true;
}

function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
}

function clearForm() {
  document.getElementById('image').value = '';
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('mainContent').value = '';
  document.getElementById('link').value = '';
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