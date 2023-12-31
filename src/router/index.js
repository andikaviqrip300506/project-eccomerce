import { createWebHistory, createRouter, } from "vue-router";
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Forgot from '../components/Forgot.vue';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Cart from '../views/Cart.vue';
import Contact from '../views/Contact.vue';
import Brands from '../views/Brands.vue';
import Category from '../views/Category.vue';
import SingleProduct from '../views/SingleProduct.vue';
import Profile from '../views/Profile.vue';
import Checkout from '../views/Checkout.vue';
import Order from '../views/Order.vue'
import store from "../store";


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
    {
        path: '/brands',
        name: 'Brands',
        component: Brands
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/order/:orderCode',
        name: 'Order',
        component: Order,
        props: true,
      },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
        meta: { requiresLogin: true },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { requireProfile: true }
    },
    {
        path: '/product/:slug',
        name: 'SingleProduct',
        component: SingleProduct,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireProfile && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next()
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
      next("/login");
    } else {
      next();
    }
  });


export default router;