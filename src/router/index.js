import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import LoginPage from '../components/LoginPage.vue'
import DashboardPage from '../components/DashboardPage.vue'
import KRSPage from '../components/KRSPage.vue'
import KHSPage from '../components/KHSPage.vue'
import JadwalPage from '../components/JadwalPage.vue'
import Logout from '../components/Logout.vue'

const routes = [
  { path: '/login', component: LoginPage },
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: DashboardPage },
      { path: 'krs', component: KRSPage },
      { path: 'khs', component: KHSPage },
      { path: 'jadwal', component: JadwalPage },
      { path: 'logout', component: Logout },
    ],
  },
  // tambahkan default redirect jika path tidak dikenal
  { path: '/', redirect: '/login' },
  { path: '/:pathMatch(.*)*', redirect: '/login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
