// 1. Antrian Kantin

console.log("Nomor 1");
let antrian = ["Andi", "Budi", "Citra", "Dina"];
antrian.push("Eka");
antrian.unshift("Fajar");
antrian.shift();
antrian.pop();

console.log(antrian);
console.log(antrian.length);

// 2. Inventaris barang

console.log("Nomor 2");
let barang = ["Mouse", "Keyboard", "Monitor", "Printer"];
barang.splice(2, 1, "Laptop", "Scanner");

console.log(barang);

// 3. Mencari Posisi Siswa

console.log("Nomor 3");
let siswa = ["Aisyah", "Bagus", "Dewi", "Fikri", "Galih"];
console.log(siswa.indexOf("Dewi"));
console.log(siswa.indexOf("Rahma"));
console.log(siswa.includes("Galih"));
console.log(siswa.includes("Zidan"));

// 4. Potong data

console.log("Nomor 4");
let angka = [5, 10, 15, 20, 25, 30, 35, 40];
console.log(angka.slice(2, 6));

// 5. Data Pegawai Bermasalah

console.log("Nomor 5");
let pegawai = ["Anton", "Beni", "Caca", "Dedi", "Eka", "Farah"];
pegawai.splice(1, 1);
pegawai.splice(2, 1);
pegawai.splice(1, 0, "Dedi");
pegawai.splice(4, 1, "Gilang");
console.log(pegawai);

// 6. Tebak isi array

console.log("Nomor 6");
console.log(['Z', 'B', 'D']); // Akhir isi array
console.log(3); // Total panjang array

// 7. Sistem Login

console.log("Nomor 7");
let syaratMasuk = prompt("Masukan Divisi Anda");
let pengguna = ["admin", "operator", "kasir", "manager"];

if (pengguna.includes(syaratMasuk)){
    alert("User Ditemukan");
    alert("Index ke " + pengguna.indexOf(syaratMasuk));
} else{
   alert("User Tidak Ditemukan");
}

// 8. Operasi rahasia

console.log("Nomor 8")
let array = [10, 20, 30, 40, 50, 60]; 
array.unshift(5);
array.splice(3, 1, 35)
array.pop();

console.log(array);

// 9. Manipulasi Bertingkat

let namaKota = [ "Jakarta", "Bandung", "Surabaya", "Medan", "Makassar" ]; 
namaKota.splice(1, 1);
namaKota.splice(2, 0, "Yogyakarta");
namaKota.unshift("Bali")
namaKota.pop();

console.log(namaKota);
console.log(namaKota.length);
console.log(namaKota.indexOf("Yogyakarta"));

// 10. Tantangan akhir

console.log("Nomor 10")
let data = [ "merah", "biru", "hijau", "kuning", "ungu", "hitam" ];
data.unshift("putih");
data.splice(2, 1);
data.splice(3, 0, "oranye");
data.pop();

console.log(data);