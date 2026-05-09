function showRegister(){

    document.getElementById("loginForm").classList.add("hidden");

    document.getElementById("registerForm").classList.remove("hidden");

    document.getElementById("message").innerText = "";
}

function showLogin(){

    document.getElementById("registerForm").classList.add("hidden");

    document.getElementById("loginForm").classList.remove("hidden");

    document.getElementById("message").innerText = "";
}


// REGISTER FUNCTION
function register(){

    let name = document.getElementById("registerName").value;

    let email = document.getElementById("registerEmail").value;

    let password = document.getElementById("registerPassword").value;


    if(name === "" || email === "" || password === ""){

        alert("Please fill all fields");

        return;
    }

    // SAVE DATA IN BROWSER STORAGE
    localStorage.setItem("email", email);

    localStorage.setItem("password", password);

    document.getElementById("message").innerText =
        "Registration Successful!";

    showLogin();
}


// LOGIN FUNCTION
function login(){

    let email = document.getElementById("loginEmail").value;

    let password = document.getElementById("loginPassword").value;


    let storedEmail = localStorage.getItem("email");

    let storedPassword = localStorage.getItem("password");


    if(email === storedEmail && password === storedPassword){

        document.getElementById("message").innerText =
            "Login Successful!";
    }
    else{

        alert("Invalid Email or Password");
    }
}