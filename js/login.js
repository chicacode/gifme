const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

console.log("Login page")

const register = () => {
    const registerName = document.querySelector("#email-field");
    const registerPassword = document.querySelector("#password-field");
    
    console.log("registerName", registerName)
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(registerName.value.length == 0){
        alert('Please fill in email');

    }else if(registerPassword.value.length == 0){
        alert('Please fill in password');

    }else if(registerName.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(registerPassword.value.length > 8){
        alert('Max of 8');

    }else if(!registerPassword.value.match(numbers)){
        alert('please add 1 number');

    }else if(!registerPassword.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!registerPassword.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', registerName.value);
        localStorage.setItem('password', registerPassword.value);
        alert("created account in")
        document.location.href="/login";
    }
}

const login = () =>{
    console.log("logeando");
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }

}
// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
// Ger!8s!j
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;
//     console.log("username", username)
//     if (username === "user" && password === "web_dev") {
//         document.location.href="/";
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })

// https://codepen.io/karleenchoie/pen/RwNaQzw