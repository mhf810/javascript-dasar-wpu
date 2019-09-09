// setTimeout
// function utk waktu tunggu eksekusi program
// parameter: action,time dlm ms
const tes = setTimeout(function () {
    alert('ok');
}, 5000)

// menghentikan timing
const setop = document.getElementById('setop');
setop.addEventListener('click', function () {
    clearTimeout(tes);
    alert('Selesai');
});

// setInterval
// utk event yg dilakukan berulang-ulang dlm waktu tertentu
const uji = setInterval(function () {
    console.log('ok');
}, 2000);

const henti = document.getElementById('henti');
henti.addEventListener('click', function () {
    clearInterval(uji);
    console.log('Selesai');
});



// program countdown
// getTime : mengembalikan milisecond
const deadline = new Date('Sep 8,2019 21:40:09').getTime();

// agar countdownya berjalan tiap detik
const countdown = setInterval(function () {

    const today = new Date().getTime();
    const delta = deadline - today;
    const hari = Math.floor(delta / (1000 * 60 * 60 * 24));
    const jam = Math.floor(delta % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(delta % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(delta % (1000 * 60) / 1000);

    // tampilkan countdown dalam teks
    const teks = document.getElementById('judul');
    teks.innerHTML = 'Waktu Anda tinggal ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi';

    // hentikan countdown jika waktunya sudah habis/deadline
    if (delta == 0) {
        clearInterval(countdown);
        teks.innerHTML = 'Waktu Anda Sudah Habis!';
    }
}, 1000);