let navbar = document.querySelector('.nav')

document.querySelector('#menu-btn').onclick = ()=> {
    navbar.classList.toggle('active')
    cartItem.classList.remove('active')
    searchIcon.classList.remove('active')
}

let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = ()=> {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchIcon.classList.remove('active')
}

let searchIcon = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = ()=> {
    searchIcon.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}

window.onscroll = ()=>{
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
    searchIcon.classList.remove('active')
}