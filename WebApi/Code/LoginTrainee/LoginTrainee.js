// const variable
let STATUS = ["404", "405"];

// Hide password function
function HidePassword() {
    var x = document.getElementById("my_password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }

}

// Login function
function Login() {

    let id = $("#id_user").val();           // id
    let password = $("#my_password").val(); // password

    $.ajax({
        dataType: "json",
        url: `/api/Trainee/${id}/${password}`,
        contentType: "application/json",
        method: "GET",
        //data: JSON.stringify(),
        success: function (data) {
            let userObj = JSON.stringify({
                firstName: data.f_name,
                lastName: data.l_name,
                userName: data.user_name,
                id: data.id,
                password: data.password,
                phoneNumber: data.phone_number,
                birthDate: data.date_Of_birth,
                height: data.height,
                weight: data.weight,
                gender: data.gender,
                address: data.address,
                Amount_Of_Training_Per_Week: data.Amount_Of_Training_Per_Week,
                Perform_Exercises: data.Perform_Exercises,
                Training_Goal: data.Training_Goal,
                Fitness_Level: data.Fitness_Level,
                Body_Problem: data.Body_Problem
            });
            sessionStorage.setItem("userTrainee", userObj);
            MoveHomeScreenTrainee();
        },
        error: function (err) {
            if (err.status == STATUS[1]) {
                $("#msg").html("אנא הזן נתונים");
            }
            if (err.status == STATUS[0]) {
                $("#msg").html("הנתונים שהוזנו שגויים, אנא הזן נתונים תקינים");
            }
        }
    });
}

// Login function
function MoveHomeScreenTrainee() {
    window.location.href = '../HomeScreenTrainee/HomeScreenTrainee.html';
}

// Register function
function Registration() {
    window.location.href = '../NewTraineeRegistration/NewTraineeRegistration.html';
}