const menuu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-bar2");
const handleClick= function(){
   nav.classList.toggle("nav-bar2-open")

}
menuu.addEventListener("click", handleClick)
nav.addEventListener("click", handleClick)
const togglebtn = document.querySelectorAll(".button1");
const divcenter = document.querySelector(".center");
const close = document.querySelector(".close-btn");
const times = document.querySelector("#times");



function setSelectedFinalPriceCitadine(){
   var e = document.querySelector(".liist");
   finalPrice = getFinalPrice(e.options[e.selectedIndex].value, 12);
   document.getElementById("btn").value = finalPrice + "$ /day";
}

function setSelectedFinalPriceCompacte(){
   var e = document.querySelector(".commy");
   finalPrice = getFinalPrice(e.options[e.selectedIndex].value, 14);
   document.getElementById("btn").value = finalPrice + "$ /day";
}
     
togglebtn.forEach(( button) => {
   button.addEventListener('click',() =>{
    if(divcenter.style.display === 'none'){

    divcenter.style.display = 'block';
   
   }else{
       divcenter.style.display = 'block';
   }
   })
})
 

close.addEventListener('click',() =>{
   if(divcenter.style.display === 'block'){
    divcenter.style.display = 'none';
   }else{
       divcenter.style.display = 'none';
   }
})
times.addEventListener('click',() =>{
   if(divcenter.style.display === 'block'){
    divcenter.style.display = 'none';
   }else{
       divcenter.style.display = 'none';
   }
})

function getFinalPrice(carburant, firstPrice){
var fiprice;
if (carburant == "Hybrid"){
        fiprice = (firstPrice * 1.09).toFixed(2);
    }
    else if (carburant == "Electric"){
        fiprice = (firstPrice * 1.05).toFixed(2);
    }
    else if (carburant == "Gasoline"){
        fiprice = (firstPrice * 1.14).toFixed(2);
    }
    else {
        fiprice = (firstPrice * 1.21).toFixed(2);
    }
   ;
   return fiprice; 
}
