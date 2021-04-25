// get Trainee object
let objUpdate = JSON.parse(sessionStorage.getItem("userUpdateTrainee"));
let ERROR = "404";

$('#first_name').val(objUpdate.firstName);
$('#last_name').val(objUpdate.lastName);
$('#user_name').val(objUpdate.userName);
$('#phone_number').val(objUpdate.phoneNumber);
$('#id').val(objUpdate.id);
$('#password').val(objUpdate.password);
//$('#b_date').val(objUpdate.Bdate);
//$('#gender').text(objUpdate.gender);
$('#height').val(objUpdate.height);
$('#weight').val(objUpdate.weight);
$('#address').val(objUpdate.address);

// function update Trainee details
function UpdateTrainee() {
    let traineeToUpdate = {
        First_Name: $("#first_name").val(),                                     // firstName
        Last_Name: $("#last_name").val(),                                       // lastName
        User_Name: $("#user_name").val(),                                       // userName
        Trainee_Id: $("#id").val(),                                             // id
        Password: $("#password").val(),                                         // password
        Phone_Number: $("#phone_number").val(),                                 // phoneNumber
        Date_Of_Birth: $("#b_date").val(),                                      // birth date
        Gender: $("#gender option:selected").text() == 'זכר' ? true : false,    // gender
        Height: $("#height").val(),                                             // height
        Weight: $("#weight").val(),                                             // weight
        Address: $("#address").val(),                                           // address
        Amount_Of_Training_Per_Week: objUpdate.Amount_Of_Training_Per_Week,
        Perform_Exercises: objUpdate.Perform_Exercises,
        Training_Goal: objUpdate.Training_Goal,
        Fitness_Level: objUpdate.Fitness_Level,
        Body_Problem: objUpdate.Body_Problem
    };

    $.ajax({
        dataType: "json",
        url: "/api/Trainee",
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify(traineeToUpdate),
        success: function (data) {
            GetTrainee();
        },
        error: function (err) {
            if (err == false) {
                alert("שגיאה");
            }
        }
    });

    // function get Trainee details
    function GetTrainee() {
        $.ajax({
            dataType: "json",
            url: `/api/Trainee/${$("#id").val()}/${$("#password").val()}`,
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
                window.location.href = '../HomeScreenTrainee/HomeScreenTrainee.html';
            },
            error: function (err) {
                if (err.status == ERROR) {
                    alert("שגיאה");
                }
            }
        });
    }

    //console.log('alive');
}
