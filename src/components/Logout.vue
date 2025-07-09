<template>
  <div class="page-wrapper">
    <q-toolbar class="top-toolbar">
      <q-toolbar-title>SISTEM INFORMASI AKADEMIK</q-toolbar-title>
    </q-toolbar>
    <div class="line"></div>

    <q-breadcrumbs class="mb-4">
      <q-breadcrumbs-el label="Home" to="/dashboard" />
      <q-breadcrumbs-el label="Logout" />
    </q-breadcrumbs>
    <div class="line"></div>

    <div class="page-container">
      <h1 class="page-title">Profil Mahasiswa</h1>

      <div class="profile-card">
        <img class="profile-photo" src="/foto.jpeg" alt="Foto User" />
        <div class="profile-details">
          <p><strong>Nama:</strong> Rifki Aditia</p>
          <p><strong>NPM:</strong> 233510233</p>
          <p><strong>Tempat, Tanggal Lahir:</strong> Terempa, 29-06-2005</p>
          <p><strong>Fakultas:</strong> Teknik</p>
          <p><strong>Program Studi:</strong> Teknik Informatika (S1)</p>
        </div>
      </div>

      <div class="logout-container">
        <button class="btn-logout" @click="handleLogout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleLogout = () => {
  alert('Logout berhasil. Anda akan diarahkan ke halaman login.');
  // Arahkan ke halaman login atau proses logout sesuai kebutuhan
  window.location.href = '/login';
}
</script>

<style scoped>
.page-container {
  padding: 2rem;
  text-align: center;
}
.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1e3a8a;
}
.top-toolbar {
  background-color: #4b5563; 
  color: white;
}
.line {
  height: 3px;
  background-color: #2563eb;
}
.profile-card {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #2563eb;
}
.profile-details {
  text-align: left;
  font-size: 1.2rem;
  color: #374151;
}
.profile-details p {
  margin: 0.3rem 0;
}
.logout-container {
  margin-top: 2rem;
}
.btn-logout {
  background: #ef4444;
  color: white;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
}
.btn-logout:hover {
  background: #dc2626;
}
</style>
