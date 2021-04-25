// Register function
function Register() {
    let traineeToRegister = {
        First_Name: $("#first_name").val(),                   // firstName
        Last_Name: $("#last_name").val(),                     // lastName
        User_Name: $("#user_name").val(),                     // userName
        Trainee_Id: $("#id").val(),                           // id
        Password: $("#password").val(),                       // password
        Phone_Number: $("#phone_number").val(),               // phoneNumber
        Date_Of_Birth: $("#b_date").val(),                    // birth date
        Gender: $("#gender option:selected").text(),          // gender
        Height: $("#height").val(),                           // height
        Weight: $("#weight").val(),                           // weight
        Address: $("#address").val()                          // address
    };

    if ($("#first_name").val() == "" || $("#last_name").val() == "" || $("#user_name").val() == "" || $("#id").val() == "" || $("#password").val() == "" || $("#phone_number").val() == "" || $("#height").val() == null || $("#weight").val() == null || $("#address").val() == "" || $("#gender option:selected").text() == "בחר" || $("#b_date").val() == "") {
        $("#msg").html("אנא הזן נתונים בכל השדות");
    }
    else if ($("#id").val().length < 9 || $("#id").val().length > 9) {
        $("#msg").html("ת.ז חייבת להיות 9 ספרות");
    }
    else if (ExistId($("#id").val()).responseJSON == true) {
        $("#msg").html("ת.ז כבר קיימת במערכת");
    }
    else {
        sessionStorage.setItem("userRegister", JSON.stringify(traineeToRegister));
        window.location.href = '../NewTraineeRegistrationQuestion/NewTraineeRegistrationQuestion.html';
    }
    
}

function ExistId(id) {
    return $.ajax({
        async: false,
        dataType: "json",
        url: "/api/Trainee/" + id,
        contentType: "application/json; charset=utf-8",
        type: "GET"
    });
}
