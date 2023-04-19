import { getWorks } from "./work.js";
let token = sessionStorage.getItem("token");
const reponse = await fetch("http://localhost:5678/api/categories");
const data = await reponse.json();

const box = document.querySelector(".gallery");

let divFilter = document.createElement("div");
divFilter.className = "filterContainer";
box.parentNode.insertBefore(divFilter, box);

if (token === null) {
	let buttonsContainer = document.createElement("button");
	let buttonText = document.createElement("p");
	buttonsContainer.className = "buttonfilter";

	buttonText.innerHTML = "Tous";
	divFilter.appendChild(buttonsContainer);
	buttonsContainer.appendChild(buttonText);

	buttonsContainer.addEventListener("click", function () {
		box.innerHTML = "";
		getWorks(0);
	});
}

function addButtons() {
	if (token === null) {
		data.forEach(function (category) {
			let button = document.createElement("button");
			let buttonText = document.createElement("p");

			button.className = "buttonfilter";

			buttonText.style.padding = "0 5px";
			buttonText.innerHTML = `${category.name}`;

			divFilter.appendChild(button);
			button.appendChild(buttonText);

			button.addEventListener("click", function () {
				box.innerHTML = "";
				getWorks(category.id);
			});
		});
	}
}

addButtons();

