var tanya = true;

// supaya permainan lanjut
while (tanya) {
    // menangkap pilihan player
    var p = prompt('pilih: gunting,kertas,batu').toLowerCase();
    // var p = masuk.toLowerCase;
    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.33) {
        comp = 'gunting';
    } else if (comp >= 0.33 && comp < 0.67) {
        comp = 'kertas';
    } else {
        comp = 'batu';
    }

    var hasil = '';
    // rules
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gunting') {
        if (comp = 'kertas') {
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        }
    } else if (p == 'kertas') {
        // ternary controll
        hasil = (comp == 'batu') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'batu') {
        // ternary controll
        hasil = (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'memasukkan pilihan yang salah!';
    }
    // hasil
    alert('Anda memilih : ' + p + '\nKomputer memilih: ' + comp + '\nHasilnya: Anda ' + hasil);

    tanya = confirm('Apakah Anda ingin coba lagi?');
}
// game selesai
alert('Terima kasih sudah bermain.');