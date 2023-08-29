<template>
    <br>
    <br>
    <br>
    
    <div class="w-screen">
    <div class="mx-auto mt-8 max-w-screen-lg px-2">
      <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
      </div>
      <br>
   
      <div class="absolute left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-indigo-500 bg-white p-2"><img class="h-full object-contain" src="../assets/image/a.png" alt="" /></div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <center> <h2 class="mb-6 max-w-lg text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
            Thanks For Your Order !<br />
            <span class="inline-block text-gray-600"></span>
          </h2></center>
      <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 260" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(123.267, 122.97, 122.875, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,104L10,86.7C20,69,40,35,60,43.3C80,52,100,104,120,112.7C140,121,160,87,180,86.7C200,87,220,121,240,130C260,139,280,121,300,121.3C320,121,340,139,360,147.3C380,156,400,156,420,143C440,130,460,104,480,112.7C500,121,520,165,540,164.7C560,165,580,121,600,108.3C620,95,640,113,660,99.7C680,87,700,43,720,39C740,35,760,69,780,99.7C800,130,820,156,840,151.7C860,147,880,113,900,121.3C920,130,940,182,960,190.7C980,199,1000,165,1020,151.7C1040,139,1060,147,1080,143C1100,139,1120,121,1140,95.3C1160,69,1180,35,1200,52C1220,69,1240,139,1260,147.3C1280,156,1300,104,1320,95.3C1340,87,1360,121,1380,125.7C1400,130,1420,104,1430,91L1440,78L1440,260L1430,260C1420,260,1400,260,1380,260C1360,260,1340,260,1320,260C1300,260,1280,260,1260,260C1240,260,1220,260,1200,260C1180,260,1160,260,1140,260C1120,260,1100,260,1080,260C1060,260,1040,260,1020,260C1000,260,980,260,960,260C940,260,920,260,900,260C880,260,860,260,840,260C820,260,800,260,780,260C760,260,740,260,720,260C700,260,680,260,660,260C640,260,620,260,600,260C580,260,560,260,540,260C520,260,500,260,480,260C460,260,440,260,420,260C400,260,380,260,360,260C340,260,320,260,300,260C280,260,260,260,240,260C220,260,200,260,180,260C160,260,140,260,120,260C100,260,80,260,60,260C40,260,20,260,10,260L0,260Z"></path></svg>
      <div class="mt-6 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr class="">
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Detail : </td>
    
             
            </tr>
          </thead>
    
          <tbody class="lg:border-gray-300">
            <tr class="">
              <td width="10%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                Order Code : 
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500"></p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ getOrder.code }}</td>
            </tr>
    
            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
               Name : 
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500"></p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ getOrder.user.name }}</td>
    
           
             
            </tr>
    
            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                Email :
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">15 December, 2021</p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ getOrder.user.email }}</td>
            </tr>
    
            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                Shipping Address : 
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">14 November, 2021</p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  {{ getOrder.shipping_address.address }},
                  {{ getOrder.shipping_address.city }},
                  {{ getOrder.shipping_address.state }},
                  {{ getOrder.shipping_address.country }},
                  {{ getOrder.shipping_address.postal_code }}</td>
            </tr>
    
            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                Phone Number :
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">15 October, 2021</p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell"> {{ getOrder.shipping_address.phone }}</td>
    
              
            </tr>
            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                Payment Method :
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">15 October, 2021</p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ getOrder.orders[0].payment_type }}</td>
    
              
            </tr>
            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                Deivery Type
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">15 October, 2021</p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell"> {{ getOrder.orders[0].delivery_type }}</td>
    
              
            </tr>
            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                Total :
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">15 October, 2021</p>
                </div>
              </td>
    
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{{ getOrder.orders[0].grand_total }}</td>
    
              
            </tr>
          </tbody>
        </table>
      </div>
    
    
  
    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="relative overflow-x-auto pt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">No.</th>
              <th scope="col" class="px-6 py-3">Product</th>
              <th scope="col" class="px-6 py-3">Quantity</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700" v-for="(order, index) in getOrder.orders[0].products.data">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
              {{ index + 1 }}
              </th>
              <td class="px-6 py-4">{{ order.name }}</td>
              <td class="px-6 py-4">{{ order.quantity }}</td>
              <td class="px-6 py-4">{{ order.total }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total Belanja</p>
              <p class="font-semibold text-gray-900">Rp. {{ getOrder.grand_total }}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Biaya Jasa</p>
              <p class="font-semibold text-gray-900">
                Rp. {{ (getOrder.orders[0].products.data.length) * 10000 }}
              </p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total Harga : </p>
            <p class="text-2xl font-semibold text-gray-900">
              Rp. {{(getOrder.grand_total) + (getOrder.orders[0].products.data.length * 10000) }}
            </p>
          </div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <br>
  
  <center><hr class="mb-4 h-1.5 w-1/4 bg-gray-600" /></center>
    </template>
  <script>
  import {  mapState, mapGetters } from 'vuex';
  
  export default {
 
    props: ['orderCode'],
    computed: {
        ...mapState('product', ['getProductId']),
        ...mapGetters('order', ['getOrder'])
    },
    created() {
    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },

  };
  </script>