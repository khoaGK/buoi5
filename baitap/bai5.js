
let tienVayBanDau;
const laiSuat = 0.05; 


tienVayBanDau = 500; 

if (tienVayBanDau < 1000) { 
    let soDu = tienVayBanDau; 
    let nam = 0;
    
    do {
        soDu = soDu * (1 + laiSuat);
        nam++;
        console.log(`Năm ${nam}: Số dư = ${soDu.toFixed(2)} USD`);

        
        if (soDu > 2 * tienVayBanDau) {
            console.log(`Số dư vượt quá 2 lần tiền vay ban đầu (Năm ${nam}).`);
            break; 
        }

    } while (nam < 10); 

} else {
    console.log("Số tiền vay ban đầu phải nhỏ hơn 1000 USD.");
}