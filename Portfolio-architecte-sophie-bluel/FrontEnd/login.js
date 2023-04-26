let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", async function(){
    let email =   document.getElementById("email").value;
    let password =  document.getElementById("password").value;
    
    let user = {
        email: email,
        password: password
    };

    let responseLogin = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
    'Content-Type': "application/json"
    },
    body: JSON.stringify(user)
    });

    let resultLogin = await responseLogin.json();
    if (resultLogin.userId) {
        sessionStorage.clear();
        sessionStorage.setItem("userId",resultLogin.userId)
        sessionStorage.setItem("token",resultLogin.token);
        location.href = "./index.html";
    } else {
        sessionStorage.clear();
        alert("Email ou mot de passe invalide");
}
})


