<template>
  <Navbar></Navbar>
<section class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8"> 
    <!-- Heading -->
    <div class="mb-10 md:mb-16">
      <br>
      <center><hr class="mb-4 h-1.5 w-1/4 bg-gray-600" /></center>
      <br>
  
    
    </div>
    <!-- /Heading -->
    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      <!-- Article -->
      <div v-for="brands in getBrands.data.splice(0, 6)">
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img :src="brands.logo" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">{{ brands.slug }}</a>
          </h2>

          <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
          </div>
        </div>
      </article>
      <!-- /Article -->
      
      </div>
      <!-- /Article -->
    </div>
  </div>
</section>
<Footer></Footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


export default {
    computed: {
        ...mapGetters('brands', ['getBrands']),
    },
    methods: {
        ...mapActions('brands', ['fetchBrands'])
    },
    created() {
        this.fetchBrands();
    },
    components: {
      Navbar,
      Footer
    }
}
</script>