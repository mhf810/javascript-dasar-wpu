// tangkap tombol
const tombol = document.getElementById('tombol');
tombol.onclick = function () {
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

// bikin tombol via JS
const tombolAcak = document.createElement('button');
const ket = document.createTextNode('Acak Warna');
tombolAcak.appendChild(ket);
// tambahkan attribute tombolnya
tombolAcak.setAttribute('type', 'button');
tombol.after(tombolAcak);

// event
tombolAcak.addEventListener('click', function () {
    // random color
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

/*
// tangkap slider warna
const r = document.querySelector('input[name=merah]');

// event change terjadi setelah slidernya dilepas
sRed.addEventListener('change', function () {
    // ambil element input
    const r = merah.value;
    const g = ijo.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

Problem: Ulangi langkah tersebut untuk warna hijau & biru 
*/

// cara lebih efektif
// tangkap semua element input
const warna = document.querySelectorAll("input[type='range']");
// bikin listener utk setiap slider.
warna.forEach(function (slider) {
    slider.addEventListener("input", function () {
        const r = document.querySelector("input[name='merah']").value;
        const g = document.querySelector("input[name='ijo']").value;
        const b = document.querySelector("input[name='biru']").value;
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
});

// event ubah warna dengan kursor mouse
document.body.addEventListener('mousemove', function (event) {
    // menghitung pembulatan koordinat X & Y di browser x ukuran warna
    const koorX = Math.round(event.clientX / window.innerWidth * 255);
    const koorY = Math.round(event.clientY / window.innerHeight * 255);
    // warna biru diset
    // tambahkan style html & body dgn height 100%
    document.body.style.backgroundColor = 'rgb(' + koorX + ',' + koorY + ',100)';
});