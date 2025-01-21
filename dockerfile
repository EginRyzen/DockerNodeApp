# Menggunakan image node yang sudah ada
FROM node:16

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam container
COPY . .

# Menjalankan aplikasi dengan perintah npm run dev
CMD ["npm", "run", "dev"]
