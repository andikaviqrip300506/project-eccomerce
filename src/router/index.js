import { createWebHistory, createRouter, } from "vue-router";
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Forgot from '../components/Forgot.vue';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Cart from '../views/Cart.vue';
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/reset',
        name: 'Reset',
        component: Forgot
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;