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
          <span class="flex-shrink-0 text-3xl font-black tracking-tight opacity-100">Login</span>
        </a>
      </div>
      <!-- /Logo -->


      <form @submit.prevent="performLogin" id="" class="mb-4" action="#" method="POST">
        <div class="mb-4">
          <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email or Username</label>
          <input type="text" v-model="email" class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email-username" placeholder="Enter your email or username" autofocus="" />
        </div>
        <div class="mb-4">
          <div class="flex justify-between">
            <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700" for="password">Password</label>
            <a href="auth-forgot-password-basic.html" class="cursor-pointer text-gray-500 no-underline hover:text-gray-500">
              <small class=" "><u>Forgot Password?</u></small>
            </a>
          </div>
          <div class="relative flex w-full flex-wrap items-stretch">
            <input type="password" v-model="password" id="password" class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="············" />
          </div>
        </div>
        <div class="mb-4">
          <div class="block">
            <input class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-gray-500 focus:border-gray-500 focus:shadow" type="checkbox" id="remember-me" style="background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)" checked />
            <label class="inline-block" for="remember-me"> Remember Me </label>
          </div>
        </div>
        <div class="mb-4">
          <button class="grid w-full cursor-pointer select-none rounded-md border border-gray-900 bg-gray-900 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:border-gray-600 focus:bg-gray-600 focus:text-white focus:shadow-none" type="submit">Sign in</button>
        </div>
      </form>

      <p class="mb-4 text-center">
        Don't have account?
        <a href="#" class="cursor-pointer text-gray-500 no-underline hover:text-gray-500"><router-link to="/register"><u>Create an account</u></router-link></a>
      </p>
    </div>
  </div>
  <!-- /Register -->
</div>
</div>
<Footer></Footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  data() {
      return {
          email: '',
          password: '',
      };
  },
  computed: {
    ...mapGetters('auth', ['loginError', 'isAuthenticated'])
  },
  methods: {
      ...mapActions('auth', ['login']),
      async performLogin() {
          const credentials = {
              email: this.email,
              password: this.password,
          };

          const success = await this.login(credentials);

          if (success && this.isAuthenticated) {
              // Redirect to the desired route on successful login
               this.$router.push('/');
               this.$swal({
                title: 'Login Berhasil',
                icom: 'success'
               })
          } else {

            if(this.loginError) {
            this.$swal({
               title: 'Login Gagal',
               icon: success,
               showCloseButton: true,
        });
      }     else {
        this.$swal({
               title: 'Login Failed',
               icon: success,
               showCloseButton: true,
        });
      }
          }
      },
 
  },
  components: {
      Navbar,
      Footer
  
},
}
</script>