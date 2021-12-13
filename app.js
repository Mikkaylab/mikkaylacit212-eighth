var toggle=false;



toggle=!toggle;

document.body.querySelector( ".menuIcon").addEventListener("click",function () {
    if(toggle){
        document.body.querySelector(".menu.").style.right="0";
    }else{
        document.body.querySelector(".menu.").style.right="-150px";
    }


})
