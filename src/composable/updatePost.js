import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router'

const usePosts = () => {

    const posts = ref([])

    const post = ref({})

    const inputTask = ref({})
    const apiUrl = `http://localhost:3000/`
    const router = new useRouter()


    const displayPosts = async() => {

        try {
            const res = await axios.get(apiUrl + "tasks")
            posts.value = res.data
            console.log(posts.value)
        } catch {
            (error) => console.log(error)

        }
    }


    const fetchOnePost = async(id) => {
        try {
            const result = await axios.get(apiUrl + `tasks/${id}`)
            post.value = result.data
            console.log(result.data)
        } catch {
            (error) => console.log(error)

        }
    }

    const update = async(id, inputTask) => {

        try {
            const result = await axios.patch(apiUrl + `tasks/${id}`, inputTask)
            const index = posts.value.findIndex(u => u.id === id);
            console.log(index)
            console.log(result.data)
            console.log(posts.value)
            console.log(inputTask)
            posts.value[index] = result.data

            router.push({
                name: 'posts'
            })
        } catch {
            (error) => console.log(error)
        }
    }


    return {
        post,
        fetchOnePost,
        inputTask,
        update,
        posts,
        displayPosts
    }
}
export default usePosts