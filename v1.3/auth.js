function authenticate(){
    var passed = 0;
    email = document.getElementById("lock-email");
    password = document.getElementById("lock-password");
    if (email.value == ""){
        email.style.border = "1px solid red";
        email.style.borderBottom = "3px solid black";
    }
    if (password.value == ""){
        password.style.border = "1px solid red";
        password.style.borderBottom = "3px solid black";
    }
    if ((email.value == "icheka@me.com") && (password.value == "icheka4life")){
        var passed = 1;
    } else {
        var passed = 0;
    }
    if (passed == 1){
        alert("Welcome, Icheka");
        document.getElementById("coverscreen").style.display = "none";
        document.getElementById("lock-main").style.display = "none";
    } else {
        alert("Incorrect username and password!!!");
    }
}
