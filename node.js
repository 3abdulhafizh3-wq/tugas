console.log('soal 1');
let nilaiAngka = 75;        //let number= tidak bisa menggunakan teks
let nilaiString = "75";     //let string="" kalo teks di letakkan di dalam petik baru bisa
let nilaiBoolean = false;   //let boolean= nilainya cuma ada 2 true dan false

// Menampilkan tipe data masing-masing menggunakan typeof
console.log(typeof nilaiAngka);   // Output: number
console.log(typeof nilaiString);  // Output: string
console.log(typeof nilaiBoolean); // Output: boolean

console.log('soal 2');
let a = 10;            //let ini adalah number
let b = "5";           //let ini adalah string
console.log(a + b);    //apabila a=10 dan b=5 jika dalam mtk di tambah hasilnya akan 15 tapi karna outputnya yg berbeda maka a dan b akan digabung dan hasilnya 105

console.log('soal 3');
let x = 10;                             //penjelasan singkat kode mtk di js
let y = 5;                              //+ : tambah, - : kurang, * : kali, / : bagi, % : modulus(sisa pembagian), = : hasil/samadengan
let z = 3;
console.log(x + z - y * z / z - y);

console.log('soal 4')
let r = 8;
    r += 4;
    r *= 2;
    r -= 6;
console.log(r);

console.log('soal 5')
// Ganti nilai ini untuk menguji angka yang berbeda
let angka = 10; 

if (angka === 0) {
    console.log("Angka adalah nol (netral)");
} else if (angka % 2 === 0) {
    // Memeriksa jika bilangan genap
    if (angka > 0) {
        console.log(angka + "Genap Positif");
    } else {
        console.log(angka + "Genap Negatif");
    }
} else {
    // Jika tidak bisa dibagi 2, berarti bilangan ganjil
    if (angka > 0) {
        console.log(angka + "Ganjil Positif");
    } else {
        console.log(angka + "Ganjil Negatif");
    }
}

console.log('soal 6')
// Variabel yang diberikan pada soal
let nilai = 90;

// Sistem penilaian menggunakan kondisi if-else
if (nilai >= 85) {                              //kondisi awal hanya pakai if
    console.log("Kategori: A");                 //klo tdk cocok dengan yg if awal maka pakai else klo hanya 2 kemungkinan
} else if (nilai >= 75) {                       //pakai else if untuk kemungkinan di atas 3
    console.log("Kategori: B");
} else if (nilai >= 65) {
    console.log("Kategori: C");
} else if (nilai >= 50) {
    console.log("Kategori: D");
} else {
    console.log("Kategori: E");
}

console.log('soal 7')
// Menginput tiga buah angka ke dalam variabel berbeda
let angka1 = 45;
let angka2 = 82;
let angka3 = 67;

let terbesar;

// Logika perbandingan untuk mencari nilai terbesar
if (angka1 >= angka2 && angka1 >= angka3) {             //kondisi pertama   //hanya if yang bisa pakai ()
    terbesar = angka1;
} else if (angka2 >= angka1 && angka2 >= angka3) {      //kondisi ke 2
    terbesar = angka2;
} else {
    terbesar = angka3;                                  //kondisi ke 3
}
console.log(terbesar);

console.log('soal 8')
let A = 5;
let B = 10;
let C = (A > 3 && B < 15)  || A  === 8;
console.log(C);

console.log('soal 9')
// Ganti nilai variabel ini untuk menguji tahun yang berbeda
let tahun = 1992; 

// Logika aturan tahun kabisat
if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    console.log(tahun + " adalah Tahun Kabisat");
} else {
    console.log(tahun + " BUKAN Tahun Kabisat");
}

console.log('soal 10')
for (let i = 1; i <= 50; i++) {
    
    // Kondisi 1: Memeriksa apakah angka merupakan kelipatan 3 DAN 5 sekaligus
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");                                                      //setiap ada kelipatan 3 dan 5 seangka maka di pakai fizzbuzz
    } 
    // Kondisi 2: Memeriksa apakah angka merupakan kelipatan 3 saja
    else if (i % 3 === 0) {
        console.log("Fizz");                                                          //setiap kelipatan 3 akan di ganti menjadi fizz
    } 
    // Kondisi 3: Memeriksa apakah angka merupakan kelipatan 5 saja
    else if (i % 5 === 0) {
        console.log("Buzz");                                                          //setiap kelipatan 5 akan di ganti menjadi buzz
    } 
    // Kondisi 4: Jika bukan kelipatan keduanya, tampilkan angka aslinya
    else {
        console.log(i);                                                               //dan klo gk ada angka kelipatan di angka tersebut maka dia akan berwujud angka biasa
    }
}

console.log('soal 11')
let s = 4;             
let d = ++s + s++;     //d=4 + 6 //1+4=5 + hasil akhir dari  s mengikuti hasil 1+4, 5+1=6, karna yg utama tadi akan kembali ke posisi semula menjadi 4 dan d=4+6
console.log(d);

console.log('soal 12')

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) { 
        console.log(i);
    }
}

console.log('soal 13')
let bintang = "";               //dikosongin karna tidak diperlukan klo diisi maka jawabannya ???*

for (let i = 1; i <= 5; i++) {
    bintang +="*";
console.log(bintang)
}

console.log('soal 14')
let ANGKA = [12, 5, 18, 7, 21, 30, 2];

let TOTAL = 0;

for (let i = 0; i < ANGKA.length; i++) {
    if (ANGKA[i] > 10) {                    //I akan mencari angka yg lebih besar dari 10
        TOTAL += ANGKA[i];                  // 0 + 81 =
    }
}
console.log(TOTAL);                         //jikalau consol di letak dalam {} maka jawabannya akan berurutan dari 12-81

console.log('soal 15')
function apakahPrima(angka) {
    if (angka < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            return false; 
        }
    }
    return true; // Jika tidak ada pembagi yang cocok, berarti prima
}

console.log("Bilangan prima dari 1 sampai 100 adalah:");        //bilangan prima hanya bisa di bagi dengan angka 1 dan angka itu sendiri tetapi tidak bisa di bagi dengan angka lain (2-9)
for (let i = 1; i <= 100; i++) {
    if (apakahPrima(i)) {
        console.log(i);
    }
}

console.log('soal 16')
let j = 2;
let k = 3;
let l = 4;
if (j < k) {
 if (k > l) {
 console.log("J");
 } else {
 console.log("K");
 }
} else {
 console.log("L");
}

console.log('soal 17')
let username = "andi123";
let password = "rahasia99";

let inputUsername = "andi123";
let inputPassword = "rahasia99";

// Login berhasil jika username DAN password sama-sama benar
let loginBerhasil = inputUsername === username && inputPassword === password;
console.log("Login berhasil:", loginBerhasil); 

// Akun terkunci jika username benar TAPI password salah
let akunTerkunci = inputUsername === username && inputPassword !== password;
console.log("Akun terkunci :", akunTerkunci); 

//belum login
let belumLogin = !loginBerhasil;
console.log("Belum login   :", belumLogin); 

//Menampilkan pesan berbeda sesuai kondisi
if (loginBerhasil) {
  console.log("Login sukses! Selamat datang, " + username + " 👋");
} else if (akunTerkunci) {
  console.log("Password salah! Akun sementara terkunci.");
} else if (inputUsername !== username) {
  console.log("Username tidak ditemukan.");
} else {
  console.log("Username atau password salah, silakan coba lagi.");
}

console.log('soal 18')
let bulan = 120;

switch (bulan) {                                            //apabila case pertama tidak ada maka akan di break dan di lanjut ke case ke bawah dan berakhir di default
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Bulan ini memiliki 30 hari.");
    break;
  case 2:
  case 8:
  case 10:
    console.log("Bulan ini memiliki 28 atau 29 hari.");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 12:
     console.log("bulan ini memiliki 31 hari.");
     break;
  default:
    console.log("bulan tidak diketahui.");
}

console.log('soal 19')
let ang = 1;

for (let i = 0; i < 7; i++) {           //knp cuma sampai 64 dan gk lebih, karena ada angka 7 yg jadi batasnya jadi cuman 7 kali kelipatan
  console.log(ang);
  ang = ang * 2;
}

console.log('soal 20')
let total = 0;
for (let i = 1; i <= 10; i++) {
 if (i % 2 === 0) {
 total += i;
 } else {
 total -= i;
 }
}
console.log(total);
