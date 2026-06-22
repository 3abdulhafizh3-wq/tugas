console.log("soal 1"); //-----------------------------------------------------------------------------------------------------------------

let angka = [
  10, 5, 20, 24, 55, 8, 90, 75, 33, 4, 31, 54, 66, 11, 22, 10, 37, 76, 44, 43,
  67,
];
let total = 0;

for (let i = 0; i < angka.length; i++) {
  if (i % 2 !== 0) {
    if (angka[i] % 2 === 0) {
      total += angka[i];
    }
  }
}
console.log(total);

console.log("soal 2"); //-------------------------------------------------------------------------------------------------------------------

let data = [12, 5, 18, 5, 7, 12, 20, 18, 25];
let hapus = data.slice(3);

console.log(data.slice(3));

console.log("soal 3"); //-------------------------------------------------------------------------------------------------------------------

let dataa = [12, 5, 18, 5, 7, 12, 20, 18, 25];
let terbalik = [];

for (let i = dataa.length - 1; i >= 0; i--) {
  terbalik.push(dataa[i]);
}
console.log("asli", dataa);
console.log("di balik", terbalik);

console.log("soal 4"); //--------------------------------------------------------------------------------------------------------------------

let nilai = [75, 90, 45, 88, 60, 92, 77];
let Total = 0;
let hasil = 0;

for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] > 70) {
    Total += nilai[i];
    hasil++;
  }
}
let rata = Total / hasil;
console.log(rata);

console.log("soal 5"); //-------------------------------------------------------------------------------------------------------------------

let Angka = [75, 90, 45, 88, 60, 92, 77];
let gede = Angka[0];
let gedeDua = 0;

for (let i = 0; i < Angka.length; i++) {
  let kini = Angka[i];

  if (kini > gede) {
    gedeDua = gede;
    gede = kini;
  } else if (kini > gedeDua) {
    gedeDua = kini;
  }
}
console.log(gede);
console.log(gedeDua);

console.log("soal 6"); //----------------------------------------------------------------------------------------------------------------------

let kata = ["javascript", "html", "css", "react", "nodejs"];
let kataHapus = kata.splice(1, 1);
let kataHApus = kata.splice(1, 1);
let kataHAPus = kata.splice(1, 1);

console.log(kata);

console.log("soal 7"); //------------------------------------------------------------------------------------------------------------------

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function sumPrimesInArray(arr) {
  return arr.reduce((sum, current) => {
    if (isPrime(current)) {
      return sum + current;
    }
    return sum;
  }, 0);
}
const kumpulanAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const totalPrima = sumPrimesInArray(kumpulanAngka);

console.log(totalPrima);

console.log("soal 8"); //------------------------------------------------------------------------------------------------------------------

function getIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersection = arr2.filter((element) => set1.has(element));

  return [...new Set(intersection)];
}
const arrayA = [1, 2, 2, 3, 4, 5];
const arrayB = [2, 4, 6, 8, 2];

const hasilIrisan = getIntersection(arrayA, arrayB);

console.log(hasilIrisan);

console.log("soal 9"); //-------------------------------------------------------------------------------------------------------------------

function hitungKarakter(str) {
  let objekHasil = {};

  for (let i = 0; i < str.length; i++) {
    let karakter = str[i];

    if (objekHasil[karakter]) {
      objekHasil[karakter] += 1;
    } else {
      objekHasil[karakter] = 1;
    }
  }

  return objekHasil;
}
console.log(hitungKarakter("hallo"));

console.log("soal 10"); //------------------------------------------------------------------------------------------------------------------

let angka3 = [5, 2, 9, 1, 7, 10, 8, 6, 3, 4];
// Perulangan luar untuk memastikan pengecekan dilakukan berulang kali
for (let i = 0; i < angka3.length; i++) {
  // Perulangan dalam untuk membandingkan angka yang bersebelahan
  for (let j = 0; j < angka3.length - 1; j++) {
    // Logika utama: Jika angka di kiri (j) lebih kecil dari angka di kanan (j+1)
    if (angka3[j] < angka3[j + 1]) {
      // Maka tukar posisi (SWAP)
      let temp = angka3[j]; // Simpan sementara angka kiri
      angka3[j] = angka3[j + 1]; // Geser angka kanan ke kiri
      angka3[j + 1] = temp; // Pindahkan angka kiri ke kanan
    }
  }
}
console.log(angka3);

console.log("soal 11"); //-----------------------------------------------------------------------------------------------------------------------

const student = {
  name: "Ahmad",
  age: 17,
  scores: [80, 75, 90, 88],

  hitungRataRata: function () {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      total += this.scores[i];
    }
    return total / this.scores.length;
  },
};
console.log(student.hitungRataRata());

console.log("soal 12"); //---------------------------------------------------------------------------------------------------------------------

const rekeningBank = {
  // Properti saldo awal
  saldo: 500000,

  // Method untuk menabung
  menabung: function (jumlah) {
    this.saldo += jumlah;
    console.log(
      `Berhasil menabung: Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`,
    );
  },

  // Method untuk menarik uang
  menarikUang: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log(
        `Gagal menarik uang! Saldo kamu gak cukup (Saldo saat ini: Rp${this.saldo})`,
      );
    } else {
      this.saldo -= jumlah;
      console.log(
        `Berhasil menarik: Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`,
      );
    }
  },

  // Method untuk melihat saldo
  melihatSaldo: function () {
    console.log(`Saldo terkini kamu adalah: Rp${this.saldo}`);
  },
};
rekeningBank.melihatSaldo();
rekeningBank.menabung(200000);
rekeningBank.menarikUang(100000);
rekeningBank.menarikUang(800000);

console.log("soal 13"); //-----------------------------------------------------------------------------------------------------------------

function cariNilaiTertinggi(daftarSiswa) {
  let siswaTerbaik = daftarSiswa[0];

  for (let i = 1; i < daftarSiswa.length; i++) {
    if (daftarSiswa[i].score > siswaTerbaik.score) {
      siswaTerbaik = daftarSiswa[i];
    }
  }
  return siswaTerbaik.name;
}
const dataSiswa = [
  { name: "Andi", score: 75 },
  { name: "Budi", score: 90 },
  { name: "Citra", score: 82 },
];

console.log(cariNilaiTertinggi(dataSiswa));

console.log("soal 14"); //------------------------------------------------------------------------------------------------------------------

const product = {
  id: 1,
  name: "Laptop",
  price: 12000000,
  stock: 5,
};

// Mengubah object menjadi array pasangan key-value
const productArray = Object.entries(product);

// Menampilkan hasil
console.log(productArray);

console.log("soal 16"); //------------------------------------------------------------------------------------------------------------------

const students = [
  { name: "Ali", major: "TI" },
  { name: "Budi", major: "SI" },
  { name: "Citra", major: "TI" },
  { name: "Dina", major: "MI" },
  { name: "Eko", major: "TI" },
];

function groupByMajor(data) {
  return data.reduce((result, student) => {
    // Jika jurusan belum ada di object result, buat array kosong terlebih dahulu
    if (!result[student.major]) {
      result[student.major] = [];
    }
    // Masukkan data mahasiswa ke jurusan yang sesuai
    result[student.major].push({ name: student.name, major: student.major });

    return result;
  }, {}); // {} adalah nilai awal (initial value) berupa object kosong
}

// Memanggil fungsi
const groupedStudents = groupByMajor(students);
console.log(JSON.stringify(groupedStudents, null, 2));

console.log("soal 17"); //-----------------------------------------------------------------------------------------------------------------

const Ddata = {
  a: 10,
  b: {
    c: 20,
    d: {
      e: 30,
    },
  },
  f: 5,
};

function sumNumericValues(obj) {
  let totalL = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Jika nilainya adalah object dan bukan null, lakukan rekursi
      if (typeof value === "object" && value !== null) {
        totalL += sumNumericValues(value);
      }
      // Jika nilainya adalah angka (number), tambahkan ke total
      else if (typeof value === "number") {
        totalL += value;
      }
    }
  }

  return total;
}

// Memanggil fungsi
const result = sumNumericValues(data);
console.log("Total nilai numerik:", result);

console.log("saol 18"); //-------------------------------------------------------------------------------------------------------------------

let transaksi = [
  { type: "income", amount: 500000 },
  { type: "expense", amount: 200000 },
  { type: "income", amount: 300000 },
  { type: "expense", amount: 100000 },
];

// Menghitung saldo akhir dengan reduce
const saldoAkhir = transaksi.reduce((saldo, item) => {
  if (item.type === "income") {
    return saldo + item.amount;
  } else if (item.type === "expense") {
    return saldo - item.amount;
  }
  return saldo;
}, 0); // 0 adalah saldo awal

console.log("Saldo Akhir:", saldoAkhir);

console.log("soal 19"); //------------------------------------------------------------------------------------------------------------------

const inventaris = {
  items: [
    { id: 1, name: "Laptop", stock: 10, price: 12000000 },
    { id: 2, name: "Mouse Wireless", stock: 25, price: 150000 },
  ],

  // 1. Menambah barang
  tambahBarang: function (id, name, stock, price) {
    this.items.push({ id, name, stock, price });
    console.log("Berhasil menambahkan barang: " + name);
  },

  // 2. Menghapus barang berdasarkan ID
  hapusBarang: function (id) {
    this.items = this.items.filter((item) => item.id !== id);
    console.log("Berhasil menghapus barang dengan ID: " + id);
  },

  // 3. Mencari barang berdasarkan nama
  cariBarang: function (namaDicari) {
    console.log("Hasil pencarian untuk " + namaDicari + ":");
    this.items.forEach((item) => {
      if (item.name.toLowerCase().includes(namaDicari.toLowerCase())) {
        console.log(
          "Nama: " +
            item.name +
            ", Stok: " +
            item.stock +
            ", Harga: " +
            item.price,
        );
      }
    });
  },

  // 4. Menampilkan seluruh barang
  tampilkanSemua: function () {
    console.log("Daftar seluruh barang:");
    this.items.forEach((item, i) => {
      console.log(
        i +
          1 +
          ". " +
          item.name +
          ", Stok: " +
          item.stock +
          ", Harga: " +
          item.price,
      );
    });
  },
};

// --- UJI COBA KODE ---
inventaris.tampilkanSemua();
inventaris.tambahBarang(3, "Keyboard", 15, 600000);
inventaris.cariBarang("laptop");
inventaris.hapusBarang(2);
inventaris.tampilkanSemua();