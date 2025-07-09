<template>
  <div class="page-wrapper">
    <q-toolbar class="top-toolbar">
      <q-toolbar-title>SISTEM INFORMASI AKADEMIK</q-toolbar-title>
    </q-toolbar>
    <div class="line"></div>
    <div class="header mb-6">
      <h1 class="title">Halaman Awal</h1>
      <div class="line"></div>
      <p class="subtitle">Selamat datang, {{ userName }}.</p>
      <div class="line"></div>
    </div>
    <q-breadcrumbs class="mb-4">
      <q-breadcrumbs-el label="Home" to="/dashboard" />
      <q-breadcrumbs-el label="Halaman Awal" />
    </q-breadcrumbs>
    <div class="line"></div>

    <div class="chart-box mb-8">
      <h2>Statistik Mahasiswa Masuk 2020-2025</h2>
      <Line :data="chartData" :options="chartOptions" />
    </div>

    <!-- Tombol Navigasi -->
    <div class="cards">
      <div class="card card-red" @click="$router.push('/krs')">
        Kartu Rencana Studi (KRS)
      </div>
      <div class="card card-green" @click="$router.push('/khs')">
        Kartu Hasil Studi (KHS)
      </div>
      <div class="card card-yellow" @click="$router.push('/jadwal')">
        Pengambilan Cuti
      </div>
    </div>

    <!-- Tombol WhatsApp -->
    <div class="kontak-box mt-8">
      <h2>Kontak Layanan Badan SIMFOKOM</h2>
      <p>
        Jika Anda mengalami kendala teknis atau memiliki pertanyaan akademik, silakan hubungi layanan SIMFOKOM melalui tombol di bawah ini.
      </p>
      <a
        href="https://wa.me/6285213789650"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-btn"
      >
        Butuh bantuan?
      </a>
    </div>
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

Chart.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const userName = 'RIFKI ADITIA'

const chartData = {
  labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Jumlah Mahasiswa Masuk',
      data: [490, 530, 400, 450, 574, 1032],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.3,
      fill: true,
      pointBackgroundColor: '#3b82f6',
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: true, position: 'bottom' },
    tooltip: { enabled: true },
    title: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 50 },
    },
  },
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
  margin-bottom: 1rem;
}
.top-toolbar {
  background-color: #4b5563;   
  color: white;
}
.line {
  height: 3px;
  background-color: #2563eb;   
}
.header .title {
  font-size: 2rem;
  font-weight: bold;
  color: #1e3a8a;
}
.subtitle {
  color: #4b5563;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.card {
  padding: 1.5rem;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.card-red {
  background: linear-gradient(to right, #ef4444, #dc2626);
}
.card-green {
  background: linear-gradient(to right, #10b981, #059669);
}
.card-yellow {
  background: linear-gradient(to right, #facc15, #eab308);
}
.kontak-box {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.kontak-box h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.kontak-box p {
  color: #4b5563;
  margin-bottom: 1rem;
}
.whatsapp-btn {
  background: #10b981;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;
}
.whatsapp-btn:hover {
  background: #059669;
}
</style>
