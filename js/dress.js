function dec(){
    let currentQuantity= document.getElementById('qnt-dress').innerHTML;
    if(currentQuantity>0)
    {
        document.getElementById('qnt-dress').innerHTML = --currentQuantity;
    }
}
function inc(){

    let currentQuantity= document.getElementById('qnt-dress').innerHTML;

    document.getElementById('qnt-dress').innerHTML = ++currentQuantity;
    }