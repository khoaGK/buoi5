
const duLieuBinhChon = [
    { ungCuVien: 'A', soPhieu: 50 },
    { ungCuVien: 'B', soPhieu: 30 },
    { ungCuVien: 'A', soPhieu: 10 },
    { ungCuVien: 'C', soPhieu: 5 }
]; 

let tongPhieu = {};


for (let i = 0; i < duLieuBinhChon.length; i++) {
    const duLieu = duLieuBinhChon[i];
    
    
    for (const key in duLieu) { //
        if (key === 'ungCuVien') {
            const tenUCV = duLieu[key];
            const phieu = duLieu['soPhieu'];
            
            
            if (tongPhieu[tenUCV]) {
                tongPhieu[tenUCV] += phieu;
            } else {
                tongPhieu[tenUCV] = phieu;
            }
        }
    }
}

console.log("Kết quả tổng phiếu bầu:");
console.log(tongPhieu); 