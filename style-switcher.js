/*======================toggle style switcher=======*/



const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style - switcher on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})





/* light and dark*/

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
const themeColor1 = document.querySelector('.color-1')
const themeColor2 = document.querySelector('.color-2')
const themeColor3 = document.querySelector('.color-3')
const themeColor4 = document.querySelector('.color-4')
const themeColor5 = document.querySelector('.color-5')
themeColor1.addEventListener("click")