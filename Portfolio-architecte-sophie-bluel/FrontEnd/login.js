let summit = document.getElementById("summit");



summit.addEventListener("click", async function(){
    let Email =   document.getElementById("email").value;
    let Password =  document.getElementById("password").value;
    
    let user = {
        email: Email,
        password: Password
    };

    let response = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
    'Content-Type': "application/json"
    },
    body: JSON.stringify(user)
    });

    let result = await response.json();
    if (result.userId === 1) {
        sessionStorage.clear();
        sessionStorage.setItem("token",result.token);
        let token = sessionStorage.getItem("token");
        location.href = "./index.html";
    } else {
        alert("casse toi de là mec");
}
})


