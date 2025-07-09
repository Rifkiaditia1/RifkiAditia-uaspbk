import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from "./router/index.js"
import axios from 'axios'
import { Chart, registerables, Filler } from 'chart.js'

Chart.register(...registerables)
Chart.register(Filler)

const myApp = createApp(App)
const pinia = createPinia()
const app = createApp(App)

myApp.use(router);
myApp.use(Quasar, {
  plugins: {}, 
})
app.config.globalProperties.$axios = axios
app.use(pinia)
myApp.mount('#app')

