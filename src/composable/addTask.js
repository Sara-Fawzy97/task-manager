import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router'


const addTask = () => {

    const post = ref({
        title: '',
        description: '',
    })

    const inputTask = ref('')
    const apiUrl = 'http://localhost:3000/'
    const router = new useRouter()

    const load = async() => {
        try {
            const result = await axios.post(apiUrl + 'tasks', post.value);
            // inputTask.value = result.data
            console.log(inputTask.value)

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