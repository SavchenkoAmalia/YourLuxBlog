import axios from "axios";
import { getBlog } from "./getBlogs.js";

const blogList = document.querySelector(".blogList");

if (blogList) {
  blogList.addEventListener("click", deletePost);
}

async function deletePost(event) {
  if (event.target.classList.contains("delete")) {
    console.log('click an mouse')
    const id = event.target.id;

    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`);
      getBlog(); // оновити список
    } catch (error) {
      console.error("Помилка видалення:", error);
    }
  }
}
