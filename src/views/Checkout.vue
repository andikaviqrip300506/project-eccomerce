<template>
    <Navbar></Navbar>
    <br>
    <br>
    <form style="width: 50%;"></form>
<div class="grid sm:px-10 lg:grid-cols-1 lg:px-20 xl:px-32">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Your Order</p>
    <p class="text-gray-400"></p>
    <div v-for="cart in getCart" :key="cart.id">
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="../assets/image/scmm4.webp" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">{{ cart.name }}</span>
          <span class="float-right text-gray-400">Count : {{ cart.qty  }}</span>
          <p class="mt-5 text-lg font-bold">Rp. {{ cart.regular_price * cart.qty }}</p>
        </div>
      </div>
    </div>
  </div>

    <p class="mt-8 text-lg font-medium">Delivery</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" value="standard" v-model="deliveryType" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="../assets/image/car.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Standard</span>
            <p class="text-slate-500 text-sm leading-6"><font color="green">Delivery: 2-4 Days</font> </p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" value="express" v-model="deliveryType" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="../assets/image/car.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Express</span>
            <p class="text-slate-500 text-sm leading-6"><font color="green">Delivery: 2-4 Days</font> </p>
          </div>
        </label>
      </div>
    </form>
    <p class="mt-8 text-lg font-medium">Shipping Methods</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" v-model="paymentType" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="../assets/image/codd.png" alt="" />
          <div class="ml-5 text-center mt-1">
            <span class="mt-2 font-semibold">Cash Or Duel</span>
          </div>
        </label>
      </div>

    </form>
  </div>
  <div class="mt-13 bg-gray-50 px-4 pt-8 lg:mt-14">
   

      <!-- Total -->
      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">$399.00</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Shipping</p>
          <p class="font-semibold text-gray-900">$8.00</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">${{  }}</p>
      </div>
    </div>
    <button @click="performCheckout" class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
  </div>


</template>

<script>
import Navbar from '../components/Navbar.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
        return {
            paymentType: '',
            deliveryType: '',
        };
    },
  computed: {
    ...mapGetters('cart', ['getCart']),
    ...mapGetters('order', ['getOrder']),
    ...mapGetters('cart', ['getCheckout']),
  },
  methods: {
    ...mapActions('cart', ['fecthCart']),
    ...mapActions('product', ['fetchProduct']),
    ...mapActions('auth', ['getUserAddress']),


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
    },
    async performCheckout() {
            const cartItemIds = this.getCart.map(product => product.cart_id);
            const userAddressResponse = await this.$store.dispatch('auth/getUserAddress');
            const userAddressId = userAddressResponse.data[0].id;
            const checkoutPayload = {
                shippingAddress: userAddressId,
                billingAddress: userAddressId,
                paymentType: this.paymentType,
                deliveryType: this.deliveryType,
                cart_item_ids: cartItemIds
            };
            await this.$store.dispatch('cart/checkoutCart', checkoutPayload)
            .then(() => {
             this.$router.push(`/order/${this.getCheckout.order_code}`);
        });
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

    }
}
</script>