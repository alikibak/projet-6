let token = sessionStorage.getItem("token");
let modal = document.querySelector(".pop_modale_portfolio");
let userId = sessionStorage.getItem("userId");

const reponse = await fetch("http://localhost:5678/api/works");
const data = await reponse.json();

if (token != null) {
	document.getElementById("Login").innerHTML = "logout";
	document.getElementById("Login").href = "./index.html";
	document.getElementById("Login").addEventListener("click", function () {
		sessionStorage.clear();
	});
	document.querySelector(".header_admin").style.display = "flex";
	document.querySelector(".pop_modale_introduction").style.display = "flex";
	modal.style.display = "flex";
}

modal.addEventListener("click", function () {
	document.querySelector(".modale").style.display = "block";
});

const worksContainerModal = document.querySelector(".gallery_modale");

function getWorksModal() {
	data.forEach(function (imageData) {
		let figure = document.createElement("figure");
		let image = document.createElement("img");
		let caption = document.createElement("a");

		image.src = `${imageData.imageUrl}`;
		caption.innerHTML = "éditer";

		worksContainerModal.appendChild(figure);
		figure.appendChild(image);
		figure.appendChild(caption);


		figure.addEventListener("click", async function () {
			fetch(
				`http://localhost:5678/api/works/${imageData.id}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
		});
	});
}

getWorksModal();

document
	.getElementById("button_modale_modif")
	.addEventListener("click", function () {
		document.querySelector(".modale_modif").style.display = "none";
		document.querySelector(".modale_add").style.display = "block";
	});

let addPhoto = document.getElementById("button_modale_add");

addPhoto.addEventListener("click", async function () {
	let title = document.getElementById("titre").value;
	let file = document.getElementById("file").files[0];
	let categorie = document.getElementById("catégorie").value;

	let works = {
		image: file,
		title: title,
		category: categorie,
	};

	const formData = new FormData();

	formData.append("image", file);
	formData.append("title", title);
	formData.append("category", categorie);

	let reponse = await fetch("http://localhost:5678/api/works", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: formData,
	});
});
