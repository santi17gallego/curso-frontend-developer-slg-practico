const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

navbarEmail.addEventListener("click", toggleShowDesktopMenu)
hamMenu.addEventListener("click", toggleShowMobileMenu)


function toggleShowDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}

function toggleShowMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}