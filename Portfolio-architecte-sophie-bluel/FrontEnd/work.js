const box = document.querySelector(".gallery");

function getWorks(idWorks){
    fetch("http://localhost:5678/api/works")
        .then(function(response){
            return (response.json());
        })
        .then(function(data){
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


        })
        .catch(function(){
            console.log(error);
    })
}

getWorks(0)

let divFilter = document.createElement('div');
divFilter.className = 'filterContainer';
box.parentNode.insertBefore(divFilter, box);

let buttonsContainer = document.createElement("div");
let buttonText = document.createElement("p")
buttonsContainer.className = "buttonfilter";

buttonText.innerHTML = "Tous"
divFilter.appendChild(buttonsContainer);
buttonsContainer.appendChild(buttonText)


fetch("http://localhost:5678/api/categories")
    .then(function(response){
        return (response.json());
    })
    .then(function(data){
        
        data.forEach(function(category){
            let button = document.createElement("div");
            let buttonText = document.createElement("p")

            button.className = "buttonfilter";
            buttonText.style.padding = "0 15px"
            buttonText.innerHTML = `${category.name}`;

            divFilter.appendChild(button);
            button.appendChild(buttonText)
            
            button.addEventListener("click", function(){
                box.innerHTML= "";
                getWorks(category.id);
            }) 
        })
    })
    .catch(function(){
        console.log(error);
    })

    buttonsContainer.addEventListener("click", function(){
        box.innerHTML= "";
        getWorks(0);
    }) 
    