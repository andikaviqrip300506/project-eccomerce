<template>
  <Navbar></Navbar>
  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
    <!--Main Col-->
    <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none bg-white opacity-75 mx-6 lg:mx-0">
    
  
      <div class="p-4 md:p-12 text-center lg:text-left">
        <!-- Image for mobile view-->
        <div class="block lg:hidden rounded-full mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('https://randomuser.me/api/portraits/lego/0.jpg')"></div>
        <div v-for="get in address.data">
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{ getUserData.name }}</h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><img class="mr-3" src="../assets/image/gm.jpg" width="40" height="40">{{ getUserData.email }}</p>
        <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><img class="mr-3" src="../assets/image/map.avif" width="40" height="40">
          {{ get.address }} {{ get.city }} {{ get.state }} {{ get.postal_code }}
          <a href="https://what3words.com/after.takes.shorts" target="_blank"><u></u></a></p>
        <p class="pt-8 text-sm"><b>$ {{ getUserData.balance }} Balance</b></p>
        </div>
        <div class="pt-12 pb-8">
          <button @click="logout" class="bg-red-700 hover:bg-red-800 hover:text-white text-white font-bold py-2 px-4 rounded-full">
           Logout
          </button> 
        </div>
  
        <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
          <a class="link opacity-100 hover:opacity-50" href="/cart" target="_blank"><img src="../assets/image/cart.png" width="40" height="40"></a>
         
        </div>
  
      </div>
  
    </div>
    
    <!--Img Col-->
    <div class="w-full lg:w-2/5">
      <!-- Big profile image for side bar (desktop) -->
      <img src="https://randomuser.me/api/portraits/lego/0.jpg" class="rounded-none lg:rounded-lg hidden lg:block">
      <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
      
    </div>
  
  
  </div>
</template>  

<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from '../components/Navbar.vue';

export default {
  computed: {
    ...mapGetters('profile', ['getUserData']),
    ...mapGetters('auth', ['gettersUserAddress']),
    ...mapGetters('cart', ['getCart']),

    address() {
      return this.gettersUserAddress;
    },
  },
  methods: {
    ...mapActions('profile', ['fetchUser']),
    ...mapActions('auth', ['logout']),
    ...mapActions('cart', ['fetchCart']),
    ...mapActions('auth', ['getUserAddress']),
  },
  async mounted() {
    this.getUserAddress();
    const user = await this.fetchUser();

    if (user) {
      this.$store.commit('profile/SET_USER', user);
    }
  },
  created() {
    this.fetchUser();
  },
  components: {
    Navbar
  }
};
</script>