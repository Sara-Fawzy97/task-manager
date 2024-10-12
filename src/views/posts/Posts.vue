<template>
  <div class="flex justify-between">
    <h2 class="text-2xl">All Posts</h2>

    <router-link
      :to="{ name: 'addPost' }"
      class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 my-1.5"
      >Add a new Post</router-link
    >
  </div>

  <ul>
    <p>{{ posts.length }} Posts</p>
    <li v-for="post in posts" :key="post._id">
      <h2 class="bold text-xl text-indigo-600">{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <button @click="load(post._id)" class="btn">Delete</button>
      <router-link :to="'edit/'+post._id" class="btn ml-2">Edit</router-link>
    </li>
    <hr />
  </ul>
</template>

<script setup>
import { onMounted } from "vue";
import getAllPosts from "../../composable/displayPosts";
import getPosts from "../../composable/displayPosts";
import {useRouter} from "vue-router"
import deletePost from "@/composable/deletePost";
import updatePost from "@/composable/updatePost";
import usePosts from "@/composable/updatePost";

const { posts, displayPosts } = usePosts();
// const { posts, load } = getPosts();

const {load}=deletePost();
displayPosts();




onMounted(() => {
  usePosts()
  // getPosts();
});
</script>

<style>
li {
  border: 1px solid #eee;
  text-align: left;
  padding: 20px;
  margin-top: 25px;
}

ul li .btn {
  padding: 8px;
  background: #e5e7eb;
  border-radius: 18px;
}
</style>