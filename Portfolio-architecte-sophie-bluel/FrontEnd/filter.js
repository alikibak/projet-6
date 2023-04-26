import { getWorks } from "./work.js";
let token = sessionStorage.getItem("token");
const reponseCategories = await fetch("http://localhost:5678/api/categories");
const dataCategories = await reponseCategories.json();

const galleryContainer = document.querySelector(".gallery");

let divFilter = document.createElement("div");
divFilter.className = "filterContainer";
galleryContainer.parentNode.insertBefore(divFilter, galleryContainer);

if (token === null) {
	let buttons = document.createElement("button");
	let buttonText = document.createElement("p");
	buttons.className = "buttonfilter";
	buttons.classList.add("buttonSelected")

	buttonText.innerHTML = "Tous";
	divFilter.appendChild(buttons);
	buttons.appendChild(buttonText);

	buttons.addEventListener("click", function () {
		galleryContainer.innerHTML = "";
		getWorks(0);
	});
	dataCategories.forEach(function (category) {
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

let btns = divFilter.getElementsByClassName("buttonfilter");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("buttonSelected");
		current[0].className = current[0].className.replace(" buttonSelected", "");
		this.classList.add("buttonSelected");
	});
}
