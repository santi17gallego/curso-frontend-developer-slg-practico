const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector(".navbar-shopping-cart")
const asideProductDetail = document.querySelector(".product-detail")

navbarEmail.addEventListener("click", toggleShowDesktopMenu)
hamMenu.addEventListener("click", toggleShowMobileMenu)
shoppingCart.addEventListener("click", toggleShowProductDetail)


function toggleShowDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
    asideProductDetail.classList.add("inactive")
}

function toggleShowMobileMenu() {
    mobileMenu.classList.toggle("inactive")
    asideProductDetail.classList.add("inactive")
}

function toggleShowProductDetail() {
    asideProductDetail.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
}