"use strict";

// fetching .json file
let destinationsData;
let crewData;
let technologyData;

fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		destinationsData = data.destinations;
		crewData = data.crew;
		technologyData = data.technology;
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});

// ### mobile-navigation ###
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

// ### tabs ###
const tabHeading = document.querySelector(".destination-info h2");
const tabDescription = document.querySelector(".destination-info p");
const tabMeta1 = document.querySelector(".meta-1 p");
const tabMeta2 = document.querySelector(".meta-2 p");
const htmlImg = document.querySelector(".grid-container--destination img");
const htmlAltImg = document.querySelector(
	".grid-container--destination source"
);
const allTabs = Array.from(document.querySelector(".tab-list").children);

// adding event listener to every tab
allTabs.forEach((tab) => {
	tab.addEventListener("click", function () {
		resetActive(allTabs);
		loadContent(destinationsData, tab.innerText.toLowerCase());
		tab.setAttribute("aria-selected", true);
	});
});

// ### helper functions ###

// set aria-selected property to false on all items (tabs, dots, numbers)
const resetActive = function (items) {
	items.forEach((item) => {
		item.setAttribute("aria-selected", false);
	});
};

// list = all data to search e.g. crewData, technologyData... target = data you looking for e.g. moon, mars,...
const findContent = function (list, target) {
	const found = list.find((el) => el.name.toLowerCase() === target);
	// console.log("FOUND", found);
	return found;
};

// list = all data to search e.g. crewData, technologyData... target = data you looking for e.g. moon, mars,...
const loadContent = function (list, target) {
	const contentData = findContent(list, target);
	tabHeading.innerText = contentData.name;
	tabDescription.innerText = contentData.description;
	tabMeta1.innerText = contentData.distance;
	tabMeta2.innerText = contentData.travel;
	htmlImg.setAttribute("src", contentData.images.png);
	htmlImg.setAttribute("alt", target);
	htmlAltImg.setAttribute("srcset", contentData.images.webp);
};
// #######################################################################

// ### dots ###
// #######################################################################

// ### numbers ###
// #######################################################################
