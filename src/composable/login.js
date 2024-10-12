import { ref } from "vue";
import axios from 'axios';
import posts from '../views/posts/Posts.vue'

import { useRouter } from 'vue-router'
const login = () => {

    const user = ref({
        email: '',
        password: '',
    })

    const message = ref('')
    const token = ref('')
    const apiUrl = 'http://localhost:3000/'
    const router = new useRouter()

    const load = async() => {
        try {
            const result = await axios.post(apiUrl + 'login', user.value);

            token.value = result.data.token
            localStorage.setItem('userInfo', JSON.stringify(result.data.user))

            localStorage.setItem('token', token.value)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`

            router.push({
                name: "profile",
                query: {
                    name: result.data.user.name,
                    id: result.data.user._id
                }
            })
            console.log(result.data.user)


        } catch {
            (error) => console.log(error)
        }

    }

    return { load, user, message }
}


export default login