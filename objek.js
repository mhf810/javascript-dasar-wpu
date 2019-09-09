// membuat objek
// 1. Object Literal (simple)
// Problem: tidak efektif utk object yg banyak
var mhs = {
    nama: 'Budi Warman',
    umur: 20,
    nim: '123456',
    jurusan: 'Sipil',
    energi: 10,
    // method
    makan: function (porsi) {
        this.energi += porsi;
        // cara menampilkan string tanpa concate : pakai ` `
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

/* nama,umur,.. : atribut/index. Isinya properti. Function dlm object: method
 cara panggil: mhs()
 cara memanggil nama: mhs.nama atau mhs[nama]
*/




// 2. Function Declaration
// Problem: mungkin membuat 2 object berbeda yg saling berhubungan jika method dibuat object terpisah
function objekMhs(nama, umur, nim, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.nim = nim;
    mhs.jurusan = jurusan;
    return mhs;
}

// buat objek mahasiswa
var mhs2 = objekMhs('Arman', 22, '345667', 'Informatika');





// 3. Object.create();
// Problem: perlu kelola 2 object yg berhubungan
// object literal untuk method, agar disimpan 1x di memori
const metode = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Main!`);
    }
};

// object utama
function Aktivitas(nama, energi) {
    // gunakan let sebagai pengganti var, agar menghindari manipulasi nilai variabel
    // let aktivitas = {};

    // ambil dr object sebelumnya sbg parameter (inheritance)
    let aktivitas = Object.create(metode);
    aktivitas.nama = nama;
    aktivitas.energi = energi;

    /* jika diawali dgn method kosong, semua method harus didaftarkan
    aktivitas.makan = metode,makan;
    aktivitas.main = metode,main;
    */

    return aktivitas;
}

let ajo = Aktivitas('ajo', 10);
let budi = Aktivitas('Budi Warman', 20);



// 4. Constructor. Nama function capitalyze, memakai keyword 'this'
function Mahasiswa(nama, umur, nim, jurusan) {
    this.nama = nama;
    this.umur = umur;
    this.nim = nim;
    this.jurusan = jurusan;
}

// buat objeknya. menggunakan keyword 'new'
var mhs3 = new Mahasiswa('Budi', 19, '345223', 'Matematika');

/*
keyword this: method global/window
ketika diketik console.log(this)
1. literal: mengembalikan object ybs
2. funct decl : mengembalikan variabel global
3. constructor: mengembalikan object baru
*/

// 5. prototype

function Tugas(name, energy) {
    this.name = name;
    this.energy = energy;
}

// methodnya disimpan dlm __proto__
Tugas.prototype.eat = function (piring) {
    this.energy += piring;
    return `Si ${this.name} makan ${piring} porsi `;
}

Tugas.prototype.gym = function (hour) {
    this.energy -= piring * 2;
    return `Si ${this.name} molahraga selama ${hour} jam `;
}

let orang = new Tugas('ari', 25);

// 6. OOP Javascript : prototype inheritance, bentuk lain object 5
class Olahraga {
    // properties
    constructor(orang, kalori) {
        this.orang = orang;
        this.kalori = kalori;
    }
    // methods
    senam(jam) {
        this.kalori += jam;
        return `${this.name} sedang senam selama ${jam} jam `;
    }

    lari(round) {
        this.kalori *= round;
        return `${this.orang} lari ${round} keliling`;
    }
}

let Arman = new Olahraga('Arman', 20);