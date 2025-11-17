// Khởi tạo 2 số đầu tiên của dãy (1, 1)
let a = 1;
let b = 1;
let nextFib;

// In ra 2 số đầu tiên (đề phòng 1 hoặc 1 chia hết cho 5, nhưng không)
if (a % 5 === 0) {
    document.write("Số Fibonacci đầu tiên chia hết cho 5 là: " + a);
   // Dừng chương trình
}
if (b % 5 === 0) {
    document.write("Số Fibonacci đầu tiên chia hết cho 5 là: " + b);
  // Dừng chương trình
}

// Lặp 20 lần để tìm kiếm (số đầu tiên chia hết cho 5 sẽ xuất hiện sớm)
for (let i = 3; i <= 20; i++) {
    // Tính số Fibonacci tiếp theo
    nextFib = a + b;

    // Kiểm tra và in ra nếu thỏa mãn điều kiện
    if (nextFib % 5 === 0) {
        document.write("Số Fibonacci đầu tiên chia hết cho 5 là: " + nextFib);
        break; // Dừng vòng lặp ngay lập tức khi tìm thấy
    }

    // Cập nhật các biến cho lần lặp tiếp theo
    a = b;
    b = nextFib;
}