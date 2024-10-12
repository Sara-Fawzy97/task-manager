<template>
  <div> <form @submit.prevent="update(route.currentRoute.value.params.id,inputTask.value)">
      <div>
        <label for="title" class="text-lg">Title </label
        ><input
          id="title"
          name="title"
         v-model="post.title"
          required
          type="text"
          placeholder="Title"
          class="w-5/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        
      </div>
      <div class="mt-5">
        <label for="desc" class="text-lg">Description </label>
        <input
          id="desc"
          name="desc"
        v-model="post.description"
          required
          type="text"
          placeholder="Describtion"
          class="w-5/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
<div class="text-right">
      <button type="submit" class="mt-6 rounded-md bg-indigo-600 px-5 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>

</div>
    </form>
  </div>
</template>

<script setup>
import usePosts from "@/composable/updatePost";
import { ref,onMounted } from "vue";
import { useRouter } from 'vue-router'


const {post, fetchOnePost, inputTask,update,posts,displayPosts}=usePosts()
const route = useRouter();

onMounted(()=>{
  fetchOnePost(route.currentRoute.value.params.id)
})

</script>

<style>

</style>