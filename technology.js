"use strict";
let technologyData2;

fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		technologyData2 = data.technology;
		console.log(technologyData2);
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});

// ### Numbered Tabs ###
const allNumTabs = Array.from(
	document.querySelector(".number-indicators").children
);
const techHeading = document.querySelector(".technology-details h2");
const techDescription = document.querySelector(".technology-details header p");
const dotBio = document.querySelector(".bio");
const htmlImg = document.querySelector(".grid-container--technology img");
const htmlAltImg1 = document.querySelector(".source-45rem");
const htmlAltImg2 = document.querySelector(".source-35em");

// adding event listener to every tab
allNumTabs.forEach((dot) => {
	dot.addEventListener("click", function () {
		const role = dot.getAttribute("aria-role");
		console.log(role);
		resetActive(allNumTabs);
		loadContent(technologyData2, role);
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
	console.log("FOUND", found);
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
