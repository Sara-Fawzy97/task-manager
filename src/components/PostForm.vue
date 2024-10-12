<template>
   <div class="postForm">
    <form @submit.prevent="load">
      <div>
        <label for="title" class="text-lg">Title </label
        ><input
          id="title"
          name="title"
          v-model="task.title"
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
          v-model="task.description"
          required
          type="text"
          placeholder="Describtion"
          class="w-5/6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
<div class="text-right">
      <button type="submit" class="mt-6 rounded-md bg-indigo-600 px-5 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
<slot></slot>
</div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
input::placeholder{
  padding:5px
}
.postForm{
    border: 1px solid #eee;
  padding: 30px;
  text-align: left;
}
</style>