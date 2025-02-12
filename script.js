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