import axios from "axios";
import { ref } from 'vue'
const getPosts = () => {

        // let posts = ref([]);

        // const load = async() => {
        //     await axios.get('https://jsonplaceholder.typicode.com/posts').then(
        //         (res) => {
        //             posts.value = res.data
        //             console.log(posts)
        //         }
        //     )
        // }

        // return {
        //     posts,
        //     load,
        //     getPosts

        // }
    }
    // export default getPosts


const getAllPosts = () => {

    const apiUrl = 'http://localhost:3000/'
    let posts = ref([])

    const loaad = async() => {
        await axios.get(apiUrl + "tasks").then(
            (res) => {
                posts.value = res.data
                console.log(posts.value)
            })
    }

    return {
        loaad,
        posts,
        getAllPosts

    }
}
export default getAllPosts