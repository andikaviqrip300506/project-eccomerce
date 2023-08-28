<template>
  <Navbar></Navbar>
  <div>
    <div class="h-screen bg-gray-50 pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div v-if="totalHarga != 0">
        <div
          class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
        >
          <div class="md:w-2/3">
            <div v-for="cart in getCart" :key="cart.id">
              <div
                class="justify-between mb-6 ring ring-gray-900 transition delay-75 p-6 sm:flex sm:justify-start"
              >
                <img
                  src="../assets/image/scmm3.webp"
                  alt="product-image"
                  class="w-40"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {{ cart.name }}
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">
                      {{ cart.cart_id }}
                    </p>
                  </div>
                  <div
                    class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                  >
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
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">Rp. {{ cart.regular_price * cart.qty }}</p>
                      <div @click="removeItem(cart.cart_id)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Sub total -->
          <div
            class="mt-6 h-full border border-gray-950 bg-white p-6 shadow-md md:mt-0 md:w-1/3"
          >
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Total Belanja</p>
              <p class="text-gray-700">Rp. {{ totalHarga() }} </p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Biaya Jasa</p>
              <p class="text-gray-700">Rp. </p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total Harga</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">Rp. </p>
              </div>
            </div>
            <button
              class="mt-6 w-full bg-gray-900 border border-gray-900 transition py-1.5 font-medium text-blue-50"
            ><router-link to="/checkout">Checkout</router-link>
              
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center">Keranjang anda kosong silahkan, belanja terlebih dahulu</p>
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

