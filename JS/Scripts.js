function showCart(){
    console.log("Enseño el menu");
    // document.getElementById("menuDesplegable").style.display = "block";
    document.getElementById("cartDesplegable").style.right = "0px";
    

    if (window.innerWidth<=768){
        document.getElementById("cajaMenu").style.right = "-125%";
    }
    
    var vaiable1 = 5;

    console.log(vaiable1);
}

function hideCart(){
    console.log("Escondo el menu");
    // document.getElementById("menuDesplegable").style.display = "none";
    document.getElementById("cartDesplegable").style.right = "-75%";
}

function showMenu(){
    console.log("Enseño el menu");
    // document.getElementById("menuDesplegable").style.display = "block";
    document.getElementById("cajaMenu").style.right = "-70%";

    var vaiable1 = 5;

    console.log(vaiable1);
}

function hideMenu(){
    console.log("Escondo el menu");
    // document.getElementById("menuDesplegable").style.display = "none";
    document.getElementById("cajaMenu").style.right = "-125%";
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
    location.reload();
}

// codi per efecte de info segons scroll

window.onscroll = function(){
    infoScroll()
    console.log(window.pageYOffset);
}

function infoScroll(){
    if (document.documentElement.scrollTop>790 && document.documentElement.scrollTop<1840) {

        if (window.innerWidth<=768){
            document.getElementById("infoContacto").classList.add("quieto768");
            
        }

        else {

            document.getElementById("infoContacto").classList.remove("quieto768");

            document.getElementById("infoContacto").classList.add("quedateQuieto");

            document.getElementById("infoContacto").classList.remove("ahiTeQuedas");
        }

        console.log("si");
        // document.getElementById("infoContacto").style.position = "fixed";
    }
    else if (document.documentElement.scrollTop>1840 || document.documentElement.scrollTop<790){
        console.log("no");
        // document.getElementById("infoContacto").style.position = "relative";
        document.getElementById("infoContacto").classList.remove("quedateQuieto");

        if(document.documentElement.scrollTop>790){
            document.getElementById("infoContacto").classList.add("ahiTeQuedas");
            console.log("entrando");
        }
        
    }
}