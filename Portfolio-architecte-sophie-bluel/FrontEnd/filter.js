import {getWorks} from "./work.js"
const box = document.querySelector(".gallery");

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
    