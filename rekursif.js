// rekursif: proses pemanggilan fungsi diri sendiri
// contoh: faktorial
function faktorial(n) {
    // base case : agar proses rekursif berhenti
    if (n === 0) return 1;
    // fungsi rekursif
    return n * faktorial(n - 1);
}
var tes = faktorial(5);
console.log(tes);