import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import 'normalize.css'
import Icon from './components/Icon.vue'

createApp(App).component('Icon', Icon).use(store).use(router).mount('#app')
