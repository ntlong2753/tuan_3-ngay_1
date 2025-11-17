let width = 20;
let height = 6;
for (let i = 1; i <= height; i++) {
    let x = "";
    for (let j = 1; j <= width; j++) {
        if (i === 1 || i === height || j === 1 || j === width) {
            x += "*";
        } else {
            x += "&nbsp;&nbsp;";
        }
    }
    document.write(x + "<br>");
}