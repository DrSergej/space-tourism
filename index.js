"use strict";

// fetching .json file
let jsonData;

fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		jsonData = data.destinations;
		// console.log(jsonData);
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});

// mobile-navigation
const navButton = document.querySelector(".mobile-nav-toggle");
const navMenu = document.querySelector(".primary-navigation");

navButton.addEventListener("click", () => {
	const visibility = navMenu.getAttribute("data-visible");
	if (visibility === "false") {
		// navMenu.style.transform = "translateX(0%)"; //moved to CSS cause of Bugs
		navMenu.setAttribute("data-visible", true);
		navButton.style.backgroundImage = `url("./assets/shared/icon-close.svg")`;
	} else {
		// navMenu.style.transform = "translateX(100%)"; //moved to CSS cause of Bugs
		navMenu.setAttribute("data-visible", false);
		navButton.style.backgroundImage = `url("./assets/shared/icon-hamburger.svg")`;
	}
});
// #######################################################################

// tabs
const tabHeading = document.querySelector(".destination-info h2");
const tabDescription = document.querySelector(".destination-info p");
const tabMeta1 = document.querySelector(".meta-1 p");
const tabMeta2 = document.querySelector(".meta-2 p");
const htmlImg = document.querySelector(".grid-container--destination img");
const htmlAltImg = document.querySelector(
	".grid-container--destination source"
);
const allTabs = document.querySelector(".tab-list");

// adding event listener to every tab
Array.from(allTabs.children).forEach((tab) => {
	tab.addEventListener("click", function () {
		// console.log(tab.innerText.toLowerCase());
		loadContent(tab.innerText.toLowerCase());
	});
});

// helper functions
const findContent = function (destination) {
	const found = jsonData.find((el) => el.name.toLowerCase() === destination);
	console.log("FOUND", found);
	return found;
};

const loadContent = function (destination) {
	const contentData = findContent(destination);
	tabHeading.innerText = contentData.name;
	tabDescription.innerText = contentData.description;
	tabMeta1.innerText = contentData.distance;
	tabMeta2.innerText = contentData.travel;
	htmlImg.setAttribute("src", contentData.images.png);
	htmlImg.setAttribute("alt", destination);
	htmlAltImg.setAttribute("srcset", contentData.images.webp);
};
// #######################################################################

// !TODO: Children nach HTML inhalt sucken in der data.json und Inhalt austauschen
// #######################################################################

// dots
// #######################################################################

// numbers
// #######################################################################
