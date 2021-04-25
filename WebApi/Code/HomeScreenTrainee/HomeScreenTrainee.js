
let obj;
$(document).ready(function () {

    // get Trainee object
    obj = JSON.parse(sessionStorage.getItem("userTrainee"));
    // display full name
    $('#name_message').text(obj.firstName + " " + obj.lastName);
    //console.log(obj);
});

// show Trainee details
function ShowDetails() {

    let userObjShow = {
        firstName: obj.firstName,
        lastName: obj.lastName,
        userName: obj.userName,
        id: obj.id,
        password: obj.password,
        phoneNumber: obj.phoneNumber,
        Bdate: obj.birthDate,
        gender: obj.gender,
        height: obj.height,
        weight: obj.weight,
        address: obj.address,
        Amount_Of_Training_Per_Week: obj.Amount_Of_Training_Per_Week,
        Perform_Exercises: obj.Perform_Exercises,
        Training_Goal: obj.Training_Goal,
        Fitness_Level: obj.Fitness_Level,
        Body_Problem: obj.Body_Problem
    };
    //console.log(obj);
    sessionStorage.setItem("userShowTrainee", JSON.stringify(userObjShow));
    window.location.href = '../ShowDetailsTrainee/ShowDetailsTrainee.html';
}

// update Trainee details
function UpdateDetails() {

    let userObjUpdate = {
        firstName: obj.firstName,
        lastName: obj.lastName,
        userName: obj.userName,
        id: obj.id,
        password: obj.password,
        phoneNumber: obj.phoneNumber,
        Bdate: obj.birthDate,
        gender: obj.gender,
        height: obj.height,
        weight: obj.weight,
        address: obj.address,
        Amount_Of_Training_Per_Week: obj.Amount_Of_Training_Per_Week,
        Perform_Exercises: obj.Perform_Exercises,
        Training_Goal: obj.Training_Goal,
        Fitness_Level: obj.Fitness_Level,
        Body_Problem: obj.Body_Problem
    };
    //console.log(obj);
    sessionStorage.setItem("userUpdateTrainee", JSON.stringify(userObjUpdate));
    window.location.href = '../UpdateDetailsTrainee/UpdateDetailsTrainee.html';
}

// show Calorie calculator
function ShowCal() {

    let userObjCalc = {
        Bdate: obj.birthDate,
        gender: obj.gender,
        height: obj.height,
        weight: obj.weight
    };
    sessionStorage.setItem("userCalc", JSON.stringify(userObjCalc));
    window.location.href = '../CalorieCalculator/CalorieCalculator.html';
}

// show Trainee Program
function ShowTraineeProgram() {

    let userShowTraineeProgram = {
        firstName: obj.firstName,
        lastName: obj.lastName,
        userName: obj.userName,
        id: obj.id,
        password: obj.password,
        phoneNumber: obj.phoneNumber,
        Bdate: obj.birthDate,
        gender: obj.gender,
        height: obj.height,
        weight: obj.weight,
        address: obj.address,
        Amount_Of_Training_Per_Week: obj.Amount_Of_Training_Per_Week,
        Perform_Exercises: obj.Perform_Exercises,
        Training_Goal: obj.Training_Goal,
        Fitness_Level: obj.Fitness_Level,
        Body_Problem: obj.Body_Problem
    };
    sessionStorage.setItem("userProgram", JSON.stringify(userShowTraineeProgram));
    window.location.href = '../ShowTraineeProgram/ShowTraineeProgram.html';
}

// show Trainee program history
function ShowHistoryTraineeProgram() {

    let usershowHistoryTraineePrograms = {
        firstName: obj.firstName,
        lastName: obj.lastName,
        userName: obj.userName,
        id: obj.id,
        password: obj.password,
        phoneNumber: obj.phoneNumber,
        Bdate: obj.birthDate,
        gender: obj.gender,
        height: obj.height,
        weight: obj.weight,
        address: obj.address,
        Amount_Of_Training_Per_Week: obj.Amount_Of_Training_Per_Week,
        Perform_Exercises: obj.Perform_Exercises,
        Training_Goal: obj.Training_Goal,
        Fitness_Level: obj.Fitness_Level,
        Body_Problem: obj.Body_Problem
    };
    sessionStorage.setItem("userHistoryPrograms", JSON.stringify(usershowHistoryTraineePrograms));
    window.location.href = '../ShowHistoryTraineePrograms/ShowHistoryTraineePrograms.html';
}

