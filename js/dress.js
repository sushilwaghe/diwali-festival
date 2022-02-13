// function dec(){
//     let currentQuantity= document.getElementById('qnt-dress').innerHTML;
//     if(currentQuantity>0)
//     {
//         document.getElementById('qnt-dress').innerHTML = --currentQuantity;
//     }
// }
// function inc(){

//     let currentQuantity= document.getElementById('qnt-dress').innerHTML;

//     document.getElementById('qnt-dress').innerHTML = ++currentQuantity;
//     }

    const productOptions = document.querySelectorAll(".card-order");
    productOptions.forEach((node) => {
         const itemCount = node.querySelector(".qnt-dress");
 
         const add = node.querySelector(".inc");
         const remove = node.querySelector(".dec");
 
         add.addEventListener("click", () => {
         //   itemCount.value = parseInt(itemCount.value, 10) + 1;
         let currentQuantity= node.querySelector('.qnt-dress').innerHTML;
 
         node.querySelector('.qnt-dress').innerHTML = ++currentQuantity;
         });
       
         remove.addEventListener("click", () => {
         //   itemCount.value = parseInt(itemCount.value, 10) - 1;
         let currentQuantity= node.querySelector('.qnt-dress').innerHTML;
     if(currentQuantity>0)
     {
         node.querySelector('.qnt-dress').innerHTML = --currentQuantity;
     }
         });
       });

  

