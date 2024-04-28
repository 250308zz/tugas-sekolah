const corUser = "admin"
const corPsw = "12345"

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

    if (username === corUser && password === corPsw ){
        alert("Login Successfull!")
    } 
    else {
        alert("Login failed")
    }