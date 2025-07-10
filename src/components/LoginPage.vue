<template>
  <div class="login-bg flex min-h-screen justify-center items-center">
    <div class="login-card">
      <h1 class="login-title">Login<br />Mahasiswa</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-1">NIM</label>
          <input v-model="nim" type="text" placeholder="Masukkan NIM" class="input-field" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-1">Password</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Masukkan Password"
              class="input-field"
              required
            />
            <span class="material-icons eye-icon" @click="togglePassword">
              {{ showPassword ? 'visibility' : 'visibility_off' }}
            </span>
          </div>
        </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const nim = ref('')
const password = ref('')
const showPassword = ref(false)
const router = useRouter()
const authStore = useAuthStore()

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = () => {
  const success = authStore.login(nim.value, password.value)
  if (success) {
    router.push('/dashboard')
  } else {
    alert('NIM atau password salah!')
  }
}
</script>

<style scoped>
.login-bg {
  background: linear-gradient(135deg, #4f8cff 0%, #a6c1ee 100%);
  min-height: 100vh;
}
.login-card {
  background: #f0f0f0;
  border-radius: 1.5rem;
  padding: 2rem;
  width: 350px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease;
  transition: transform 0.3s;
}
.login-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
}
.login-title {
  color: #333;
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}
.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #d1d5db;
  border-radius: 0.75rem;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  font-size: 1rem;
  background: #fff;
}
.input-field:focus {
  border: 2px solid #4f8cff;
  box-shadow: 0 0 0 2px #a6c1ee55;
}
.password-wrapper {
  position: relative;
}
.eye-icon {
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
  color: #4f8cff;
}
.login-btn {
  width: 100%;
  background: linear-gradient(90deg, #4f8cff 0%, #6fc3ff 100%);
  color: #fff;
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 4px 14px rgba(79, 140, 255, 0.15);
}
.login-btn:hover {
  background: linear-gradient(90deg, #357ae8 0%, #4f8cff 100%);
  transform: translateY(-2px) scale(1.02);
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
