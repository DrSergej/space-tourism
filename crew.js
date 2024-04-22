"use strict";
let crewData2;

fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		crewData2 = data.crew;
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});
// ### dots ###
const allDots = Array.from(document.querySelector(".dot-indicators").children);
const dotHeading = document.querySelector(".crew-details h2");
const dotDescription = document.querySelector(".crew-details header p");
const dotBio = document.querySelector(".bio");
const htmlImg = document.querySelector(".grid-container--crew img");
const htmlAltImg = document.querySelector(".grid-container--crew source");

// adding event listener to every tab
allDots.forEach((dot) => {
	dot.addEventListener("click", function () {
		const role = dot.getAttribute("aria-role");
		// console.log(role);
		resetActive(allDots);
		loadContent(crewData2, role);
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
	const found = list.find((el) => el.role.toLowerCase() === target);
	// console.log("FOUND", found);
	return found;
};

// list = all data to search e.g. crewData, technologyData... target = data you looking for e.g. moon, mars,...
const loadContent = function (list, target) {
	const contentData = findContent(list, target);
	dotHeading.innerText = contentData.role;
	dotDescription.innerText = contentData.name;
	dotBio.innerText = contentData.bio;
	htmlImg.setAttribute("src", contentData.images.png);
	htmlImg.setAttribute("alt", target);
	htmlAltImg.setAttribute("srcset", contentData.images.webp);
};

// #######################################################################
