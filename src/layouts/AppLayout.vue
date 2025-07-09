<template>
  <div class="flex min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 font-sans">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        SISTEM AKADEMIK
      </div>
      <nav class="menu">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="menu-item"
          active-class="active"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </aside>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
const menuItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Pengisian KRS', path: '/krs' },
  { label: 'Kartu Hasil Studi', path: '/khs' },
  { label: 'Pengambilan Cuti', path: '/jadwal' },
  { label: 'Logout', path: '/logout' },
]
</script>

<style scoped>
.sidebar { width: 240px; background: #4b5563; color: white; padding-top: 1rem; border-top-right-radius: 1.5rem; border-bottom-right-radius: 1.5rem; box-shadow: 2px 0 10px rgba(0,0,0,0.1);}
.sidebar-header { text-align: center; font-weight: bold; font-size: 1.2rem; padding: 1rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
.menu { display: flex; flex-direction: column; gap: 0.5rem; padding: 1rem; }
.menu-item { color: white; padding: 0.75rem 1rem; border-radius: 0.5rem; transition: background 0.2s, transform 0.2s; }
.menu-item:hover { background: rgba(255, 255, 255, 0.1); transform: translateX(4px); }
.active { background: rgba(255, 255, 255, 0.2); }

.main-content { flex: 1; padding: 2rem; }
.site-header {
  background: #1e3a8a;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-content {
  max-width: 100%;
}

</style>
