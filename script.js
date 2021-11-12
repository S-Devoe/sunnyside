

//ScrollReveal

var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null
   };

var slideUp= {
    distance: '150%',
    origin: 'bottom',
    opacity: null
    
   };

ScrollReveal().reveal(".arrow", {delay: 500});
ScrollReveal().reveal(".standout-text", slideLeft );
ScrollReveal().reveal(".transform-text", slideLeft);
ScrollReveal().reveal(".client-card", slideUp, {delay: 300} );


// Navigation

const menuBtn =document.querySelector(".header #menu");
const closeBtn = document.querySelector(".nav .cancel")
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () =>{
    nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
});




