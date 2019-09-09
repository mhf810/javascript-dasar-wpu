/*
// event handling
const hapus = document.querySelector('.close');
const card = document.querySelector('.card');

// hilangkan card ketika tombol x diklik
hapus.addEventListener('click', function () {
    card.style.display = 'none';
})
*/

// DOM Traversal

// const tutup = document.querySelectorAll('.close');
// ambil masing2 tombol 
/* Pake for loop
for (let i = 0; i < tutup.length; i++) {
    tutup[i].addEventListener('click', function (e) {
        // card[i].style.display = 'none';

        // cari parent dr card, lalu hilangkan
        // tutup[i].parentElement.style.display = 'none';
        // e adalah parameter event yg terjadi
        // ambil target dr e
        e.target.parentElement.style.display = 'none';
    })
};
*/


/*
// cara lebih efektif
tutup.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        // hentikan event default. Terutama jika menggunakan a href
        e.preventDefault();
        // cegah event card dijalankan
        e.stopPropagation();
    });
});
*/


/*
// event ketika card diklik -> event bubbling
const kartu = document.querySelectorAll('.card');
kartu.forEach(function (card) {
    card.addEventListener('click', function () {
        alert('sip');
    });
});
*/

// cara lebih efektif utk Event bubbling.
// event dimulai dr container, bukan dr close/card
const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    // jika tombol x diklik
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});

// traversal method --> analogi silsilah keluarga
const nama = document.querySelector('.nama');
// tampilkan parent dr nama -> .card
console.log(nama.parentNode);
console.log(nama.parentElement.parentElement); // class container
// utk kasus parent, element & node hasilnya sama

// siblings
console.log(nama.nextSibling); // mengeluarkan enter, kecuali jika enternya dihapus
console.log(nama.previousElementSibling); // img
console.log(nama.nextElementSibling.nextElementSibling); // class close, jika mentok menghasilkan null