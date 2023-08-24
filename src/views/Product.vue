<template>
  <Navbar></Navbar>
  <br>
  <br>
  <br>
  <center><hr class="mb-4 h-1.5 w-1/4 bg-gray-600" /></center>

  <div class="grid grid-cols-2 gap-2 m-14">
  <div class="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8">
<div class="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
  <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
    <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">Winter Collection</h2>
    <p class="mt-2 text-lg">By Luis Vuitton</p>
    <p class="mt-4 mb-8 max-w-md text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam iusto, cumque dolores sit odio ex.</p>
    <a href="#" class="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
      <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Shop now </span>
      <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>

  <div class="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
    <img class="h-full w-full object-cover" src="../assets/image/kaos.jpg" loading="lazy" />
  </div>
</div>
<br>
<br>
</div>
<div class="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8">
<div class="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
  <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
    <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">Winter Collection</h2>
    <p class="mt-2 text-lg">By Luis Vuitton</p>
    <p class="mt-4 mb-8 max-w-md text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam iusto, cumque dolores sit odio ex.</p>
    <a href="#" class="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
      <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Shop now </span>
      <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
  <div class="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
    <img class="h-full w-full object-cover" src="../assets/image/kaoss.jpg" loading="lazy" />
  </div>
  </div>
</div>  
</div>
<center>     <h5 class="text-xl font-semibold tracking-tight text-slate-900">T-Shirt</h5></center>
<div class="grid grid-cols-3 gap-3 m-14">
<div class="relative flex-auto m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md" v-for="product in getProduct.data.splice(0,6)" :key="product.id">
<router-link :to="{name: 'SingleProduct', params: { slug : product.slug }}">
<a href="">
  <img class="h- rounded-t-lg object-cover" src="../assets/image/scmm1.webp" alt="product image" />
</a>
</router-link>
<span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Disc</span>
<div class="mt-4 px-5 pb-5">
  <a href="#">
    <h5 class="text-xl font-semibold tracking-tight text-slate-900"> {{ product.name }}</h5>
  </a>
  <div class="mt-2.5 mb-5 flex items-center">
    <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  </div>
  <div class="flex items-center justify-between">
    <p>
      <span class="text-sm text-slate-900">Rp. {{ product.base_price }} </span>
    </p>
    <a href="#" class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg> Add to cart
      </a
    >
  </div>
</div>
</div>
</div>
<br>
<br>
<Footer></Footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


export default {
  computed: {
      ...mapGetters('product', ['getProduct']),
  },
  methods: {
      ...mapActions('product', ['fetchProduct'])
  },
  created() {
      this.fetchProduct();
  },
  components: {
      Navbar,
      Footer
    }
 
}
</script>