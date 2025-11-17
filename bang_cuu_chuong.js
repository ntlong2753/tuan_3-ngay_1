let x
let y
let ket_qua
ket_qua = "<table style='border-collapse: collapse; width:1000px;' >";
for(x = 1; x <= 10; x++){
    ket_qua = ket_qua + "<tr style='border-collapse: collapse; border-style: solid ; width:1000px; padding-left: 10px'>"
        for(y = 1; y <= 10; y++){
            ket_qua = ket_qua + "<td style='border-collapse: collapse; border-style: solid ; width:1000px;padding-left: 10px'>"
                              + x + " × " + y + " = " + x * y + "</td>";
        }
    ket_qua = ket_qua + "</tr>";
}

ket_qua = ket_qua + "</table>";
document.write(ket_qua);
//border='1' width='300' cellspacing='0' cellpadding='15'