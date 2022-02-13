// function inc1()
// {
//     var qty = parseInt(document.getElementById("btn-Qty1").innerHTML);
//     qty++;
//     document.getElementById("btn-Qty1").innerHTML = qty;
// }
// function dec1()
// {
//     var qty = parseInt(document.getElementById("btn-Qty1").innerHTML);
//     qty--;
//     document.getElementById("btn-Qty1").innerHTML = qty;
// }
// function inc2()
// {
//     var qty = parseInt(document.getElementById("btn-Qty2").innerHTML);
//     qty++;
//     document.getElementById("btn-Qty2").innerHTML = qty;
// }
// function dec2()
// {
//     var qty = parseInt(document.getElementById("btn-Qty2").innerHTML);
//     qty--;
//     document.getElementById("btn-Qty2").innerHTML = qty;
// }
// function inc3()
// {
//     var qty = parseInt(document.getElementById("btn-Qty3").innerHTML);
//     qty++;
//     document.getElementById("btn-Qty3").innerHTML = qty;
// }
// function dec3()
// {
//     var qty = parseInt(document.getElementById("btn-Qty3").innerHTML);
//     qty--;
//     document.getElementById("btn-Qty3").innerHTML = qty;
// }
// function inc4()
// {
//     var qty = parseInt(document.getElementById("btn-Qty4").innerHTML);
//     qty++;
//     document.getElementById("btn-Qty4").innerHTML = qty;
// }
// function dec4()
// {
//     var qty = parseInt(document.getElementById("btn-Qty4").innerHTML);
//     qty--;
//     document.getElementById("btn-Qty4").innerHTML = qty;
// }
function inc5() {
    var qty = parseInt(document.getElementById("btn-Qty5").innerHTML);
    qty++;
    document.getElementById("btn-Qty5").innerHTML = qty;
}

function dec5() {
    var qty = parseInt(document.getElementById("btn-Qty5").innerHTML);
    qty--;
    document.getElementById("btn-Qty5").innerHTML = qty;
}

function inc6() {
    var qty = parseInt(document.getElementById("btn-Qty6").innerHTML);
    qty++;
    document.getElementById("btn-Qty6").innerHTML = qty;
}

function dec6() {
    var qty = parseInt(document.getElementById("btn-Qty6").innerHTML);
    qty--;
    document.getElementById("btn-Qty6").innerHTML = qty;
}

function inc7() {
    var qty = parseInt(document.getElementById("btn-Qty7").innerHTML);
    qty++;
    document.getElementById("btn-Qty7").innerHTML = qty;
}

function dec7() {
    var qty = parseInt(document.getElementById("btn-Qty7").innerHTML);
    qty--;
    document.getElementById("btn-Qty7").innerHTML = qty;
}

function inc8() {
    var qty = parseInt(document.getElementById("btn-Qty8").innerHTML);
    qty++;
    document.getElementById("btn-Qty8").innerHTML = qty;
}

function dec8() {
    var qty = parseInt(document.getElementById("btn-Qty8").innerHTML);
    qty--;
    document.getElementById("btn-Qty8").innerHTML = qty;
}

function inc9() {
    var qty = parseInt(document.getElementById("btn-Qty9").innerHTML);
    qty++;
    document.getElementById("btn-Qty9").innerHTML = qty;
}

function dec9() {
    var qty = parseInt(document.getElementById("btn-Qty9").innerHTML);
    qty--;
    document.getElementById("btn-Qty9").innerHTML = qty;
}

function inc10() {
    var qty = parseInt(document.getElementById("btn-Qty10").innerHTML);
    qty++;
    document.getElementById("btn-Qty10").innerHTML = qty;
}

function dec10() {
    var qty = parseInt(document.getElementById("btn-Qty10").innerHTML);
    qty--;
    document.getElementById("btn-Qty10").innerHTML = qty;
}

function inc11() {
    var qty = parseInt(document.getElementById("btn-Qty11").innerHTML);
    qty++;
    document.getElementById("btn-Qty11").innerHTML = qty;
}

function dec11() {
    var qty = parseInt(document.getElementById("btn-Qty11").innerHTML);
    qty--;
    document.getElementById("btn-Qty11").innerHTML = qty;
}

function inc12() {
    var qty = parseInt(document.getElementById("btn-Qty12").innerHTML);
    qty++;
    document.getElementById("btn-Qty12").innerHTML = qty;
}

function dec12() {
    var qty = parseInt(document.getElementById("btn-Qty12").innerHTML);
    qty--;
    document.getElementById("btn-Qty12").innerHTML = qty;
}

function amount() {

    var item1 = parseInt(document.getElementById("btn-Qty5").innerHTML)
    var item2 = parseInt(document.getElementById("btn-Qty6").innerHTML)
    var item3 = parseInt(document.getElementById("btn-Qty7").innerHTML)
    var item4 = parseInt(document.getElementById("btn-Qty8").innerHTML)
    var item5 = parseInt(document.getElementById("btn-Qty9").innerHTML)
    var item6 = parseInt(document.getElementById("btn-Qty10").innerHTML)
    var item7 = parseInt(document.getElementById("btn-Qty11").innerHTML)
    var item8 = parseInt(document.getElementById("btn-Qty12").innerHTML)
    var i1 = item1 * 6977;
    var i2 = item2 * 499;
    var i3 = item3 * 999;
    var i4 = item4 * 899;
    var i5 = item5 * 2510;
    var i6 = item6 * 2310;
    var i7 = item7 * 1210;
    var i8 = item8 * 1610;
    total = i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8;

    document.getElementById("total").innerHTML = total;
}