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
async function register() {

    let name =
        document.getElementById("registerName").value;

    let email =
        document.getElementById("registerEmail").value;

    let password =
        document.getElementById("registerPassword").value;


    if(name === "" ||
       email === "" ||
       password === "")
    {
        alert("Please fill all fields");
        return;
    }

    try {

        let response = await fetch(
            "http://localhost:5000/register",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            }
        );

        let result = await response.text();

        document.getElementById("message")
            .innerText = result;

        showLogin();
    }
    catch(error) {

        console.log(error);

        alert("Server Error");
    }
}


// LOGIN FUNCTION
async function login() {

    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;

    try {

        let response = await fetch(
            "http://localhost:5000/login",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        let result = await response.text();

        document.getElementById("message")
            .innerText = result;
    }
    catch(error) {

        console.log(error);

        alert("Server Error");
    }
}