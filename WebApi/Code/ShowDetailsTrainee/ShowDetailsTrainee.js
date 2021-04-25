// get Trainee object
let objShow = JSON.parse(sessionStorage.getItem("userShowTrainee"));
//console.log(objShow);

// show Trainee details
$('#first_name').text(objShow.firstName);
$('#last_name').text(objShow.lastName);
$('#user_name').text(objShow.userName);
$('#phone_number').text(objShow.phoneNumber);
$('#id').text(objShow.id);
$('#password').text(objShow.password);
$('#b_date').text(objShow.Bdate.substr(0, 10));
$('#gender').text(objShow.gender ? "זכר" : "נקבה");
$('#height').text(objShow.height);
$('#weight').text(objShow.weight);
$('#address').text(objShow.address);

$('#main_goal').text(objShow.Training_Goal);
$('#day_per_week').text(objShow.Amount_Of_Training_Per_Week);
$('#problem_area').text(objShow.Body_Problem);
$('#what_to_do').text(objShow.Perform_Exercises ? "לבצע תרגילים במשקלים נמוכים" : "לא לבצע תרגילים באזורים אלה");
$('#fitness').text(objShow.Fitness_Level);
