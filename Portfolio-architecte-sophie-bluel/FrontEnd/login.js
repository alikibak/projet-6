let summit = document.getElementById("summit");



summit.addEventListener("click", async function(){
    let email =   document.getElementById("email").value;
    let password =  document.getElementById("password").value;
    
    let user = {
        email: email,
        password: password
    };

    let reponse = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
    'Content-Type': "application/json"
    },
    body: JSON.stringify(user)
    });

    let result = await reponse.json();
    if (result.userId === 1) {
        sessionStorage.clear();
        sessionStorage.setItem("userId",result.userId)
        sessionStorage.setItem("token",result.token);
        location.href = "./index.html";
    } else {
        sessionStorage.clear();
        alert("casse toi de là mec");
        location.href = "./login.html";
}
})


