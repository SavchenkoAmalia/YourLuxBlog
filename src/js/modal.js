import axios from 'axios';
import { getBlog } from './getBlogs.js';

const openBtn = document.querySelector('.create-home__add');
const modal = document.querySelector('.create-home__modal');
const closeBtn = document.querySelector('.create-home__close');
const form = document.querySelector('form');
const blogList = document.querySelector('.blogList');
const blogListSecondary = document.querySelector('.blogListSecondary');

let isUpdating = false;
let updateId = null;

openBtn.addEventListener('click', () => {
  isUpdating = false;
  updateId = null;
  clearForm();
  openModal();
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

blogList.addEventListener('click', async (event) => {
  if (event.target.classList.contains('updatePost-button')) {
    isUpdating = true;
    updateId = event.target.id;

    try {
      const { data } = await axios.get(`http://localhost:3000/blogs/${updateId}`);

      document.getElementById('image').value = data.image;
      document.getElementById('title').value = data.title;
      document.getElementById('author').value = data.author;
      document.getElementById('mainContent').value = data.article.text;
      document.getElementById('link').value = data.link;

      openModal();
    } catch (error) {
      console.error('Помилка завантаження поста для оновлення:', error);
    }
  }
});


blogListSecondary.addEventListener('click', async (event) => {
  if (event.target.classList.contains('updatePost-button')) {
    isUpdating = true;
    updateId = event.target.id;

    try {
      const { data } = await axios.get(`http://localhost:3000/blogs/${updateId}`);

      document.getElementById('image').value = data.image;
      document.getElementById('title').value = data.title;
      document.getElementById('author').value = data.author;
      document.getElementById('mainContent').value = data.article.text;
      document.getElementById('link').value = data.link;

      openModal();
    } catch (error) {
      console.error('Помилка завантаження поста для оновлення:', error);
    }
  }
});

function setupSubmitHandler() {
  const oldButton = document.querySelector('.submitBtn');
  const newButton = oldButton.cloneNode(true); 
  oldButton.replaceWith(newButton);

  newButton.addEventListener('click', async () => {
    const image = document.getElementById('image').value.trim();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const mainContent = document.getElementById('mainContent').value.trim();
    const link = document.getElementById('link').value.trim();

    if (!validateInputs(title, author, mainContent, link, image)) return;

    const postData = {
      image,
      title,
      author,
      article: { text: mainContent },
      link,
    };

    try {
      if (isUpdating && updateId) {
        await axios.patch(`http://localhost:3000/blogs/${updateId}`, postData);
        alert('Пост успішно оновлено!');
      } else {
        await axios.post('http://localhost:3000/blogs', postData);
        alert('Пост успішно створено!');
      }

      await getBlog();
      closeModal();
      clearForm();

      isUpdating = false;
      updateId = null;
    } catch (error) {
      console.error('Помилка при збереженні посту:', error);
    }
  });
}


setupSubmitHandler();

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

function openModal() {
  modal.style.display = 'flex';
  document.body.classList.add('no-scroll');
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