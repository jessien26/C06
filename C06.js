//Bài 1: Số chính phương
//Cho trước một số nguyên n. Hãy cho biết n có phải là số chính phương không. Số chính phương là bình phương của một số nguyên. Ví dụ 9 là số chính phương vì 9 là bình phương của 3.
//Lưu ý: Dùng vòng lặp
let soNguyenBai1 = prompt("Nhap so nguyen bat ky:")
function kiemTraSoChinhPhuong(bien1){
    let flag = 0
    for(let index = 1; index < bien1; index++){
        if(bien1 / index === index){     //số nguyên chia cho một số bất kỳ có kết quả bằng số được chia sẽ là số chính phương
            flag = 1
        }
    }
    return flag
}
const ketQuaBai1 = kiemTraSoChinhPhuong(soNguyenBai1)
if(ketQuaBai1 !== 0){
    console.log("Bai 1===> Day la so chinh phuong")
}
else{
    console.log("Bai 1===> Day khong phai la so chinh phuong")
}

//## Bài 2: Số VB
//Số VB là số chia hết cho tổng các chữ số của nó 
//và chia hết cho tích các chữ số của nó 
//và chia hết cho từng chữ số của nó. 
//VD: 24 là số VB, vì 24 chia hết cho (2+4) và 24 chia hết cho (2x4) và 24 chia hết cho cả 2 và 4.
//Liệt kê các phần tử trong mảng một chiều số nguyên.

let soNguyenBai2 = soNguyenBai1
function tachSoNguyen(bien){
    let thanhPhanSoNguyen = bien.toString().split('');
    return thanhPhanSoNguyen.map(Number);
}

function timTongCuaDaySo(daySo) {
    let tong = 0;
    for(let index = 0; index < daySo.length; index++) {
        tong = tong + daySo[index];
    }
    return tong
}

function timTichCuaDaySo(daySo) {
    let tich = 1;
    for(let index = 0; index < daySo.length; index++) {
        tich = tich * daySo[index];
    }
    return tich
}

function kiemTraSoVB(bien2){
    let arrayThanhPhan = tachSoNguyen(bien2)
    let tongBai2 = timTongCuaDaySo(arrayThanhPhan);
    let tichBai2 = timTichCuaDaySo(arrayThanhPhan);

    let kiemTra = true;
    
    for(let index; index < arrayThanhPhan.length; index++) {
        if( bien2 % arrayThanhPhan[index] !== 0 ) {
            kiemTra = false;
        }
    }

    if( bien2 % tongBai2 !== 0 || !bien2 % tichBai2 !== 0 ) {
        kiemTra = false;
    }

    if(kiemTra === true) {
        console.log("Bai 2 ===> Day la so VB")
    } else {
        console.log("Bai 2 ===> Day khong phai la so VB")
    }
}

kiemTraSoVB(soNguyenBai2)

//Bài 3: Liệt kê số chính phương
//Liệt kê các số chính phương có trong mảng một chiều số nguyên.
let arrayBai3 = [1, 2, 3, 4, 8, 9, 24, 56, 78]

function lietKeSoChinhPhuong(array3){
    let arraySoChinhPhuong = []
    for(let index = 0; index < array3.length; index++){
        let flagSoChinhPhuong = kiemTraSoChinhPhuong(array3[index])
        if(flagSoChinhPhuong === 1){
            arraySoChinhPhuong.push(array3[index])
        }
    }
    return arraySoChinhPhuong
}
const ketQuaBai3 = lietKeSoChinhPhuong(arrayBai3)
console.log("Ket Qua Bai 3 ====> ", ketQuaBai3)

//Bài 4: Liệt kê số chính phương lẻ
//Liệt kê các số chính phương lẻ có trong mảng một chiều số nguyên.

let arrayBai4 = arrayBai3

function lietKeSoChinhPhuongLe(array4){
    let arraySoChinhPhuongLe = []
    let arraySoChinhPhuong = lietKeSoChinhPhuong(array4)
    for(let index = 0; index < arraySoChinhPhuong.length; index++){
        if (arraySoChinhPhuong[index] % 2 !== 0 ){
            arraySoChinhPhuongLe.push(arraySoChinhPhuong[index])
        }
    }
    return arraySoChinhPhuongLe
}
const ketQuaBai4 = lietKeSoChinhPhuongLe(arrayBai4)
console.log("KetQuaBai4 ====> ", ketQuaBai4)

