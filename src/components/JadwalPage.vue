<template>
  <div class="page-wrapper">
    <q-toolbar class="top-toolbar">
      <q-toolbar-title>SISTEM INFORMASI AKADEMIK</q-toolbar-title>
    </q-toolbar>
    <div class="line"></div>

    <q-breadcrumbs class="mb-4">
      <q-breadcrumbs-el label="Home" to="/dashboard" />
      <q-breadcrumbs-el label="Pengambilan Cuti" />
    </q-breadcrumbs>
    <div class="line"></div>

    <div class="page-container">
      <h1 class="page-title">Pengambilan Cuti</h1>
      <p class="subtitle">Silakan isi form pengajuan cuti di bawah ini.</p>

      <form class="cuti-form-card">
        <div class="form-group">
          <label>Tanggal</label>
          <select v-model="tanggal" :disabled="cutiTersimpan && !isEditing">
            <option disabled value="">Pilih tanggal</option>
            <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Bulan</label>
          <select v-model="bulan" :disabled="cutiTersimpan && !isEditing">
            <option disabled value="">Pilih bulan</option>
            <option v-for="(b, i) in bulanList" :key="i" :value="b">{{ b }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Tahun</label>
          <select v-model="tahun" :disabled="cutiTersimpan && !isEditing">
            <option disabled value="">Pilih tahun</option>
            <option v-for="y in tahunList" :key="y" :value="y">{{ y }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Semester</label>
          <select v-model="semester" :disabled="cutiTersimpan && !isEditing">
            <option disabled value="">Pilih semester</option>
            <option v-for="s in semesterList" :key="s" :value="s">{{ s }}</option>
          </select>
        </div>

        <div class="actions">
          <button class="btn-simpan" type="button" @click="simpanCuti">
            {{ isEditing ? 'Perbarui' : 'Simpan' }}
          </button>
        </div>
      </form>

      <div v-if="cutiTersimpan" class="result-card">
        <h2 class="result-title">Data pengambilan cuti yang sudah disimpan:</h2>
        <table class="result-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Bulan</th>
              <th>Tahun</th>
              <th>Semester</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ cutiTersimpan.tanggal }}</td>
              <td>{{ cutiTersimpan.bulan }}</td>
              <td>{{ cutiTersimpan.tahun }}</td>
              <td>{{ cutiTersimpan.semester }}</td>
              <td>
                <button class="btn-edit" type="button" @click="editCuti">Edit</button>
                <button class="btn-batal" type="button" @click="hapusCuti">Batal</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tanggal = ref('')
const bulan = ref('')
const tahun = ref('')
const semester = ref('')
const isEditing = ref(false)

const cutiTersimpan = ref(null)

const bulanList = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

const currentYear = new Date().getFullYear()
const tahunList = computed(() => {
  const years = []
  for (let y = 1980; y <= currentYear; y++) {
    years.push(y)
  }
  return years
})

const semesterList = Array.from({ length: 8 }, (_, i) => i + 1)

const simpanCuti = () => {
  if (tanggal.value && bulan.value && tahun.value && semester.value) {
    cutiTersimpan.value = {
      tanggal: tanggal.value,
      bulan: bulan.value,
      tahun: tahun.value,
      semester: semester.value
    }
    isEditing.value = false
  } else {
    alert('Mohon lengkapi semua data cuti sebelum menyimpan.')
  }
}

const editCuti = () => {
  if (cutiTersimpan.value) {
    tanggal.value = cutiTersimpan.value.tanggal
    bulan.value = cutiTersimpan.value.bulan
    tahun.value = cutiTersimpan.value.tahun
    semester.value = cutiTersimpan.value.semester
    isEditing.value = true
  }
}

const hapusCuti = () => {
  if (confirm('Anda yakin ingin membatalkan pengajuan cuti?')) {
    tanggal.value = ''
    bulan.value = ''
    tahun.value = ''
    semester.value = ''
    cutiTersimpan.value = null
    isEditing.value = false
  }
}
</script>

<style scoped>
.page-container {
  padding: 2rem;
  text-align: center;
}
.page-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e3a8a;
}
.subtitle {
  font-size: 1.3rem;
  color: #4b5563;
  margin-bottom: 2rem;
}
.top-toolbar {
  background-color: #4b5563;
  color: white;
}
.line {
  height: 3px;
  background-color: #2563eb;
}
.cuti-form-card {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.2rem;
}
.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}
.form-group select {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
}
.actions {
  display: flex;
  justify-content: center;
}
.btn-simpan {
  background: #3b82f6;
  color: white;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  font-size: 1.1rem;
}
.btn-simpan:hover {
  background: #2563eb;
}
.btn-edit {
  background: #10b981;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  margin-right: 0.5rem;
}
.btn-edit:hover {
  background: #059669;
}
.btn-batal {
  background: #ef4444;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}
.btn-batal:hover {
  background: #dc2626;
}
.result-card {
  margin-top: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  text-align: left;
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
</style>
