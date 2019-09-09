var buah = ['apel', 'jeruk', 'pisang', 'duren'];

// menggabungkan isi array
// method: join('separator') atau kosong dengan pemisah ','
buah.join(' ');

// push & pop : menambah/menghapus element akhir
buah.push('mangga', 'lemon'); // bisa tambah lebih dr satu
buah.pop(); // hanya 1 element terakhir yg dihapus

// unshift & shift: tambah/hapus elemen pertama
buah.unshift('melon');
buah.shift(); // hanya menghapus 1 element pertama

// slice: mengiris element tertentu
// method: slice(index_awal,index_akhir+1)
buah.slice(1, 3);

// splice: menimpa element index tertentu
// method: splice(index_tujuan,hapus_berapa_element_setelahnya,isi_element). bisa lebih dr 1
buah.splice(2, 0, 'tomat');

// foreach: looping khusus array
var orang = ['maman', 'wawan', 'jajang', 'dadang'];
orang.forEach(function (e, i) {
    console.log('Orang ke- ' + (i + 1) + ' adalah: ' + e);
})

// map: menampilkan isi element dlm array
var angka = [1, 3, 2, 5, 4, 3];
var angka2 = angka.map(function (e) {
    return e * 2;
});
console.log(angka2.join(' '));

// sortir isi array
angka.sort();
console.log(angka); // tampil dalam bentuk array

// apabila array mengandung puluhan, maka disort berdasarkan karakter
var angka3 = [1, 2, 32, 10, 5, 22, 100];
angka3.sort(function (a, b) {
    // agar urutannya sesuai
    return a - b;
});
console.log(angka3.join());

// filter. output berupa array
var angka4 = angka3.filter(function (x) {
    return x > 5;
});
console.log(angka4.join());

// find: mencari nilai pertama kali. Output berupa 1 nilai
var angka5 = angka.find(function (x) {
    return x > 3;
});
console.log(angka5);