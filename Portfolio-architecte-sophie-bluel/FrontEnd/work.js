const worksContainer = document.querySelector(".gallery");

export const workResponse = await fetch("http://localhost:5678/api/works");
export const workData = await workResponse.json();

export function getWorks(idWorks) {
	if (idWorks != 0) {
		const worksData = workData.filter((photo) => photo.categoryId === idWorks);
		worksData.forEach(function (imageData) {
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
		const worksData = workData;
		worksData.forEach(function (imageData) {
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
