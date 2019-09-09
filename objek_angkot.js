function Angkot(sopir, trayek, penumpang, ongkos) {
    // properties
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.ongkos = ongkos;

    // method utk penumpang
    this.naik = function (nama) {
        this.penumpang.push(nama);
        return this.penumpang;
    }

    this.turun = function (nama, bayar) {
        // jika angkot kosong
        if (this.penumpang.length == 0) {
            alert('angkot masih kosong.');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == nama) {
                this.penumpang[i] = undefined;
                this.ongkos += bayar;
                return this.penumpang;
            }
        }
    }
}

// instansiasi
var angkot1 = new Angkot('Ajo', ['Siteba', 'Pasar Raya'], [], 0);
var angkot2 = new Angkot('Ujang', ['Gaduik', 'Pasar Raya'], [], 0);