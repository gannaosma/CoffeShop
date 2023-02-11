let navbar = document.querySelector('.nav')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    cartItem.classList.remove('active')
    searchIcon.classList.remove('active')
}

let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchIcon.classList.remove('active')
}

let searchIcon = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    searchIcon.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
    searchIcon.classList.remove('active')
}


var removeItem = document.getElementsByClassName('fa-times');
for (var i = 0; i < removeItem.length; i++) {
    var button = removeItem[i]
    button.addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotalPrice()

}

function updateTotalPrice() {
    var cartItemContainer = document.getElementsByClassName('cart-item-container')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-item')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        total += price
    }
    document.getElementsByClassName('totalPriceValue')[0].innerText = '$' + total
}

var addToCartButtons = document.getElementsByClassName('AddToCart')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        var shopItem = buttonClicked.parentElement
        var title = shopItem.getElementsByClassName('titleProduct')[0].innerText
        var price = shopItem.getElementsByClassName('price')[0].innerText.split('$')[1]
        var image = shopItem.getElementsByTagName('img')[0].src
        addItemToCart(title, price, image)
        updateTotalPrice()
    })
}

function addItemToCart(title, price, image) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-item')
    var cartItems = document.getElementsByClassName('totalPrice')[0]
    var cartRowContent = `
            <img src="${image}" alt="">
            <div class="content">
                <h3>${title}</h3>
                <div class="price">${price}</div>
            </div>
            <span class="fas fa-times"></span>   
    `
    cartRow.innerHTML = cartRowContent
    cartItems.before(cartRow)
    cartRow.getElementsByClassName('fa-times')[0].addEventListener('click', removeCartItem)
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)
function purchaseClicked(){
    alert('thanks for purchase')
    var cartItemContainer = document.getElementsByClassName('cart-item-container')[0]
    var cartItem = document.getElementsByClassName('cart-item')
    for(var i=0; i<cartItem.length; i++){
        cartItem[i].remove()
    }
    updateTotalPrice()
}