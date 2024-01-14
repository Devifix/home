let register = document.querySelector("#register");
register.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email2"); // Changed from "email" to "email2"
    let pw = document.getElementById("password");

    console.log("Email value: ", email.value); // Added for debugging
    console.log("Password value: ", pw.value); // Added for debugging

    let lower = /[a-z]/g;
    let upper = /[A-Z]/g;
    let num = /[0-9]/g;

    if(email.value.trim().length==0 && pw.value.trim().length==0){
        alert("Input email and password")
    }
    else if (email.value.trim().length == 0) {
        alert("Please input your email")
    }
        else if (pw.value.trim().length == 0) {
        alert("Please input your password")
    }
        else if (pw.value.trim().length < 8) {
        alert("Password must be at least 8 characters.")
    }  
        else if (!pw.value.trim().match(lower)) {
            alert("Password must  contain a lowercase letter")
    }
        else if (!pw.value.trim().match(upper)) {
        alert("Password must  contain a uppercase letter")
    }
        else if (!pw.value.trim().match(num)) {
        alert("Password must  contain a number or special character")
    }
    else{
        if(localStorage.users){
            let users = JSON.parse(localStorage.users);
            users.push({email:email.value.trim(), pw:pw.value.trim()});
            localStorage.setItem("users",JSON.stringify(users));
        }
        else{
            localStorage.setItem("users",JSON.stringify([{email:email.value.trim(), pw:pw.value.trim()}]));
        }
        location.replace("login.html");
    }
});