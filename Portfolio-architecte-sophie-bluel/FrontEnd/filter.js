import { getWorks } from "./work.js";
let token = sessionStorage.getItem("token");
const categoriesResponse = await fetch("http://localhost:5678/api/categories");
const categoriesData = await categoriesResponse.json();

const galleryContainer = document.querySelector(".gallery");

let divFilter = document.createElement("div");
divFilter.className = "filterContainer";
galleryContainer.parentNode.insertBefore(divFilter, galleryContainer);

if (token === null) {
	let buttonAll = document.createElement("button");
	let buttonText = document.createElement("p");
	buttonAll.className = "buttonfilter";
	buttonAll.classList.add("buttonSelected")

	buttonText.innerHTML = "Tous";
	divFilter.appendChild(buttonAll);
	buttonAll.appendChild(buttonText);

	buttonAll.addEventListener("click", function () {
		galleryContainer.innerHTML = "";
		getWorks(0);
	});
	categoriesData.forEach(function (category) {
		let buttons = document.createElement("button");
		let buttonText = document.createElement("p");

		buttons.className = "buttonfilter";

		buttonText.style.padding = "0 5px";
		buttonText.innerHTML = `${category.name}`;

		divFilter.appendChild(buttons);
		buttons.appendChild(buttonText);

		buttons.addEventListener("click", function () {
			galleryContainer.innerHTML = "";
			getWorks(category.id);
		});
	});
}

let buttonSelected = divFilter.getElementsByClassName("buttonfilter");
for (let i = 0; i < buttonSelected.length; i++) {
	buttonSelected[i].addEventListener("click", function () {
		let currentButton = document.getElementsByClassName("buttonSelected");
		currentButton[0].className = currentButton[0].className.replace(" buttonSelected", "");
		this.classList.add("buttonSelected");
	});
}
