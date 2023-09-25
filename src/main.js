import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';  // path to your aws-exports file
import {applyPolyfills,defineCustomElements} from '@aws-amplify/ui-components/loader';

applyPolyfills().then(()=>{
    defineCustomElements(window);
})

Amplify.configure(awsconfig);

createApp(App).use(router).use(store).mount('#app')
