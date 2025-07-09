<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <router-link to="/" class="logo-text">SIA Mahasiswa</router-link>
      </div>
      <ul class="navbar-links">
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/profile">Profil</router-link></li>
        <li><router-link to="/krs">KRS</router-link></li>
        <li><router-link to="/khs">KHS</router-link></li>
        <li><router-link to="/jadwal">Jadwal</router-link></li>
        <li><router-link to="/pembayaran">Pembayaran</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 2rem;
  color: white;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.navbar-logo .logo-text {
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
}
.navbar-links li a {
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
}
.navbar-links li a:hover {
  color: #ffeb3b; 
}
</style>
