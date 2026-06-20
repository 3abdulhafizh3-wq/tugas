let numUser = prompt("Masukkan Angka : ");
if (numUser > 0) {
  alert("angka ini positif");
} else if (numUser < 0) {
  alert("angka ini negatif");
} else {
  alert("angka ini nol");
}

// 2. Genap dan Ganjil

let genapGanjil = prompt("Masukkan Angka : ");
if (genapGanjil % 2 === 0) {
  alert("angka ini genap");
} else {
  alert("angka ini ganjil");
}

// 3. Lulus atau Tidak Lulus

let kelulusan = prompt("Masukkan Nilai : ");
if (kelulusan >= 75) {
  alert("Anda lulus");
} else {
  alert("Anda tidak lulus");
}

// 4. Hak memiliki SIM

let sim = prompt("Masukkan Umur anda: ");
if (sim >= 17) {
  alert("Anda boleh memiliki SIM");
} else {
  alert("Anda belum boleh memiliki SIM");
}

// 5. Bilangan Terbesar

let bil1 = prompt("Masukkan Bilangan : ");
let bil2 = prompt("Masukkan Bilangan : ");
if (bil1 > bil2) {
  alert("Bilangan Terbesar adalah : " + bil1);
} else {
  alert("Bilangan Terbesar adalah : " + bil2);
}

// 6. Bilangan Terbesar 3

let bill1 = prompt("Masukkan Bilangan : ");
let bill2 = prompt("Masukkan Bilangan : ");
let bil3 = prompt("Masukkan Bilangan : ");
if (bill1 > bil2 && bil3) {
  alert("Bilangan Terbesar adalah : " + bill1);
} else if (bill1 < bill2 && bil3) {
  alert("Bilangan terbesar adlah : " + bill2);
} else {
  alert("Bilangan Terbesar adalah : " + bil3);
}

// 7. Kategori umur

let umur = prompt("Masukan Umur Anda ; ");
if (umur <= 10) {
  alert("Termasuk Anak-anak");
} else if (umur <= 25) {
  alert("Termasuk Remaja");
} else if (umur <= 50) {
  alert("Termasuk Dewasa");
} else {
  alert("Termasuk Lansia");
}

// 8. Kalkulator Sederhana

let angka1 = prompt("Masukkan angka pertama:");
let operator = prompt("Masukkan operator (+, -, *, /, %):");
let angka2 = prompt("Masukkan angka kedua:");
let hasil;

switch (operator) {
  case "+":
    hasil = angka1 + angka2;
    break;

  case "-":
    hasil = angka1 - angka2;
    break;

  case "*":
    hasil = angka1 * angka2;
    break;

  case "/":
    hasil = angka1 / angka2;
    break;

  case "%":
    hasil = angka1 % angka2;
    break;

  default:
    alert("Operator tidak valid!");
}

alert("hasil : " + hasil);

// 9. Sistem Akses Admin

let usernamee = prompt("usernamee");
let passwordd = prompt("passwordd");
let role = prompt("role");

let inputUsername = "admin";
let inputPassword = "123";
let inputRole = "admin";

if (
  inputUsernamee === username &&
  inputPasswordd === password &&
  inputRole === role
) {
  alert("Login berhasil");
} else {
  alert("Login gagal");
}

// 10. Registrasi akun

let username = prompt("Masukkan username:");
let password = prompt("Masukkan password:");

if (username === "") {
  alert("Username tidak boleh kosong!");
} else if (password === "") {
  alert("Password tidak boleh kosong!");
} else if (!username.includes("@")) {
  alert("Password harus mengandung karakter @!");
} else if (password.length < 8) {
  alert("karakter kurang woi!");
} else {
  alert("Registrasi berhasil!");
}
