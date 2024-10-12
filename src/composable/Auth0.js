import { ref } from "vue";

const auth = () => {

    const token = ref(localStorage.getItem('token'))
}