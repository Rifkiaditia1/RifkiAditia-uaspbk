TUJUAN UTAMA WEBSITE
Website ini dirancang untuk menjadi portal digital mahasiswa yang memungkinkan mereka mengakses dan mengelola informasi akademik secara mandiri, cepat, dan terstruktur. Secara spesifik, tujuannya adalah:

Mempermudah mahasiswa dalam melakukan proses administrasi akademik seperti pengisian KRS, melihat KHS, dan pengajuan cuti.

Mengurangi ketergantungan pada proses manual seperti pengumpulan formulir fisik atau tatap muka dengan bagian akademik.

Menyediakan sistem yang terintegrasi agar data seperti mata kuliah, semester, kelas, serta data pribadi mahasiswa bisa diakses dalam satu sistem.

Meningkatkan efisiensi waktu dan transparansi informasi akademik kepada mahasiswa.

Memberikan pengalaman pengguna (UX) yang baik dengan antarmuka yang responsif, intuitif, dan modern.

ALUR UTAMA PENGGUNA (MAHASISWA)
Login ke sistem menggunakan NIM dan password

Setelah berhasil login → diarahkan ke Dashboard

Dari Dashboard, mahasiswa bisa mengakses menu:

Pengisian KRS

Melihat KHS

Mengajukan cuti

Melihat profil & Logout

Setelah logout → kembali ke halaman login

MODUL & FITUR UTAMA + PENJELASAN RINCI
1. Login Page (LoginPage.vue)
Fungsinya:

Form autentikasi mahasiswa dengan NIM dan password

Memvalidasi data login menggunakan authStore

Jika login berhasil → diarahkan ke /dashboard

Fitur teknis:

Menggunakan v-model untuk binding data form

Fungsi handleLogin():

Memanggil authStore.login()

Jika sukses: router.push('/dashboard')

Jika gagal: tampilkan alert

2. Dashboard Page (DashboardPage.vue)
Fungsinya:

Sebagai halaman utama setelah login

Menyediakan navigasi ke seluruh fitur akademik:

KRS

KHS

Jadwal Cuti

Logout

3. KRS Page (KRSPage.vue)
Fungsi:

Halaman pengisian KRS (Kartu Rencana Studi)

Proses Lengkap:

Pilih semester (1–8)

Pilih mata kuliah berdasarkan semester (4 per semester)

Pilih kelas (A–F)

Klik Tambah → data masuk ke tabel

Klik Simpan → data dikunci, tidak bisa dihapus

Klik Hapus → menghapus data sebelum disimpan

Penyimpanan:

Data KRS disimpan di krsStore.js (menggunakan Pinia)

Data ini akan diakses juga di halaman KHS

4. KHS Page (KHSPage.vue)
Fungsi:

Menampilkan hasil data KRS yang telah disimpan

Menunjukkan tabel:

Nomor

Semester

Mata kuliah

Kelas

Catatan penting:

Hanya data yang sudah disimpan yang akan muncul

Data berasal dari global store (krsStore.krsData)

5. Jadwal / Cuti Page (JadwalPage.vue)
Fungsinya:

Mahasiswa bisa melakukan pengajuan cuti

Proses lengkap:

Form berisi input:

Tanggal (dropdown 1–31)

Bulan (Januari–Desember)

Tahun (1980 hingga tahun sekarang)

Semester (1–8)

Setelah isi form → klik Simpan

Data ditampilkan di bawah form

Ada tombol:

Edit → ubah data kembali

Batal → reset data

Simpan → kunci data cuti

6. Logout Page (Logout.vue)
Fungsinya:

Menampilkan data pribadi mahasiswa:

Nama

NPM

Tempat Tanggal Lahir

Fakultas

Program Studi

Foto profil

Tombol Logout:

Menjalankan router.push('/login')

Menghapus sesi login (jika ada implementasi auth lengkap)

UNGSI UTAMA DALAM SISTEM
Fungsi	            Penjelasan
handleLogin	        Menvalidasi login user
handleLogout	    Mengarahkan kembali ke login
submitForm()	    Menyimpan data KRS atau cuti
hapusData(index)	Menghapus data yang belum dikunci
simpanData(index)	Mengunci data agar tidak bisa diubah
updateMataKuliah()	Mengatur matkul berdasarkan semester
ref()	            Membuat data reaktif
v-if / v-else	    Menampilkan kondisi seperti data kosong atau tidak
router.push()	    Navigasi antar halaman