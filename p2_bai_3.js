let x = 5;

for (let i = 1; i <= x; i++) {
    let y = "";
    for (let j = 1; j <= i; j++) {
        y += "*";
    }
    document.write(y + "<br>");
}
document.write("<br>");
for (let i = x; i >= 1; i--) {
    let y = "";
    for (let j = 1; j <= i; j++) {
        y += "*";
    }
    document.write(y + "<br>");
}
document.write("<br>");
for (let i = 1; i <= x; i++) {
    let y = "";
    for (let k = 1; k <= x - i; k++) {
        y += "&nbsp;&nbsp;";
    }
    for (let j = 1; j <= i; j++) {
        y += "*";
    }
    document.write(y + "<br>");
}
document.write("<br>");
for (let i = x; i >= 1; i--) {
    let y = "";
    for (let k = 1; k <= x - i; k++) {
        y += "&nbsp;&nbsp;";
    }
    for (let j = 1; j <= i; j++) {
        y += "*";
    }
    document.write(y + "<br>");
}