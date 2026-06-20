// Soal Nomor 1
console.log("Soal nomor 1");
for (number = 1; number <= 10; number++){
    console.log("Hitungan ke : " + number);
}

// Soal Nomor 2
console.log("Soal nomor 2");
for (number = 10; number >= 1; number--){
    console.log("Hitungan ke : " + number);
}

// Soal Noomor 3
console.log("Soal nomor 3");
for (number = 1; number <= 20; number++){
    if(number % 2 !== 0){
    continue
}
    console.log(number);
}

// Soal Nomor 4
console.log("Soal nomor 4");
for (number = 1; number <= 20; number++){
    if(number % 2 === 0){
    continue
}
    console.log(number);
}

// Soal Nomor 5
console.log("Soal nomor 5");
for (let number = 1; number <= 10; number++){
    console.log(`5 * ${number} = ${5 * number}`);
}

// Soal Nomor 6
console.log("Soal nomor 6");
let hasil = 0;
for (let sum = 1; sum <= 50; sum++){
    hasil += sum;
}
console.log(hasil);

// Soal nomor 7
console.log("Soal nomor 7");
for (let n = 1; n <= 10; n++) {
    console.log(`${n} x ${n} = ${n * n}`);
}

// Soal nommor 8
console.log("Soal nomor 8");
let result = "";
for (let i = 1; i <= 10; i++) {
    result += "*";
}

console.log(result);

// Soal nomor 9
console.log("Soal nomor 9");
for (let i = 100; i >= 0; i--) {
    if (i % 10 === 0) {
        console.log(i);
    }
}

// Soal nomor 10
console.log("Soal nomor 10");
for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " = Genap");
    } else {
        console.log(i + " = Ganjil");
    }
}

// Soal nomor 11
console.log("Soal nomor 11");
let makanan = ["Nasi Goreng", "Sate", "Bakso", "Rendang", "Gado-Gado"];
for (let i = 0; i < makanan.length; i++) {
    console.log(makanan[i]);
}

// Soal nomor 12
console.log("Soal nomor 12");
let nilai = [12, 45, 7, 23, 89, 34];
let terbesar = nilai[0];
for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] > terbesar) {
        terbesar = nilai[i];
    }
}
console.log("Angka terbesar:", terbesar);

// Soal nomor 13
console.log("Soal nomor 13");
let skor = [55, 19, 82, 8, 43, 26];
let terkecil = skor[0];
for (let i = 1; i < skor.length; i++) {
    if (skor[i] < terkecil) {
        terkecil = skor[i];
    }
}
console.log("Angka terkecil:", terkecil);

// Soal nomor 14
console.log("Soal nomor 14");
let kumpulanAngka = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < kumpulanAngka.length; i++) {
    total += kumpulanAngka[i];
}
let rataRata = total / kumpulanAngka.length;
console.log("Rata-rata:", rataRata);

// Soal nomor 15
console.log("Soal nomor 15");
let acak = [7, 2, 9, 7, 5, 7, 1, 3, 7];
let jumlah = 0;
for (let i = 0; i < acak.length; i++) {
    if (acak[i] === 7) {
        jumlah++;
    }
}
console.log("Angka 7 muncul sebanyak", jumlah, "kali");

// Soal nomor 16
console.log("Soal nomor 16");
let huruf = ["A", "B", "C", "D", "E"];
for (let i = huruf.length - 1; i >= 0; i--) {
    console.log(huruf[i]);
}

// Soal nomor 17
console.log("Soal nomor 17");
let arrayLama = [100, 200, 300, 400];
let arrayBaru = [];
for (let i = 0; i < arrayLama.length; i++) {
    arrayBaru.push(arrayLama[i]);
}
console.log(arrayBaru);

// Soal nomor 18
console.log("Soal nomor 18");
let data = [4, 15, 8, 23, 2, 11, 9, 18];
for (let i = 0; i < data.length; i++) {
    if (data[i] > 10) {
        console.log(data[i]);
    }
}

// Soal nomor 19
console.log("Soal nomor 19");
let harga = [10000, 25000, 50000, 12000];
for (let i = 0; i < harga.length; i++) {
    let hargaBaru = harga[i] * 1.1;
    console.log(hargaBaru);
}

// Soal nomor 20
console.log("Soal nomor 20");
let buah = ["Jeruk", "Mangga", "Apel", "Pisang", "Anggur"];
for (let i = 0; i < buah.length; i++) {
    if (buah[i] === "Apel") {
        console.log("Ketemu!");
    }
}
