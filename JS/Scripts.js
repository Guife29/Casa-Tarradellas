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

// Carrousell de imagenes de recomendados

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
    });
}