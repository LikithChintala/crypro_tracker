<template>
    <div class="flex justify-center items-center h-screen">
      <div class="card bordered w-1/3 p-8">
        <div class="flex justify-center mb-4">
          <h2 class="card-title text-center">Login</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
            <div class="form-control">
              <label class="label">Email</label>
              <input class="input input-bordered" type="email" v-model="email" />
            </div>
            <div class="form-control">
              <label class="label">Password</label>
              <input class="input input-bordered" type="password" v-model="password" />
            </div>
            <div class="flex justify-center mt-4">
              <button class="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
          <div class="flex justify-center mt-4">
            <span>Don't have an account? <a @click="goToSignup" class="text-blue-500 cursor-pointer">Create one</a></span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import { Auth } from 'aws-amplify';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const user = await Auth.signIn(this.email, this.password);
        console.log('Logged in:', user);
        localStorage.setItem('token',user?.signInUserSession.accessToken.jwtToken)
        this.$router.push('/')
        // Redirect to dashboard or other protected route
      } catch (error) {
        console.error('Error logging in', error);
        // Handle errors such as incorrect username/password
      }
    },
    goToSignup() {
      this.$router.push({ name: 'Signup' });  // Replace 'Signup' with the name you've given to the Signup route in your Vue Router config
    },

  },
};
</script>
  
  <style scoped>
  /* Your custom styles here */
  </style>
  