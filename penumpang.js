var penumpang = [];
var kapasitas = 5;
var naik = function (nama, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(nama);
        // return isi array
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // isi bangku kosong terlebih dahulu
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tsb. 
                penumpang[i] = nama;
                return penumpang;
            }
            // penumpang dengan nama yg sama
            else if (penumpang[i] == nama) {
                // tampilkan pesan kesalahan
                console.log(nama + ' sudah di dalam angkot');
                return penumpang;
            }

            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tambahkan di akhir array
                penumpang.push(nama);
                return penumpang;
            }
            /*else if (i > kapasitas) {
                console.log('angkot penuh');
                return penumpang;
            }
            */
        };
    };
};

var turun = function (nama, penumpang) {
    // ketika angkot kosong
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong.');
    } else {
        for (i = 0; i < penumpang.length; i++) {
            // penumpang yg turun ada
            if (penumpang[i] == nama) {
                penumpang[i] = undefined;
            }
            // tidak ada penumpang di seluruh kursi
            else if (i == penumpang.length - 1) {
                console.log(nama + ' tidak ada di angkot.');
                return penumpang;
            }
        }
    }
    return penumpang;
}