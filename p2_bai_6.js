let count = 0;
let b = 0;
let x = 1;
for (; ; ) {
    if (x % 7 === 0) {
        b = b + x;
        count = count + 1;
    }
    if (count === 30) {
        break;
    }
    x = x + 1;
}
document.write("Tổng của 30 số tự nhiên đầu tiên chia hết cho 7 là: " + b);