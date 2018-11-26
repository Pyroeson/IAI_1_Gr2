

przycisk=document.querySelector(".button");
header=document.querySelector(".header")

function addClass(element,nameClass){
    element.classList.add(nameClass);
}

function removeClass(element,nameClass){
    element.classList.remove(nameClass);
}

przycisk.addEventListener('click',function(){
    addClass(header,'zmiana')
});