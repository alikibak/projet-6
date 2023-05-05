import { workData } from "./work.js";

let token = sessionStorage.getItem("token");
let modalButton = document.querySelector(".pop_modale_portfolio");


if (token != null) {
	document.getElementById("Login").innerHTML = "logout";
	document.getElementById("Login").href = "./index.html";
	document.getElementById("Login").addEventListener("click", function () {
		sessionStorage.clear();
	});
	document.querySelector(".header_admin").style.display = "flex";
	document.querySelector(".pop_modale_introduction").style.display = "flex";
	modalButton.style.display = "flex";
}

modalButton.addEventListener("click", function () {
	document.querySelector(".modale").style.display = "block";
	getWorksModal();
});

const galleryModal = document.querySelector(".gallery_modale");

function getWorksModal() {
	workData.forEach(function (imageData) {
		let figure = document.createElement("figure");
		let image = document.createElement("img");
		let caption = document.createElement("a");
		let trashBinContainer = document.createElement("figure");
		let trashbin = document.createElement("i");

		trashBinContainer.className = "trashBinContainer";
		trashbin.className = "fa-solid fa-trash-can";

		image.src = `${imageData.imageUrl}`;
		caption.innerHTML = "éditer";

		galleryModal.appendChild(figure);
		figure.appendChild(image);
		figure.appendChild(caption);
		figure.appendChild(trashBinContainer);
		trashBinContainer.appendChild(trashbin);

		trashBinContainer.addEventListener("click", function (event) {
			event.preventDefault();
			fetch(`http://localhost:5678/api/works/${imageData.id}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		});
	});
}

document
	.getElementById("button_modale_modif")
	.addEventListener("click", function () {
		document.querySelector(".modale_modif").style.display = "none";
		document.querySelector(".modale_add").style.display = "block";
		document.querySelector(".back_modal").addEventListener("click", function () {
			document.querySelector(".modale_modif").style.display = "block";
			document.querySelector(".modale_add").style.display = "none";
		})
	});

let addPhotoButton = document.getElementById("button_modale_add");

addPhotoButton.addEventListener("click", async function () {
	let title = document.getElementById("titre").value;
	let file = document.getElementById("file").files[0];
	let categorie = document.getElementById("catégorie").value;

	const formData = new FormData();

	formData.append("image", file);
	formData.append("title", title);
	formData.append("category", categorie);

	await fetch("http://localhost:5678/api/works", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: formData,
	});
});

function previewImage(event) 
{
    const reader = new FileReader();
    reader.onload = function() {
        const element = document.getElementById('previewImage');
        element.src = reader.result;
    }
    reader.onerror = function() {
        const element = document.getElementById('errorMsg');
        element.value = "Couldn't load the image.";
    }
    reader.readAsDataURL(event.target.files[0]);
}

const input = document.getElementById('file');
input.addEventListener('change', (event) => {
    previewImage(event)
	document.querySelector(".fa-sharp").style.display = "none"
	document.querySelector(".label_file").style.display = "none"
	document.querySelector(".label_span").style.display = "none"
	document.querySelector("#previewImage").style.height = "169px"
});