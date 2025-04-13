function toggleMenu() {
    const nav = document.getElementById("navMenu");
    const icon = document.getElementById("hamburgerIcon").querySelector("i");
    nav.classList.toggle("active");

    if (nav.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}


// header sectioin
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

// about section 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


  
