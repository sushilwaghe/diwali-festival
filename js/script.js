function dec(){
    var currentQuantity= parseInt(document.getElementById('qnt-dress').innerHTML);
    if(currentQuantity>0)
    {
        currentQuantity--;
        document.getElementById('qnt-dress').innerHTML = currentQuantity;
    }
}
function inc(){
    if(currentQuantity=="1")
    {
    var currentQuantity= parseInt(document.getElementById('qnt-dress').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-dress').innerHTML = currentQuantity;
    }
}