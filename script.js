// DARK MODE

const darkMode = document.getElementById("dark-mode");

darkMode.onclick = function(){

    document.body.classList.toggle("dark");

};


// SCROLL ANIMATION

const cards = document.querySelectorAll(".card, .project-card");

window.addEventListener("scroll", () => {

    cards.forEach((card) => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// INITIAL STYLE FOR ANIMATION

cards.forEach((card)=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";

});