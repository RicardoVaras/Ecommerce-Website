
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");

function register(){
    LoginForm.style.transform= "translateX(0px)";
    RegForm.style.transform= "translateX(0px)";
    indicator.style.transform= "translateX(100px)";
}

function login(){
    LoginForm.style.transform = "translateX(300px)";
    RegForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}

var menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight="0px";

function menutoggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
};

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("SmallImg");

SmallImg[0].onclick = function(){
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src;
};

