// move Coach page
function Coach() {
    window.location.href = "../Client/TrianerLogin/TrainerLogin.html";
}

// move Trainee page
function Trainee() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
        window.location.href = 'LoginTrainee/LoginTrainee.html';
    }, 5000);
    
}