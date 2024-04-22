"use strict";
/* let destinationsData;
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
	}); */
// ### dots ###
const allDots = Array.from(document.querySelector(".dot-indicators").children);
console.log(allDots);
const dotHeading = document.querySelector(".destination-info h2");
const dotDescription = document.querySelector(".destination-info p");
const dotMeta1 = document.querySelector(".meta-1 p");
const dotMeta2 = document.querySelector(".meta-2 p");
const htmlImg = document.querySelector(".grid-container--crew img");
const htmlAltImg = document.querySelector(".grid-container--crew source");

console.log("CrewData:", crewData);

// adding event listener to every tab
allDots.forEach((dot) => {
	dot.addEventListener("click", function () {
		resetActive(allDots);
		loadContent(crewData, dot.innerText.toLowerCase());
		dot.setAttribute("aria-selected", true);
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
	dotHeading.innerText = contentData.name;
	dotDescription.innerText = contentData.description;
	dotMeta1.innerText = contentData.distance;
	dotMeta2.innerText = contentData.travel;
	htmlImg.setAttribute("src", contentData.images.png);
	htmlImg.setAttribute("alt", target);
	htmlAltImg.setAttribute("srcset", contentData.images.webp);
};

// #######################################################################
