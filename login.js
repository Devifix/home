let login = document.getElementById("login");
login.addEventListener("submit", (e) => {
    e.preventDefault();
    if(localStorage.users){
        let users =JSON.parse(localStorage.users);
        let email =document.getElementById("email2").value.trim();
        let pw = document.getElementById("password").value.trim();
        let foundUser = users.find(users => users.email === email && users.pw === pw);

        if(foundUser){
            window.location.href="logout.html"
        }
        else{
            alert("Please type again");
        }
        
    }
    else{
        alert("No user found")
    }
}

)