let Token = sessionStorage.getItem("token");

const box = document.querySelector(".gallery");

const reponse = await fetch("http://localhost:5678/api/works");
const data = await reponse.json();

export function getWorks(idWorks){
            if (idWorks != 0) {
                const dataTest = data.filter(photo => photo.categoryId === idWorks)
                dataTest.forEach(function(imageData){
                    let figure = document.createElement("figure");
                    let image = document.createElement("img");
                    let caption = document.createElement("figcaption");
                    
                    image.src = `${imageData.imageUrl}`;
                    caption.innerHTML = `${imageData.title}`;

                    box.appendChild(figure);
                    figure.appendChild(image);
                    figure.appendChild(caption);
                })
            } else {
                const dataTest = data
                dataTest.forEach(function(imageData){
                    let figure = document.createElement("figure");
                    let image = document.createElement("img");
                    let caption = document.createElement("figcaption");
                    
                    image.src = `${imageData.imageUrl}`;
                    caption.innerHTML = `${imageData.title}`;

                    box.appendChild(figure);
                    figure.appendChild(image);
                    figure.appendChild(caption);
                })
            }
        }

getWorks(0)

