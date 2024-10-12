import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Resgister from '../views/Register.vue'
import Posts from '../views/posts/Posts.vue'
import AddPost from "../views/posts/AddPost.vue"
import Profile from "../views/Profile.vue"
import { compile } from 'vue'
import axios from 'axios'
import updatePost from '@/composable/updatePost'
import EditPost from '@/views/posts/EditPost.vue'
const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Resgister
    }, {
        path: '/posts',
        name: 'posts',
        component: Posts,
        meta: { requiresAuth: true }

    }, {
        path: '/add-post',
        name: 'addPost',
        component: AddPost,
        meta: { requiresAuth: true }

    }, {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: { requiresAuth: true }
    }, {
        path: '/edit/:id',
        name: 'edit',
        component: EditPost,
        meta: { requiresAuth: true }
    }
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token) {
            next('/');
        } else {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            next();
        }
    } else {
        next()
    }

});

export default router;