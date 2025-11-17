let text = "1 1 ";
let a = 1;
let b = 1;
for (let i = 3  ; i <= 100; i++) {
    let x = a + b;
    text = text + " " + x;
    a = b;
    b = x;
}
document.write(text);

