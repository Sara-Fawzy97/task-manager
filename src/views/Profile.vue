<template class="bg-amber-600">
  <div >
    <div class="bg-indigo-800 p-7 m-10 rounded-lg text-white text-xl">
        <h1>Welcome {{user.name}}</h1>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

 const userString = ref(localStorage.getItem("userInfo")|| null)

 const user= JSON.parse(userString.value)
 console.log(user)

</script>

<style>

</style>