import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router'

const usePosts = () => {

    const posts = ref([])

    const post = ref({})

    const updatedPost = ref({
        title: '',
        description: '',
        completed: ''
    })
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
            updatedPost.value = result.data
            console.log(updatedPost.value)

        } catch {
            (error) => console.log(error)

        }
    }

    const update = async(id, updatedPost) => {
        console.log('updatedPost:', updatedPost);

        // if (!updatedPost || Object.keys(updatedPost).length === 0) {
        //     console.error('Error: updatedPost is undefined or empty');
        //     return;
        // }

        try {
            const result = await axios.patch(apiUrl + `tasks/${id}`, updatedPost)
            const index = posts.value.findIndex(p => p._id === id);

            console.log(posts.value)
            if (index !== -1) {
                // console.log(posts.value[index])
                posts.value[index] = result.data
                    // posts.value.splice(index, 1, result.data);


            }
            console.log(index)
            console.log(id)
            console.log(result.data)
            console.log(updatedPost)

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
        update,
        posts,
        displayPosts,
        updatedPost
    }
}
export default usePosts