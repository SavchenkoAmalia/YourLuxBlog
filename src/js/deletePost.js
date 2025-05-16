import axios from "axios";
import { getBlog } from "./getBlogs";

const blogList = document.querySelector(".blogList")
const blogListSecondary = document.querySelector(".blogListSecondary")

blogListSecondary.addEventListener("click",deletePost)
blogList.addEventListener("click",deletePost)


async function deletePost(event) {
    if (event.target.classList.contains("delete"))
     {
    const delet = event.target.id
    try {
            const { data } = await axios.delete(`http://localhost:3000/blogs/${delet}`);
            getBlog()
        } catch (error) {
            console.error(error);
            
        }
    }
}