// event handler
const p3 = document.querySelector('.p3');

function ubahWarnap3() {
    // p3 berubah warna ketika diklik -> pake inline HTML, ditulis onclick pd HTML
    p3.style.backgroundColor = 'lightgreen';
}

function ubahWarnap2() {
    // p3 berubah warna ketika diklik -> pake inline HTML, ditulis onclick pd HTML
    p2.style.backgroundColor = 'green';
}
const p2 = document.querySelector('.p2');
// ubah p2 ketika di double click (onEvent) menggunakan event method
p2.ondblclick = ubahWarnap2;

// add event listener. Parameter:(action,eksekusi)
const p4 = document.querySelector('section#b p');
p4.addEventListener('mouseenter', function () {
    // tambahkan list baru ketika p4 diarahkan mouse
    const ul = document.querySelector('section#b ul');
    const newLi = document.createElement('li');
    const newText = document.createTextNode('item baru');
    newLi.appendChild(newText);
    ul.appendChild(newLi);
});

/*
perbedaannya
Event handler: hanya menjalankan event terakhir jika eksekusinya sama
add event listener: bisa semua event dgn eksekusi yg sama
*/