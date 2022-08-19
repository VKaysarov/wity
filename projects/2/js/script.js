
// ============================Меня для мобилок============================

let burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("is-active");
	document.querySelector(".nav-menu").classList.toggle("is-open");
})

// ============================Анимация SVG графики в основной секции сайта============================

let circleCost = document.getElementById("cost-demo");
let circleBooking = document.getElementById("book-demo");
let circleChance = document.getElementById("chance-demo");

let myTimer = document.getElementById("myTimer");
let interval = 30;
let angle = 0;
let angle_increment = 6; // Скорость анимации
let length_circle = (circleCost.getAttribute("r") * 2 * Math.PI) / 360; // Вычисление длины круга

window.timer = window.setInterval(function () {
    circleCost.setAttribute("stroke-dasharray", angle * length_circle + ", 20000");
    circleBooking.setAttribute("stroke-dasharray", angle * length_circle + ", 20000");
    circleChance.setAttribute("stroke-dasharray", (angle * length_circle * 1.55) + ", 20000");
    
    myTimer.innerHTML = parseInt(angle/360*100) + "%";

    if (angle >= 180) {
        window.clearInterval(window.timer);
    }
    angle += angle_increment;
}.bind(this), interval);


// iri - input range infographics
const iriElem = document.querySelector("#iri");
const iriValueElem = document.querySelector("#iri-value"); // Элемент в который записываем сколько броней из скольки

iriElem.addEventListener("input", function() {
	iriValueElem.innerHTML = iriElem.value + " из 48";

	let degBook = iriElem.value * 7.5; // Количество бронирований в градусах 360 / 48 = 7.5

	circleCost.setAttribute("stroke-dasharray", degBook * length_circle + ", 20000");
	myTimer.innerHTML = parseInt(degBook/360*100) + "%";
})