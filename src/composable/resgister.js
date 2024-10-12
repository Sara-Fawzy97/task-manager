import { ref } from 'vue'
import axios from 'axios'
import posts from '../views/posts/Posts.vue'

import { useRouter } from 'vue-router'

const registerUser = () => {

    // const name = ref(null)
    // const email = ref(null)
    // const age = ref(null)
    // const password = ref(null)

    const user = ref({
        name: '',
        email: '',
        age: '',
        password: ''
    })
    const apiUrl = 'http://localhost:3000/'
    const inputUser = ref('')
    const token = ref('')

    const router = new useRouter()
    const load = async() => {

        try {
            const result = await axios.post(apiUrl + 'users', user.value)
            inputUser.value = result.data
            token.value = result.data.token
            localStorage.setItem('userInfo', JSON.stringify(result.data.user))

            localStorage.setItem('token', token.value)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
            console.log(inputUser.value)

            router.push({
                name: "profile",
                query: {
                    name: result.data.user.name,
                    id: result.data.user._id
                }
            })
            location.reload()

        } catch (error) {
            console.log(error)
        }
    }
    return { user, load, inputUser }

}
export default registerUser

//<script>
// import axios from 'axios'
// import api from '../api'
// export default {
//     data(){
//         return{
//             model:{
//                   user:{
//                 name:"",
//                 age:'',
//                 email:'',
//                 password:''
//             }
//             }

//         }
//     },
//     methods:{

//         postNewUser(){
//         axios.post('https://jsonplaceholder.typicode.com/users',this.model.user)
//         .then((res)=>{
//             console.log(res);
//             // this.student.model
//         } ).catch((error)=>{
//             console.log(error)
//         })


//         }
//     }

// }
// </script>