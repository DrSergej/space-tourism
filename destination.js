"use strict";

// ### tabs ###
const tabHeading = document.querySelector(".destination-info h2");
const tabDescription = document.querySelector(".destination-info p");
const tabMeta1 = document.querySelector(".meta-1 p");
const tabMeta2 = document.querySelector(".meta-2 p");
const htmlImg = document.querySelector(".grid-container--destination img");
const htmlAltImg = document.querySelector(
	".grid-container--destination source"
);
const tabs = document.querySelector(".tab-list");
console.log(tabs);
const allTabs = Array.from(tabs.children);
console.log(allTabs);

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
