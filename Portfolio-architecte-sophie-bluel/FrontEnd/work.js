const worksContainer = document.querySelector(".gallery");

export const responseWork = await fetch("http://localhost:5678/api/works");
export const dataWork = await responseWork.json();

export function getWorks(idWorks) {
	if (idWorks != 0) {
		const dataWorks = dataWork.filter((photo) => photo.categoryId === idWorks);
		dataWorks.forEach(function (imageData) {
			let figure = document.createElement("figure");
			let image = document.createElement("img");
			let caption = document.createElement("figcaption");

			image.src = `${imageData.imageUrl}`;
			caption.innerHTML = `${imageData.title}`;

			worksContainer.appendChild(figure);
			figure.appendChild(image);
			figure.appendChild(caption);
		});
	} else {
		const dataWorks = dataWork;
		dataWorks.forEach(function (imageData) {
			let figure = document.createElement("figure");
			let image = document.createElement("img");
			let caption = document.createElement("figcaption");

			image.src = `${imageData.imageUrl}`;
			caption.innerHTML = `${imageData.title}`;

			worksContainer.appendChild(figure);
			figure.appendChild(image);
			figure.appendChild(caption);
		});
	}
}

getWorks(0);
