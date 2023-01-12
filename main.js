const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector(".navbar-shopping-cart")
const asideProductDetail = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

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


const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Computer",
    price: 180,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Mouse",
    price: 20,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

/*

<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>

*/

for (product of productList) {

    const productCard = document.createElement("div")
    productCard.classList.add("product-card")
    
    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)
    
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")
    

    const productInfoDiv = document.createElement("div")
    
    const price = document.createElement("p")
    price.innerText = "$" + product.price
    
    const name = document.createElement("p")
    name.innerText = product.name


    const cartFigure = document.createElement("figure")
    const cartIconImg = document.createElement("img")
    cartIconImg.setAttribute("src", "./icons/bt_add_to_cart.svg")

    productCard.append(productImg, productInfo)

    productInfo.append(productInfoDiv, cartFigure)
    
    productInfoDiv.append(price, name)

    cartFigure.append(cartIconImg)

    cardsContainer.append(productCard)
}