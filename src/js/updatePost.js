import axios from 'axios';
import { openModalForEdit } from './modal.js';

export function addEditEvents() {
  const editButtons = document.querySelectorAll('.editBtn');

  editButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const postId = button.dataset.id;

      try {
        const response = await axios.get(`http://localhost:3000/blogs/${postId}`);
        const post = response.data;
        openModalForEdit(post);
      } catch (error) {
        console.error('Помилка при завантаженні поста:', error);
      }
    });
  });
}
