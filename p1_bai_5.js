let a = 1;
let b = 1;
let tong = a + b;
let x;
for (let i = 3; i <= 20; i++) {
    x = a + b;
    tong = tong + x;
    a = b;
    b = x;
}
document.write("Tổng của 20 số Fibonacci đầu tiên là: " + tong);