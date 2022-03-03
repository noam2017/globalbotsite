// Particles
window.onload = function () {
	Particles.init({
		selector: ".background",
		connectParticles: true,
		minDistance: 100,
		color: "#88c8ff",
	});
};

// Nav
const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");

function toggleNav() {
	burger.classList.toggle("fa-bars");
	burger.classList.toggle("fa-times");
	nav.classList.toggle("nav-active");
}

burger.addEventListener("click", function () {
	toggleNav();
});

// Typewriter effect
var typed = new Typed(".input", {
	strings: ["GlobalBot", "Discord Bot"],
	typeSpeed: 100,
	backSpeed: 50,
	loop: true,
});
