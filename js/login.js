const loginButton = document.getElementById("login-form-submit");

const loginErrorMsg = document.getElementById("login-error-msg");

function login(event){
  
    event.preventDefault();
   
        let storedName = window.localStorage.getItem("email");
        const obj = JSON.parse(storedName);

    let userName = document.getElementById('email-field').value;
    let userPassword = document.getElementById('password-field').value;
    console.log("username", userName);
    if(userName == obj.email && userPassword == obj.password){
        console.log("entro en if")
        window.location.href = './index.html'
    }else{
        loginErrorMsg.style.opacity = 1;
    }
}

loginButton.addEventListener("click", login)