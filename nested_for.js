// membuat piramida terbalik
var s = '';

// pengulangan per baris
for (var i = 10; i > 0; i--) {
    // loop dalam baris
    for (var j = 0; j < i; j++) {
        // genap * ganjil # (indeks dimulai dr 0)
        if (j % 2 == 0) {
            s += '#';
        } else {
            s += '*';
        }
    }
    s += '\n';
}
console.log(s);