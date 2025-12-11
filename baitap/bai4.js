
console.log("Bắt đầu khám phá hầm ngục:");

for (let tang = 1; tang <= 4; tang++) {
    console.log(`Đang khám phá Tầng ${tang}`);
    for (let o = 1; o <= 5; o++) { 
        if (tang === 3 && o === 3) { 
            console.log(`Tìm thấy kho báu ở ô cấp [${o}]!`); 
            break; 
        }
        console.log(`  - Ô [${o}]: Không có gì.`);
    }
    if (tang === 3) {
        break; 
    }
}
console.log("Đã thoát khỏi hầm ngục.");