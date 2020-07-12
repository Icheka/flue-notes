/* function displayTime(){
    var clock = document.getElementById("clock");
    var now = new Date();
    clock.textContent = now.toLocaleTimeString();
    clock.style.textAlign = "center";
    setTimeout(displayTime, 1000);
} */
//window.onload =  main(); 

function confirm_local_storage(){
    if (typeof(Storage) !== "undefined"){
        return true;
    } else {
        alert("Local storage is not supported in your browser. Your notes will not be saved.");
        return false;
    }
}
function load_saved_note(){
    if (confirm_local_storage() == true){
        note = localStorage.getItem('note');
    }
    if (note === null){
        note = "You have no saved notes.";
    }
    document.getElementById("note-area").value = note;
}
function save_note(){
    if (confirm_local_storage() == true){
        var note = document.getElementById("note-area");
        if (note.value == "") {
            alert("Nothing to save!");
        } else {
            localStorage.setItem("note", note.value);
        }
    }
}
function clear_note(){
    document.getElementById("note-area").value = "";
}
function load_saved(){
    if ((confirm_local_storage()) == true){
        saved_note = localStorage.getItem("note");
        document.getElementById("note-area").value = saved_note;
        alert("Your saved note is ready for editing");
        simulate_body_click();
    } else {
        alert("Could not access your local storage!");
    }
}
function contact_developer(){
    var card = document.getElementById("contact-dev");
    var others = document.getElementsByClassName("card");
    for (var i = 0; i < others.length; ++i){
        others[i].style.visibility = "hidden";
    }
    card.style.display = "block";
    card.style.visibility = "visible";
    card.style.zIndex = "2";
    document.getElementById("menu-content").style.display = "none";
    clickOn = 0;
    document.getElementById("desktop-menu-content").style.display = "none";
    desktopClickOn = 0;
}
function simulate_body_click(){
    document.getElementById("note-area").click();
}
///////////////////////////////////////
menu = document.getElementById("menu");
var clickOn;
var desktopClickOn;
menu.onclick = function(){
    if (clickOn !== 1){
        document.getElementById("menu-content").style.display = "block";
        clickOn = 1;
    } else {
        document.getElementById("menu-content").style.display = "none";
        clickOn = 0;
    }
}
document.getElementById("note-area").onclick = function(){
    if (clickOn == 1){
        document.getElementById("menu-content").style.display = "none";
        clickOn = 0;
    }
    if (desktopClickOn == 1){
        document.getElementById("desktop-menu-content").style.display = "none";
        desktopClickOn = 0;
    }
    others = document.getElementsByClassName("card");
    for (var i = 0; i < others.length; ++i){
        others[i].style.visibility = "hidden";
    }
}
function desktop_menu_tab(){
    if (desktopClickOn != 1){
        document.getElementById("desktop-menu-content").style.display = "block";
        desktopClickOn = 1;
    } else {
        document.getElementById("desktop-menu-content").style.display = "none";
        desktopClickOn = 0;
    }
}
//////
function displayTime(){
    var clock = document.getElementById("clock");
    var now = new Date();
    clock.textContent = now.toLocaleTimeString();
    clock.style.textAlign = "center";
    setTimeout(displayTime, 1000);
}

window.addEventListener('online', onlinestatus);
window.addEventListener('offline', onlinestatus);

function onlinestatus(event){
    var status = document.getElementById("online-status");
    if (navigator.onLine){
        status.innerHTML = "ONLINE";
    } else {
        status.innerHTML = "OFFLINE";
    }
}

window.onload = function(){
    //document.documentElement.requestFullscreen();
    displayTime();
    onlinestatus();
}