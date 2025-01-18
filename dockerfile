FROM node:latest

# Salin semua file ke dalam container di folder /app
COPY . /app

# Pindah ke direktori kerja /app
WORKDIR /app

# Jalankan aplikasi menggunakan Node.js
CMD ["node", "app.js"]

# Ekspos port 3000
EXPOSE 3000
