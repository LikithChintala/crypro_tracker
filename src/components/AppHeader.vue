<template>
    
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Crypto Tracker</a>
  </div>
  <div class="flex-none gap-2">

    <div class="form-control" v-if ="showSearchBar">
      <input type="text" placeholder="Search for a coin" class="input input-bordered w-24 md:w-auto" @input="handleInput"/>
    </div>

    <button v-if="isTokenEmpty" @click="handleLogin" class="btn btn-primary">
      Sign In
    </button>

    <div v-else class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">    
      <li ><a @click="handleLogout">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {

  computed:{

    showSearchBar(){
      if(this.$route.path === '/') return true;
      return false
    },
    isTokenEmpty() {
      return !localStorage.getItem('token');
    },
  },
  methods:{
    handleInput(e){
      this.$store.commit('SET_SEARCH_VALUE',e.target.value);
      console.log(e.target.value)
    },
    handleLogout() {
      localStorage.setItem('token', ""); 
      this.$router.push({ name: 'Login' }); 
    },
    handleLogin() {
      // Redirect to the login page
      this.$router.push({ name: 'Login' });
    },
  }
 
}


</script>