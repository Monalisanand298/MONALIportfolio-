//show-nav

document.querySelector("#open").addEventListener("click", function() {
    document.querySelector(".container").classList.add("show-nav");
});

 document.querySelector("#close").addEventListener("click", function() {
     document.querySelector(".container").classList.remove("show-nav");
 });

//  document.querySelector(".home").addEventListener("click",function(){
//     document.querySelector(".container").classList.remove("show-nav");
//  });

 

//dark-mode


document.querySelector("#icon").addEventListener("click",function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.svg";
    }
    else{
        icon.src = "images/moon.svg";
    }
});

// contact me
// const nameinput = document.querySelector("#name");
// const email = document.querySelector("#email");
// const message = document.querySelector("#message");
// const errornode = document.querySelectorAll(".error");

// function validform(){
// if(nameinput.ariaValueMax.length <1){
//     errornode[0].innerText = " Name cannot be blank";
 
// }
// }