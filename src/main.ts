import { createApp } from 'vue'
import App from './App.vue'

console.log('start');
setTimeout(()=>{
    createApp(App).mount('#app')
},1000)
