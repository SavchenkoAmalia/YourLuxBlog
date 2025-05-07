import axios from "axios";

export async function createPost(data) {
    try {
        const post = {...data, date: new Date(), article: {text:data.text}}
        console.log(data)
        const getAnswer = await axios.post("http://localhost:3000/blogs", post);
        console.log(getAnswer);
    } catch (error) {
        
    }
}