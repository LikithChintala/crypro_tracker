<template>
    
    <div class="card w-85 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10" >
    <img :src="`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`" alt="crypo_img" class="rounded-xl"  />
  </figure>
  <div class="card-body items-center text-center">
    
    <a :href="coin.explorer" class="text-sm fonr-medium underline" target="_blank">
        <h2 class="card-title text-sm">{{ coin.name }} - #{{ coin.rank }}</h2>
    </a>
    <div>$ {{ parseFloat(coin.priceUsd).toFixed(2) }}</div>
    <div class="card-actions">
        <router-link :to="`/details/${coin.id}`">
            <button class="btn btn-sm btn-outline btn-primary">View Details</button>
        </router-link>
    </div>
  </div>
</div>

</template>

<script >

export default {
  props:{
    coin:{
      type:Object,
      default:()=>{}
    }
  },
  mounted(){
    console.log(this.coin)
  }
}
</script>

