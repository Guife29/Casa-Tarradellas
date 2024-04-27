function showCart(){
    console.log("Enseño el menu");
    // document.getElementById("menuDesplegable").style.display = "block";
    document.getElementById("cartDesplegable").style.right = "0px";

    var vaiable1 = 5;

    console.log(vaiable1);
}

function hideCart(){
    console.log("Escondo el menu");
    // document.getElementById("menuDesplegable").style.display = "none";
    document.getElementById("cartDesplegable").style.right = "-75%";
}

function showModalSend(){
    document.getElementById("modalSend").style.display = "block";
    document.getElementById("filtreOpac").style.display = "block";
    document.documentElement.style.overflow = "hidden"
}

function hideModalSend(){
    document.getElementById("modalSend").style.display = "none";
    document.getElementById("filtreOpac").style.display = "none";
    document.documentElement.style.overflow = "auto"
}