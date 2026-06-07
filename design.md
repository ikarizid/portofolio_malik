# Blueprint & Konten Portofolio Interaktif: malik.dev

Dokumen ini berisi arsitektur interaksi, aset visual, teks, dan spesifikasi komponen Tailwind CSS yang wajib diimplementasikan untuk menyamai desain interaktif pada video referensi.

---

## 🎨 SPESIFIKASI VISUAL GLOBAL
* **Tema:** Dark Mode / Cyber Minimalist
* **Warna Utama:** Hitam Pekat (`bg-neutral-950`), Abu-abu Gelap (`bg-neutral-900`), Putih Murni (`text-white`), Accent Glowing Border (`border-neutral-800`).
* **Font Style:** Sans-serif tebal (Display font) untuk Heading, Sans-serif bersih/clean untuk Body text.

---

## 🔄 SEGMENT 1: SCREEN PRE-LOADER & WELCOME
*Kondisi awal ketika web dibuka pertama kali.*

### 🛠️ Perilaku Interaktif
* Layar hitam pekat 100% saat aset dimuat.
* Muncul ikon koding (`</>`), logo dunia (`🌐`), dan roda gigi (`⚙️`) kecil yang berputar halus di tengah.
* Teks **"Welcome"** muncul dengan efek *fade-in + scale up* menggunakan transisi lambat.
* Setelah 2 detik, layar otomatis melakukan *smooth scrolling* kebawah atau membuka halaman utama.

---

## 👤 SEGMENT 2: HERO SECTION (HOME PAGE)
*Halaman pertama setelah welcome screen.*

### 🛠️ Komponen & Perilaku Interaktif
* **Navigation Bar (Top Right):** Menu melayang tipis: `Home`, `About`, `Portfolio`, `Contact`. Saat di-hover, muncul lingkaran biru/putih kecil transparan di belakang teks.
* **Interactive ID Card Lanyard (Sisi Kanan):** * Sebuah kartu ID menggantung secara vertikal.
    * Di dalam kartu terdapat foto **Malik Al Azis** (Efek Hitam Putih / Grayscale beresolusi tinggi).
    * Terdapat teks vertikal `"ID CARD"` pada tali lanyard.
    * *Efek Fisika:* Kartu bergoyang halus (*swaying physics*) mengikuti gerakan kursor mouse (*hover reactive*).
* **Typography & Teks (Sisi Kiri):**
    * Badge kecil atas: `✨ AVAILABLE FOR WORK`
    * Heading Utama (Sangat Besar): **Frontend Developer**
    * Sub-heading: `Junior Pro` / `Fresh Graduate` (Bisa kamu ganti dengan `Educator & Founder`)
    * **Deskripsi Diri:**
        > "Menciptakan website modern dengan tampilan clean, responsif, dan elegan. Mengubah ide dan desain menjadi pengalaman digital yang menarik dan mudah digunakan."
    * **Tech Stack Pills:** Grid tombol kecil berisi teks *tech stack* utama: `Typescript`, `React.js`, `Tailwind`.
    * **CTA Teks Bawah:** * `👉 explore my work below`
        * `🔓 open to full-time & freelance opportunities`
    * **Scroll Indicator:** Teks miring `SCROLL 👇` di bagian paling bawah.

---

## 📖 SEGMENT 3: ABOUT ME PAGE
*Halaman transisi saat menu "About" diklik.*

### 🛠️ Komponen & Perilaku Interaktif
* **Heading Kiri:** `ABOUT ME` (Ukuran kecil, tipis).
* **Nama Besar (Tengah):** **Malik Muhammad Al Azis** (Gunakan nama lengkapmu).
* **Layout & Foto Bulat (Sisi Kanan):** Foto profil kasual berbentuk lingkaran sempurna yang dikelilingi garis border tipis yang bercahaya halus.
* **Deskripsi Profil (Sisi Kiri):**
    > "Mahasiswa Pendidikan Agama Islam (PAI) Semester 6 yang mendedikasikan diri di dunia pendidikan dan aktif bergerak di industri IT/Kreatif. Lahir pada 19 Februari 2006, mahir mengombinasikan nilai edukasi dengan pemrograman, desain grafis, dan otomatisasi."
* **Quotes / Tagline Bawah:**
    > *"Turning ideas into clean, modern, and meaningful digital experiences."*
* **Tombol Aksi Bawah:**
    * `[ Download CV ]` (Tombol outline putih)
    * `[ View Projects ↗ ]` (Tombol solid hitam-putih)

---

## 💼 SEGMENT 4: EXPERIENCE & BUSINESS PAGE
*Bagian ekstensi untuk menampilkan riwayat mengajar dan Ikariz.id Group.*

### 🛠️ Komponen & Perilaku Interaktif
* **Layout:** Menggunakan sistem kartu (*Grid Cards*) dengan efek border menyala ketika kursor mendekat (*Spotlight Hover Effect*).
* **Kategori 1: Academic Teaching (Mengajar)**
    * *Card 1:* Guru Informatika & Desain Grafis — MA Al Islam Bantur (Aktif)
    * *Card 2:* Guru Informatika — MTs Al Islam Bantur (Aktif)
    * *Card 3:* Guru Ekstra Komputer — MI Raudlatul Ulum Rejosari
* **Kategori 2: Business Founder (Ikariz.id Group)**
    * *Header:* **Ikariz.id Group** - *Academic & Digital Solutions Partner*
    * *Stats Grid (Angka Besar yang Berhitung Otomatis/Counter):*
        * `50+` Jurnal Terpublish (Sinta 4/5)
        * `6+` Skripsi Selesai
        * `200++` Tugas Terbantu
        * `100++` Desain Grafis
        * `20++` Custom Web/Coding

---

## 📂 SEGMENT 5: PORTFOLIO SHOWCASE PAGE
*Halaman showcase interaktif dengan sistem filter tab.*

### 🛠️ Komponen & Perilaku Interaktif
* **Main Header:** `Portfolio Showcase` (Sub-text: *Explore my journey through projects, certifications, and technical expertise.*)
* **Filter Tabs (Tengah):** Tiga tombol interaktif yang bisa diklik untuk menyaring konten secara *real-time*:
    * `[ Projects ]` (Aktif secara default)
    * `[ Certificates ]`
    * `[ Tech Stack ]`

#### 🟢 KONDISI TAB 1: PROJECTS
* Menampilkan deretan kartu projek kodingan dan desain. Saat salah satu kartu diklik, web akan melakukan transisi geser memutar yang halus (*card flip/slide*) untuk membuka halaman detail berikut:
    * **Nama Projek:** `Project Portofolio` / `Web Turnitin` / `Dashboard Rekap Bisnis` / `Bot Trading`
    * **Statistik Kecil:** `[ 3 ] Technologies Used` | `[ 3 ] Key Features`
    * **Teks Deskripsi Kiri:** Penjelasan detail mengenai fungsi aplikasi.
    * **Teks Kunci Kanan:** `Key Features: Website full minimalis, Keren dan Elegan, Fitur Lengkap.`
    * **Tombol Kembali:** `[ ← Back ]` di pojok kiri atas untuk kembali ke galeri utama.

#### 🔵 KONDISI TAB 2: CERTIFICATES
* Menampilkan galeri sertifikat resmi.
* *Aset Wajib:* Menampilkan **Sertifikat PKL / Kerja** (Contoh pada video: Sertifikat dari PT. Cakrawala Global Yaksa atas nama Malik Al Azis) dalam bentuk kartu gambar pop-up transparan (*lightbox effect*).

#### 🟡 KONDISI TAB 3: TECH STOCK
* Menampilkan grid ikon teknologi yang dikuasai dengan animasi mengambang (*floating animation*):
    * `HTML5`, `CSS3`, `Tailwind CSS`, `JavaScript`, `React.js`, `Laravel (PHP)`, `Python`, `MQL5`.
    * *Office Tools:* `Word`, `PowerPoint`, `Advanced Excel`.
    * *Design Tools:* `Canva`, `Photoshop`, `CorelDraw`, `Illustrator`, `Affinity`.

---

## ✉️ SEGMENT 6: CONTACT & GUESTBOOK PAGE
*Halaman akhir dari web portofolio.*

### 🛠️ Komponen & Perilaku Interaktif
* **Main Title:** `Contact Me` (Sub-text: *Have something in mind? Send a message and let's connect.*)
* **Two-Column Layout (Kiri: Formulir Kontak, Kanan: Buku Tamu)**

#### 📥 Sisi Kiri (Hubungi Saya / Form)
* Input Field minimalis tanpa background kotak, hanya garis bawah (*Underlined Input*):
    * `Your Name`
    * `Your Email`
    * `Your Message`
* Tombol Kirim: `[ Send Message 🚀 ]`
* **Social Media Grid (Bawah Form):** Tombol kotak dengan ikon media sosial yang responsif:
    * `LinkedIn` | `Instagram` | `GitHub` | `TikTok` | `YouTube`

#### 💬 Sisi Kanan (Comments / Guestbook)
* Fitur interaktif tempat orang bisa meninggalkan komentar langsung di web.
* Input Field: `Your Name`, `Your Comment`, dan tombol `[ 📎 Upload Image ]`.
* Tombol Aksi: `[ Post Comment ]`
* **List Komentar Terbawah:** Menampilkan daftar komentar penonton web yang sudah masuk secara real-time lengkap dengan avatar, nama, isi teks, ikon "Like (❤️)", dan badge `📌 PINNED` untuk komentarmu sendiri (Contoh teks: *"Terima kasih sudah mampir"* oleh Malik Muhammad A.).

---

## 🛠️ ARAHAN CODING & ANIMASI (FOR DEVELOPER)
1.  **Framer Motion:** Gunakan `<AnimatePresence>` untuk menangani efek keluar-masuk komponen saat berpindah dari halaman utama ke detail projek agar transisinya tidak kaku.
2.  **Tailwind Arbitrary Variants:** Gunakan utilitas `hover:[&_img]:scale-105` dan `transition-all duration-500` untuk menghasilkan gerakan sehalus sutra pada setiap komponen kartu dan gambar.
3.  **State Management:** Gunakan React `useState` untuk mengontrol posisi tab aktif (`projects`, `certificates`, `techStack`) pada komponen Portfolio Showcase.