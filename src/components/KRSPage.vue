<template>
  <div class="page-wrapper">
    <q-toolbar class="top-toolbar">
      <q-toolbar-title>SISTEM INFORMASI AKADEMIK</q-toolbar-title>
    </q-toolbar>
    <div class="line"></div>
    <q-breadcrumbs class="mb-4">
      <q-breadcrumbs-el label="Home" to="/krs" />
      <q-breadcrumbs-el label="Pengisian KRS" />
    </q-breadcrumbs>
    <div class="line"></div>

    <div class="krs-container">
      <h1 class="title">Pengisian KRS</h1>

      <!-- Form pengisian -->
      <form @submit.prevent="submitForm" class="form-card">
        <div class="form-group">
          <label>Semester</label>
          <select v-model="semester" @change="updateMataKuliah" required>
            <option disabled value="">Pilih semester</option>
            <option v-for="s in semesterList" :key="s" :value="s">{{ s }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Mata Kuliah</label>
          <select v-model="mataKuliah" required :disabled="!mataKuliahList.length">
            <option disabled value="">Pilih mata kuliah</option>
            <option v-for="mk in mataKuliahList" :key="mk" :value="mk">{{ mk }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Kelas</label>
          <select v-model="kelas" required>
            <option disabled value="">Pilih kelas</option>
            <option v-for="k in kelasList" :key="k" :value="k">{{ k }}</option>
          </select>
        </div>

        <button type="submit" class="btn-submit">Tambah</button>
      </form>

      <!-- Tabel hasil pengisian -->
      <div v-if="krsStore.krsData.length" class="result-card">
        <h2 class="result-title">KRS yang sudah diinput:</h2>
        <table class="result-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Semester</th>
              <th>Mata Kuliah</th>
              <th>Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in krsStore.krsData" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.semester }}</td>
              <td>{{ item.mataKuliah }}</td>
              <td>{{ item.kelas }}</td>
              <td class="aksi-buttons">
                <button
                  class="btn-hapus"
                  @click="hapusData(index)"
                  :disabled="item.saved"
                >
                  Hapus
                </button>
                <button
                  class="btn-simpan"
                  @click="simpanData(index)"
                  :disabled="item.saved"
                >
                  Simpan
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useKrsStore } from '../data/krsStore'

const krsStore = useKrsStore()

const semester = ref('')
const mataKuliah = ref('')
const kelas = ref('')
const mataKuliahList = ref([])

const semesterList = [
  'Semester 1', 'Semester 2', 'Semester 3', 'Semester 4',
  'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'
]

const mataKuliahPerSemester = {
  'Semester 1': ['Matematika Dasar', 'Pengantar TI', 'Bahasa Indonesia', 'Pendidikan Pancasila'],
  'Semester 2': ['Algoritma & Pemrograman', 'Kalkulus', 'Struktur Data', 'Bahasa Inggris'],
  'Semester 3': ['Basis Data', 'Jaringan Komputer', 'Sistem Operasi', 'Statistika'],
  'Semester 4': ['Pemrograman Web', 'Sistem Informasi', 'Interaksi Manusia-Komputer', 'Etika Profesi'],
  'Semester 5': ['Kecerdasan Buatan', 'Rekayasa Perangkat Lunak', 'Pemrograman Mobile', 'Keamanan Jaringan'],
  'Semester 6': ['Data Mining', 'Cloud Computing', 'Manajemen Proyek TI', 'Analisis Sistem'],
  'Semester 7': ['Big Data', 'Internet of Things', 'Pengolahan Citra Digital', 'Sistem Pakar'],
  'Semester 8': ['Penulisan Tugas Akhir', 'Seminar Proposal', 'Seminar Hasil', 'Magang'],
}

const kelasList = ['A', 'B', 'C', 'D', 'E', 'F']

const updateMataKuliah = () => {
  mataKuliah.value = ''
  mataKuliahList.value = semester.value ? mataKuliahPerSemester[semester.value] : []
}

const submitForm = () => {
  if (!semester.value || !mataKuliah.value || !kelas.value) {
    alert('Lengkapi semua data sebelum menyimpan!')
    return
  }
  krsStore.addKrs({
    semester: semester.value,
    mataKuliah: mataKuliah.value,
    kelas: kelas.value,
    saved: false
  })
  semester.value = ''
  mataKuliah.value = ''
  kelas.value = ''
  mataKuliahList.value = []
}

const hapusData = (index) => {
  krsStore.krsData.splice(index, 1)
}

const simpanData = (index) => {
  krsStore.krsData[index].saved = true
}
</script>

<style scoped>
.top-toolbar {
  background-color: #4b5563;
  color: white;
}
.line {
  height: 3px;
  background-color: #2563eb;
}
.krs-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.title {
  font-size: 2rem;
  font-weight: bold;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 1.5rem;
}
.form-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group label {
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: block;
  color: #374151;
}
.form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
}
.btn-submit {
  background: #3b82f6;
  color: white;
  font-weight: bold;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
}
.btn-submit:hover {
  background: #2563eb;
}
.result-card {
  margin-top: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.result-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #111827;
}
.result-table {
  width: 100%;
  border-collapse: collapse;
}
.result-table th,
.result-table td {
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
  text-align: center;
}
.result-table th {
  background: #f3f4f6;
  font-weight: 600;
}
.aksi-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.btn-hapus, .btn-simpan {
  padding: 0.4rem 0.7rem;
  border: none;
  border-radius: 0.4rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-hapus { background: #ef4444; }
.btn-hapus:disabled { background: #d1d5db; cursor: not-allowed; }
.btn-simpan { background: #10b981; }
.btn-simpan:disabled { background: #d1d5db; cursor: not-allowed; }
</style>
