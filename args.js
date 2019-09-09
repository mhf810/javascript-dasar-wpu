function hitung(a, b, c) {
    return a * b + c;
}

function jumlahan() { // tanpa parameter
    var hasil = 0;
    // menyimpan di variabel arguments
    for (i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

console.log(hitung(2, 1));
// jika #argument > #parameter, maka argument sisa diabaikan. 
console.log(hitung(3, 7, 3, 6)); // 6 diabaikan
// sebaliknya, parameter sisa didefinisikan 'undefined' -> NaN

// panggil function dgn argumen berapapun
var coba = jumlahan(3, 4, 2);
console.log(coba);