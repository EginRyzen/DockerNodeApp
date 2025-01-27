# REST API CRUD dengan Node.js, Express, dan PostgreSQL

## Deskripsi

Proyek ini adalah aplikasi REST API CRUD (Create, Read, Update, Delete) yang dibangun menggunakan Node.js dan Express. Aplikasi ini terhubung ke database PostgreSQL dan dijalankan dalam kontainer Docker. API ini memungkinkan pengguna untuk mengelola data (misalnya, album musik) dengan operasi dasar.

## Fitur

- **Create**: Menambahkan data baru ke database.
- **Read**: Mengambil data dari database.
- **Update**: Memperbarui data yang ada di database.
- **Delete**: Menghapus data dari database.

## Teknologi yang Digunakan

- **Node.js**: Runtime JavaScript untuk membangun aplikasi server.
- **Express**: Framework web untuk Node.js yang memudahkan pengembangan API.
- **PostgreSQL**: Sistem manajemen basis data relasional.
- **Docker**: Platform untuk mengembangkan, mengirim, dan menjalankan aplikasi dalam kontainer.

## Prasyarat

Semua program dalam proyek ini diinstal dan dijalankan di dalam kontainer Docker. Pastikan Anda telah menginstal:

- [Docker](https://www.docker.com/): Platform untuk mengembangkan, mengirim, dan menjalankan aplikasi dalam kontainer.
- [Docker Compose](https://docs.docker.com/compose/): Alat untuk mendefinisikan dan menjalankan aplikasi multi-kontainer dengan menggunakan file YAML.

Dengan menggunakan Docker, Anda tidak perlu menginstal Node.js atau PostgreSQL secara langsung di mesin Anda, karena semua dependensi akan dikelola di dalam kontainer.

## Cara Mengkloning dan Menjalankan Proyek

1. **Clone Repositori**
   Buka terminal dan jalankan perintah berikut untuk mengkloning repositori:

   ```bash
   git clone https://github.com/username/repo-name.git
   ```
