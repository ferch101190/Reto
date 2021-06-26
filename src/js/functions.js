// navbar element addition on mobile views
let navbarBtnToggler = document.getElementById("menu-main-toggler"); 
let navbar = document.getElementById("navbarTogglerJewelry");
let cartElement = document.getElementsByClassName("cart")[0];
let navbarExtraElements = document.getElementsByClassName("user-status")[0];

navbarBtnToggler.addEventListener("click",function(){
    let logo = document.querySelector(".logo.header");
    let hamburger = document.getElementsByClassName("navbar-toggler-icon")[0];
    let cross = document.getElementsByClassName("icon-cross")[0];
    cartElement.classList.toggle("d-none");
    navbarExtraElements.classList.toggle("d-none");
    hamburger.classList.toggle("d-none"); 
    cross.classList.toggle("d-none");
    console.log("clicked");
    logo.classList.toggle("d-none");

});

window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    if(newWidth>=992){
        if(navbar.classList.contains("show")){
            let clickEvent = new Event("click");
            navbarBtnToggler.dispatchEvent(clickEvent);
            console.log("dispatched");
        }
    }
});

//Color item selection 
let img = document.getElementsByClassName("item-showed")[0];
let colorItem = document.getElementsByClassName("color-item")[0];

colorItem.addEventListener("change",function(){
    let sourceImg = this.options[this.selectedIndex].value;
    img.src = sourceImg;
});