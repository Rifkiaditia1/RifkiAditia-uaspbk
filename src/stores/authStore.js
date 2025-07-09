import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    nim: '',
    isLoggedIn: false,
  }),
  actions: {
    login(nim, password) {
      if (nim === '12345' && password === 'password123') {
        this.nim = nim
        this.isLoggedIn = true
        return true
      } else {
        this.isLoggedIn = false
        return false
      }
    },
    logout() {
      this.nim = ''
      this.isLoggedIn = false
    },
  },
})
