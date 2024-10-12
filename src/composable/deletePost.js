import { ref } from "vue";
import axios from "axios";


const deletePost = () => {
    const posts = ref([]);
    const post = ref({})
    const apiUrl = `http://localhost:3000/`

    const load = async(id) => {
        try {
            console.log(id)
            const result = await axios.delete(apiUrl + `tasks/${id}`)
            posts.value = posts.value.filter(post => post.value.id !== id)
            console.log(result)
            location.reload();
        } catch {
            (error) => console.log(error)

        }
    }
    return {
        load,

        posts
    }
}
export default deletePost