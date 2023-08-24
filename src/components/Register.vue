<template>
  <Navbar></Navbar>
    <div class="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
    
  <div class="relative">
    
    <!-- Register -->
    <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
      <div class="flex-auto p-6">
        <!-- Logo -->
        <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
          <a href="#" class="flex cursor-pointer items-center gap-2 text-gray-500 no-underline hover:text-gray-500">
            <span class="flex-shrink-0 text-3xl font-black tracking-tight opacity-100">Register</span>
          </a>
        </div>
    
  
        <form @submit.prevent="performRegis" id="" class="mb-4">
            <div class="mb-4">
            <label for="name" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Full Name</label>
            <input type="text" v-model="nama" class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="name" name="name" placeholder="Enter your email or username" autofocus="" />
          </div>
          <div class="mb-4">
            <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Enter Your Email</label>
            <input type="text" v-model="email" class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email" placeholder="Enter your email or username" autofocus="" />
          </div>
          <div class="mb-4">
            <label for="phone" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Enter Your Phone</label>
            <input type="text" v-model="phone" class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="phone" name="phone" placeholder="Enter your email or username" autofocus="" />
          </div>
          
          
          <div class="mb-4">
            <div class="flex justify-between">
              <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700" for="password">Enter Your Password</label>
            </div>
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="password" v-model="password" id="password" class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="············" />
            </div>
          </div>
            
          <div class="mb-4">
            <div class="flex justify-between">
              <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700" for="password">Confirm Password</label>
            </div>
          <div class="relative flex w-full flex-wrap items-stretch">
              <input type="password" v-model="confirm" id="confirm" class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" name="confirm" placeholder="············" />
            </div>
            </div>

         
          <div class="mb-4">
            <button class="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Sign Up</button>
          </div>
        </form>
  
        <p class="mb-4 text-center">
          Have account?
          <a href="#" class="cursor-pointer text-gray-500 no-underline hover:text-gray-500"><router-link to="/login"><u>Sign In</u></router-link></a>
        </p>
      </div>
    </div>
    <!-- /Register -->
  </div>
  </div>
  <Footer></Footer>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    data() {
        return {
            nama: '',
            email: '',
            phone: '',
            password: '',
            confirm: ''
        };
    },
    methods: {
        ...mapActions('auth', ['register']),
        async performRegis() {
            const credentials = {
                nama: this.nama,
                email: this.email,
                phone: this.phone,
                password: this.password,
                confirm: this.confirm
            };
  
            const success = await this.register(credentials);
  
            if (success) {
                // Redirect to the desired route on successful login
                this.$swal({
                 title: 'Lengkapi Field',
                 icon: success,
                 showCloseButton: true,
          });
            } else {
                this.$router.push('/login');
                 this.$swal({
                  title: 'Login Berhasil',
                  icom: 'success'
                 })
            }
        },
    },
    components: {
      Navbar,
      Footer
    }
  };
  </script>