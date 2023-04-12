const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
let menuOpen = false

menu.style.opacity = '0'

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menu.style.opacity = '1'
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menu.style.opacity = '0'
        menuBtn.classList.remove('open')
        menuOpen = false
    }
})