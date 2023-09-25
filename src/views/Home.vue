<template>
    <div class="container mx-auto py-4">
      <app-header />
      <div v-if="isLoading">
        <span class="loading loading-spinner loading-lg"></span>

    </div>
      <div v-else class="grid grid-cols-12 gap-6">
        <div class="col-span-3" v-for="(coin,index) in coins" :key="coin.id">
            <app-card  :coin="coin"/> 

        </div>
      </div>
    </div>
  </template>
  
  
  <script>


import AppHeader from '../components/AppHeader.vue';
  import AppCard from '../components/AppCard.vue'
  import {mapGetters}from 'vuex'  

  export default {
    name: 'HomeView',
    components: {
      AppHeader,
      AppCard
    },
    data:()=>({
        isLoading:false
    }),
    computed:{
        ...mapGetters(['coins','searchValue']),
    },
    methods:{
        getData(){
            this.isLoading = true;
            this.$store.dispatch('getAllCryptos').then(()=>{
                this.isLoading = false;
            })
        }
        
    },
    mounted(){
        this.getData();
    }
  }
  </script>
  