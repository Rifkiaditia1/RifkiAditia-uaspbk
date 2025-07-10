// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import LoginPage from '../components/LoginPage.vue'
import DashboardPage from '../components/DashboardPage.vue'
import KRSPage from '../components/KRSPage.vue'
import KHSPage from '../components/KHSPage.vue'
import JadwalPage from '../components/JadwalPage.vue'
import Logout from '../components/Logout.vue'
import { useAuthStore } from '../stores/authStore'

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
      { path: '', redirect: '/login' }, 
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ Middleware: Redirect ke /login jika belum login
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !authStore.isLoggedIn) {
    return next('/login')
  }

  next()
})

export default router
