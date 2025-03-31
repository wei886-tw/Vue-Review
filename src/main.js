import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/all.scss'


App.use(router)
createApp(App).mount('#app')

