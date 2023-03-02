const buttonSubmit = document.getElementById("button-submit");

const loginForm = document.getElementById("login-form");


function signUp(event){
    console.log("utils enter function")
    event.preventDefault()
    let email = document.getElementById("email-field").value;
    let password = document.getElementById("password-field").value;

    let user ={
        email: email,
        password: password,
    }

    let json = JSON.stringify(user)
    localStorage.setItem("email", json)

    console.log("user",user)
    console.log("json",json)
    console.log("pasword",password)

    window.location.href = './login.html'
}


buttonSubmit.addEventListener("click",signUp)