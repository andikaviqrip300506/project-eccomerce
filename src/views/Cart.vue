<template>
  <Navbar></Navbar>

  <div class="bg-neutral-50 py-12">
  <div class="container mx-auto my-12">
    <div class="flex flex-col gap-6 md:flex-row">
      <div class="flex-1 shrink-0 rounded-sm border border-neutral-200 bg-white px-4 py-8 shadow-sm">
        <div class="mb-8">
          <h3 class="text-2xl font-bold">Cart({{ getCart.length }})</h3>
          <p>Welkom in A Store</p>
        </div>
        <div v-for="cart in getCart" :key="cart.id">
        <ul role="list" class="-my-6 divide-y divide-neutral-200">
          <!-- product item 1 -->

          <li class="flex py-6">
           
            <div class="h-32 w-24 flex-shrink-0 overflow-hidden rounded-sm border bg-neutral-50">
              <img src="../assets/image/scmm3.webp" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
            </div>
       
            <div class="ml-4 flex flex-1 flex-col">
              <div>
                <div class="flex justify-between text-sm text-gray-900">
              
                  <h3 class="text-base font-bold"><a href="#"> {{ cart.name }}</a></h3>
                  <button type="button" class="flex gap-2 font-medium text-neutral-400 hover:text-neutral-900">
                    <p class="text-xs font-normal">{{ cart.cart_id }}</p>
                    <svg class="h-4 w-4 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
                <div class="mt-2">
                  <p class="text-xs text-neutral-400">Clothes</p>
                </div>
              </div>
              <div class="mt-auto flex flex-1 items-end justify-between text-sm">
                 <div
                      class="flex items-center gap-1 my-2 border border-gray-900 w-[144px]"
                    >
                      <button
                        @click="changeQuantity({cartId: cart.cart_id, typeQty: 'minus'})"
                        type="button"
                        class="w-10 h-10 leading-10 text-gray-600 hover:bg-gray-900 hover:text-white transition"
                      >
                        &minus;
                      </button>

                     <font color="">
                      <input
                        type="number"
                        id="Quantity"
                        :value="cart.qty"
                        class="h-10 w-16 rounded bg-gray-300 border border-none text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      /> 
                      </font>
  
                      <button
                      @click="changeQuantity({cartId: cart.cart_id, typeQty: 'plus'})"
                        type="button"
                        class="w-10 h-10 leading-10 hover:bg-gray-900 hover:text-white transition"
                      >
                        &plus;
                      </button>
                    </div>

                <div class="flex">
                  <div class="text-right">
                    <p class="text-sm font-bold text-orange-600">{{ cart.regular_price * cart.qty }}</p>
            
                    <div class="mt-1 flex flex-row items-center gap-2">
                      <svg class="h-3 w-3 rotate-90 stroke-2 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                      <p class="text-xs font-normal text-neutral-400">Titel van korting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
            </ul>
    
            </div>
         

          <!-- product item 2 -->
       
       

</div>
      <!-- Totaalprijs -->

      <div class="sticky space-y-4 rounded-sm border border-neutral-200 bg-white py-6 px-4 shadow-sm sm:px-6 md:w-1/3">
        <!-- pricing totals -->
        <h4 class="text-2xl font-bold">Totaalprijs</h4>
        <div class="flex flex-col gap-2">
          <div v-for="cart in getCart">
          <div class="flex justify-between text-base text-gray-900">
            <p>Total Barang</p>
            <p> {{ cart.regular_price * cart.qty }}</p>
          </div>
          <div class="flex justify-between text-base text-gray-900">
            <p>Biaya Jasa</p>
            <p>1000</p>
          </div>
          <div class="flex flex-row items-center justify-end gap-2">
            <svg class="h-4 w-4 rotate-90 stroke-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
            <p class="text-xs font-normal text-neutral-400">Titel van de korting</p>
          </div>
          <div class="flex flex-row items-center justify-end gap-2">
            <svg class="h-4 w-4 rotate-90 stroke-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
            <p class="text-xs font-normal text-neutral-400">Extra korting</p>
          </div>
          <div>
            <div class="my-2 w-full border-t border-gray-300"></div>
            <div class="flex justify-between text-base font-bold text-gray-900">
              <p>Total Bayar</p>
              <p>Rp. {{ totalHarga() }}</p>
            </div>
            <p class="mt-0.5 text-sm text-gray-400">inclusief btw</p>
          </div>
          <!-- checkout button -->
          <div class="mt-auto flex flex-col gap-2 pt-4">
            <div class="">
              <router-link to="/checkout">
              <button class="flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-neutral-900">Checkout</button>
            </router-link>
            </div>
            <div class="flex justify-center text-center text-sm text-gray-500">
              <p>
             
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  computed: {
    ...mapGetters('cart', ['getCart']),
  },
  methods: {
    ...mapActions('cart', ['fecthCart']),
    ...mapActions('product', ['fetchProduct']),

    totalHarga() {
      this.total = this.getCart.reduce((acc, product) => {
        return acc + parseFloat(product.regular_price * product.qty);
      }, 0);
      return this.total.toFixed(2);
      
    },
    removeItem(cartId) {
      this.$store.dispatch('cart/removeFromCart', cartId);
    },
    changeQuantity(cartId, typeQty) {
      this.$store.dispatch('cart/changeQuantityCart', cartId, typeQty);
    }
  },
  beforeMount() {
    this.fetchProduct();
    this.fecthCart();
  },
  mounted() {
    this.fecthCart();
  },
  components: {
      Navbar,
      Footer
    }
}
</script>

