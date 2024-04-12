"use strict";
const navButton = document.querySelector(".mobile-nav-toggle");
const navMenu = document.querySelector(".primary-navigation");

navButton.addEventListener("click", () => {
	const visibility = navMenu.getAttribute("data-visible");
	if (visibility === "false") {
		navMenu.style.transform = "translateX(0%)";
		navMenu.setAttribute("data-visible", true);
	} else {
		navMenu.style.transform = "translateX(100%)";
		navMenu.setAttribute("data-visible", false);
	}
});
