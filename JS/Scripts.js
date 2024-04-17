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

// const scrollers = document.getElementById("scroller");

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
//     addAnimation();
//     console.log("entrado");
// }

// function addAnimation(){
//         scrollers.setAttribute("data-animated", true);

//         const innerScroller = document.getElementById("innerScroller");
//         const scrollerContent = Array.from(innerScroller.children);

//         console.log(scrollerContent);

//         scrollerContent.forEach((item) =>{
//             const duplicatedItem = item.cloneNode(true);
//             duplicatedItem.setAttribute("aria-hidden", true);
//             innerScroller.appendChild(duplicatedItem);
//         });
// };

