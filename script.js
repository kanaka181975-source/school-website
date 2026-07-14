// Welcome message
window.onload = function () {
    alert("Welcome to Green Valley Public School!");
};

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = form.querySelector('input[type="text"]').value;
    let email = form.querySelector('input[type="email"]').value;
    let phone = form.querySelector('input[type="tel"]').value;
    let message = form.querySelector("textarea").value;

    if(name=="" || email=="" || phone=="" || message==""){
        alert("Please fill all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent successfully.");

    form.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Button Animation
const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function(){
    btn.style.transform = "scale(1.1)";
});

btn.addEventListener("mouseout", function(){
    btn.style.transform = "scale(1)";
});