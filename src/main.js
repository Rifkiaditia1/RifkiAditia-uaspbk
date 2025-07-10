import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'

import { Chart, registerables, Filler } from 'chart.js'
Chart.register(...registerables)
Chart.register(Filler)

// 🔧 Setup app
const app = createApp(App)

// 🔧 Setup Pinia dan persist
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 🔧 Global Properties (axios)
app.config.globalProperties.$axios = axios

// 🔧 Use Plugins
app.use(pinia)
app.use(router)
app.use(Quasar, { plugins: {} })

// 🔧 Mount ke DOM
app.mount('#app')
