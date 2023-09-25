import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailsView from '../views/DetailView.vue'
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/details/:id',
        name: 'details',
        component: DetailsView,
        meta:{
            requiresAuth:true,
        }
      },

      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/signup',
        name: 'Signup',
        component: Signup,
      },
  ]
})

const isUserLoggedIn = () =>{
    const token = localStorage.getItem('token');
    console.log('dddd',token,token !== "")
    if (token !== "") return true;
    return false;
}
router.beforeEach((to,from,next)=>{
    console.log(to.meta.requiresAuth)

    if(to.meta.requiresAuth){
        if(isUserLoggedIn()){
            console.log('im here')
            next();
        }else{
            next('/login');
        }
    }else{
        next();
    }
})

export default router