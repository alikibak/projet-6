import {getWorks} from "./work.js";

const box = document.querySelector(".gallery");

let divFilter = document.createElement('div');
divFilter.className = 'filter';
divFilter.style.display = "flex"
divFilter.style.margin = "51px 0px"
divFilter.style.justifyContent = "center"
divFilter.style.gap = "10px";
box.parentNode.insertBefore(divFilter, box);

let buttonsContainer = document.createElement("div");
let buttonText = document.createElement("p")
buttonsContainer.className = "buttonFilter";
buttonsContainer.style.color = "#1D6154";
buttonsContainer.style.border = "1px solid #1D6154";
buttonsContainer.style.borderRadius = "60px";
buttonsContainer.style.height = "37px";
buttonsContainer.style.fontSize = "16px"
buttonsContainer.style.fontWeight = "700";
buttonsContainer.style.alignItems = "center";
buttonsContainer.style.justifyContent = "center";
buttonsContainer.style.fontFamily = "Syne";
buttonsContainer.style.minWidth = "100px";
buttonsContainer.style.display ="flex";

buttonText.innerHTML = "Tous"
divFilter.appendChild(buttonsContainer);
buttonsContainer.appendChild(buttonText)


fetch("http://localhost:5678/api/categories")
    .then(function(response){
        return (response.json());
    })
    .then(function(data){
        
        data.map(function(category){
            let button = document.createElement("div");
            let buttonText = document.createElement("p")

            button.className = "buttonFilter";
            button.style.color = "#1D6154";
            button.style.border = "1px solid #1D6154";
            button.style.borderRadius = "60px";
            button.style.height = "37px";
            button.style.fontSize = "16px"
            button.style.fontWeight = "700";
            button.style.alignItems = "center";
            button.style.justifyContent = "center";
            button.style.fontFamily = "Syne";
            button.style.minWidth = "100px";
            button.style.display ="flex"
            buttonText.style.padding = "0 15px"
            buttonText.innerHTML = `${category.name}`;

            divFilter.appendChild(button);
            button.appendChild(buttonText)
            
            button.addEventListener("click", () => getWorks(1) ) 
        })
    })
    .catch(function(){
        console.log(error);
    })

    buttonsContainer.addEventListener ("click" , getWorks(0) )