<template>

<app-header />

    <div class="container mx-auto py-4">
      <div v-if="isLoading">
        <span class="loading loading-spinner loading-lg"></span>

    </div>
      <div v-else>
       <h1 class="text-2xl">{{ coinDetails.data?.name }}</h1>
       <ul class="list-disc pl-4 mt-4">
        <li>symbol: {{ coinDetails.data?.symbol }}</li>
        <li>Price: <strong>${{ parseFloat(coinDetails.data?.priceUsd).toFixed(2) }}</strong></li>
        <li>Max Supply: {{coinDetails.data?.maxSupply ?  parseFloat(coinDetails.data?.maxSupply).toFixed(2) : 'Not Available' }}</li>

       </ul>
      </div>
    </div>
  </template>
  

  <script>

import {mapGetters}from 'vuex'  
import AppHeader from '../components/AppHeader.vue';

export default {
    name: 'DetailsView',
    components: {
      AppHeader,
    },
    data:()=>({
        isLoading:false
    }),
    computed:{
        ...mapGetters(['coinDetails']),
        // coinList(){
        //     if(this.searchValue.length > 0){
        //         return this.coins.data.filter((coin)=> coin.name.toLowerCase().includes(this.searchValue.toLowerCase()))
        //     }

        //     return this.coins.data
        // }
    },
    methods:{
        getDetails(){
            this.isLoading = true;
            const id = this.$route.params.id
            this.$store.dispatch('getCoinDetails',id).then(()=>{
                this.isLoading = false;
            })
        }
        
    },
    mounted(){
        this.getDetails();
    }
  }
  </script>
  