let n;
let ket_qua = 1;
n = parseInt(prompt("Nhập một số "));

for (let i = 1; i <= n; i++) {
    ket_qua = ket_qua * i;
}
document.write("Giai thừa của " + n + " là: " + ket_qua);