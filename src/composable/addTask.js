import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router'
import getAllPosts from './displayPosts'


const addTask = () => {

    const post = ref({
        title: '',
        description: '',
    })
    const posts = ref([])
    const inputTask = ref('')
    const apiUrl = 'http://localhost:3000/'
    const router = new useRouter()

    const load = async(newPost) => {
        try {
            const result = await axios.post(apiUrl + 'tasks', newPost);

            // inputTask.value = result.data
            console.log(inputTask.value)
            posts.value.push(result.data)
            router.push({
                name: 'posts'
            })

        } catch {
            (error) => console.log(error)
        }
    }

    return { post, load, inputTask }
}
export default addTask