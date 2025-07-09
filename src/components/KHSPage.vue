<template>
  <div class="page-wrapper">
    <q-toolbar class="top-toolbar">
      <q-toolbar-title>SISTEM INFORMASI AKADEMIK</q-toolbar-title>
    </q-toolbar>
    <div class="line"></div>
    <q-breadcrumbs class="mb-4">
      <q-breadcrumbs-el label="Home" to="/khs" />
      <q-breadcrumbs-el label="KHS" />
    </q-breadcrumbs>
    <div class="line"></div>
    <div class="page-container">
      <h1 class="page-title">Kartu Hasil Studi (KHS)</h1>
      <p>Berikut data KRS yang telah disimpan:</p>

      <div v-if="krsStore.krsData.length" class="result-card">
        <table class="result-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Semester</th>
              <th>Mata Kuliah</th>
              <th>Kelas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in krsStore.krsData" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.semester }}</td>
              <td>{{ item.mataKuliah }}</td>
              <td>{{ item.kelas }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="no-data">
        <p>Belum ada data KRS yang disimpan.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useKrsStore } from '../data/krsStore'

const krsStore = useKrsStore()
</script>

<style scoped>
.page-container { padding: 2rem; text-align: center; }
.page-title { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; }
.top-toolbar { background-color: #4b5563; color: white; }
.line { height: 3px; background-color: #2563eb; }
.result-card { margin-top: 2rem; background: white; padding: 1rem; border-radius: 0.75rem; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
.result-table { width: 100%; border-collapse: collapse; }
.result-table th, .result-table td { border: 1px solid #e5e7eb; padding: 0.5rem; text-align: center; }
.result-table th { background: #f3f4f6; font-weight: 600; }
.no-data { margin-top: 2rem; font-style: italic; color: #6b7280; }

</style>
