const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

navbarEmail.addEventListener("click", toggleShowDesktopMenu)

function toggleShowDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}