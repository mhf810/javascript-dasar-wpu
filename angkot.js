var totalAngkot = 10;
var angkotNormal = 6;
var noAngkot = 1;
var angkotLembur = 8;
var angkotExtra = 5;

// angkot 1-4 & 6 baik, 
for (noAngkot; noAngkot <= totalAngkot; noAngkot++) {
    if (noAngkot <= angkotNormal && noAngkot != angkotExtra) {
        // cek di console
        console.log('Angkot no ' + noAngkot + ' beroperasi');
    } else if (noAngkot == angkotLembur || noAngkot == totalAngkot || noAngkot == angkotExtra) {
        // angkot 5,8,10 lembur
        console.log('Angkot no ' + noAngkot + ' sedang lembur');
    } else {
        // sisanya mogok
        console.log('Angkot no ' + noAngkot + ' rusak');
    }
}