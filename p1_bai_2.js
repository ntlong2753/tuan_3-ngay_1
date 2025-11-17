let x;
do {
    // Lấy và ép kiểu giá trị nhập vào
    x = parseInt(prompt("Nhập nhiệt độ thích hợp:"));
    // Kiểm tra điều kiện
    if (x > 100) {
        alert("Nhiệt độ quá cao (" + x + "). Yêu cầu giảm nhiệt độ. Vui lòng nhập lại.");
    } else if (x < 20) {
        alert("Nhiệt độ quá thấp (" + x + "). Yêu cầu tăng nhiệt độ. Vui lòng nhập lại.");
    } else if (isNaN(x)) {
        // Xử lý trường hợp người dùng nhập chữ hoặc bỏ trống
        alert("Đầu vào không hợp lệ. Vui lòng nhập một số.");
        // Gán x giá trị không hợp lệ để đảm bảo lặp lại
        x = 0;
    }
} while (x < 20 || x > 100 || isNaN(x)); // Lặp lại nếu x < 20 HOẶC x > 100 HOẶC không phải là số
// Khi vòng lặp kết thúc (nhiệt độ hợp lệ)
alert("Nhiệt độ đã OK: " + x);