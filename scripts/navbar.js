const headerNav = document.querySelector(".header__nav")
const menuIcon = document.querySelector(".menu__icon")

const upLine = document.getElementById("up__line")
const middleLine = document.getElementById("middle__line")
const downLine = document.getElementById("down__line")

let navOpen = false

menuIcon.onclick = () => {
    if (!navOpen) {

        upLine.style.rotate = "50deg"
        upLine.style.transform = "translate(2px, 15px)"
        downLine.style.rotate = "-50deg"
        downLine.style.transform = "translate(2px, -15px)"

        middleLine.style.opacity = "0"

        headerNav.style.height = "14rem"
        navOpen = !navOpen
    } else {
        upLine.style.rotate = "0deg"
        upLine.style.transform = "translate(0px, 0px)"
        downLine.style.rotate = "0deg"
        downLine.style.transform = "translate(0px, 0px)"

        middleLine.style.opacity = "100"

        headerNav.style.height = "6vh"
        navOpen = !navOpen
    }
}