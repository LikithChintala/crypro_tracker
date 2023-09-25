<template>
    <div class="flex justify-center items-center h-screen">
      <div class="card bordered w-1/3 p-8">
        <div class="flex justify-center mb-4">
          <h2 class="card-title text-center">Sign Up</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="signup">
            <div class="form-control">
              <label class="label">Email</label>
              <input class="input input-bordered" type="email" v-model="email" />
            </div>
            <div class="form-control">
              <label class="label">Password</label>
              <input class="input input-bordered" type="password" v-model="password" />
            </div>
            <div class="form-control">
              <label class="label">Confirm Password</label>
              <input class="input input-bordered" type="password" v-model="confirmPassword" />
            </div>
            <div class="flex justify-center mt-4">
              <button class="btn btn-primary" type="submit">Sign Up</button>
            </div>
          </form>
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
        confirmPassword: '',
      };
    },
    methods: {
      async signup() {
        if (this.password === this.confirmPassword) {
          try {
            const { user } = await Auth.signUp({
              username: this.email,
              password: this.password,
              attributes: {
                email: this.email,  // optional
              },
            });
            console.log('User signed up:', user);
            this.$router.push('/login')
            // Redirect to a verification page or directly to login
          } catch (error) {
            console.error('Error signing up:', error);
            // Handle errors
          }
        } else {
          console.error('Passwords do not match');
          // Inform user that passwords do not match
        }
      },
    },
  };
  </script>  
  <style scoped>
  /* Your custom styles here */
  </style>
  