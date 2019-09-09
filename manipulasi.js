const judul = document.getElementById('judul');
judul.innerHTML = '<em>Ajo Ojan</em>';
// manipulasi attribute
judul.setAttribute('name', 'ajo');
const a = document.querySelector('section#a a'); // ambil tag a dlm section id: a (spesifik)
// tambahkan atribut id di dalam link
a.setAttribute('id', 'link');

// manipulasi class. 
// jika pake setAttribute, nama class lama ketimpa
const p2 = document.querySelector('.p2');
// tambahkan class label di p2
p2.classList.add('label');

// node manipulation
// buat elemen baru
const newP = document.createElement('p');
const teksnya = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
newP.appendChild(teksnya);
// simpan newP di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(newP);

// bikin list baru
const newList = document.createElement('li');
const isiList = document.createTextNode('Item Baru');
newList.appendChild(isiList);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// simpan list baru sebelum list kedua
ul.insertBefore(newList, li2);

// hapus element link
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// ganti paragraf 4 jadi h2
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// bikin element h2 baru
const newH2 = document.createElement('h2');
const judulH2 = document.createTextNode('Judul Baru:');
newH2.appendChild(judulH2);
// ambil parentnya
sectionB.replaceChild(newH2, p4);

// highlights
newP.style.backgroundColor = 'lightgreen';
newList.style.backgroundColor = 'lightgreen';
newH2.style.backgroundColor = 'lightgreen';