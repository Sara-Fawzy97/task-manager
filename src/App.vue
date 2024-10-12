<template>
  <nav class="mx-auto flex max-w-7xl items-center lg:px-8&quot;">
    <div><b>LOGO</b></div>
    <div>
      <router-link
        to="/"
        v-if="isAuthenticated"
        class="p-5 text-sm font-semibold leading-6 text-gray-900"
        >Log in</router-link
      >
      <router-link
        v-if="isAuthenticated"
        :to="{ name: 'register' }"
        class="p-5 text-sm font-semibold leading-6 text-gray-900"
        >Register</router-link
      >

      <router-link
        v-if="!isAuthenticated"
        :to="{ name: 'posts' }"
        class="p-5 text-sm font-semibold leading-6 text-gray-900"
        >Posts</router-link
      >
      <router-link
        v-if="!isAuthenticated"
        :to="{ name: 'profile' }"
        class="p-5 text-sm font-semibold leading-6 text-gray-900"
        >Profile</router-link
      >

      <button
        v-if="!isAuthenticated"
        @click="logOut"
        class="p-5 text-sm font-semibold leading-6 text-gray-900"
      >
        Logout
      </button>
    </div>
  </nav>

  <router-view />
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  computed: {
    isAuthenticated() {
      return ref(!localStorage.getItem("token")).value;
    },
  },
  methods: {
    logOut() {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      this.$router.push("/");
      location.reload()

      
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

nav {
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(79 70 229);
}
</style>
