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