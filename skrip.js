// DOM Selection
// document.getElementById(): JS carikan element yg ber-ID apa di dlm document
// mengembalikan element
const judul = document.getElementById('judul');
// styling by JS : variabel_selector.style.style_css 
// ubah tulisan judul berwarna merah
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Selamat Datang';

// selector tag name -> HTML Collections (dalam array)
const p = document.getElementsByTagName('p');
// pargraf 3 (index ke-2) dikasih background color
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

// jika hanya 1 index yg dipakai
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// selector class -> HTMLCollections
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Diubah pake javascript';

// query selector -> element
// manipulasi node root
const sectionB = document.getElementById('b');
// const p4 = document.querySelector('#b p');
const p4 = sectionB.querySelector('p');
p4.style.color = 'green';

// pilih list ke-2 : li:nth-child(no_list)
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'pink';

// jika selector yg dipilih lebih dr 1, querySelector hanya memilih element pertama kali
// querySelectorAll -> nodeList
const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
    li[i].style.textAlign = 'center';
}