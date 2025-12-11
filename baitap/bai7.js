
function kiemTraSoNguyenTo(n) {
    if (n <= 1) return false;
    
    for (let i = 2; i * i <= n; i++) { 
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}

console.log("Kiểm tra 5: " + kiemTraSoNguyenTo(5));
console.log("Kiểm tra 10: " + kiemTraSoNguyenTo(10)); 


let danhSachSNT = [];
for (let so = 2; so <= 100; so++) {
    if (kiemTraSoNguyenTo(so)) {
        danhSachSNT.push(so);
    }
}
console.log("Các số nguyên tố <= 100: " + danhSachSNT.join(", "));