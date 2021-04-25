// get Trainee object
$(document).ready(ShowHistory);
let objHistory = JSON.parse(sessionStorage.getItem("userHistoryPrograms"));
let ERROR = "404";

// ShowHistory function
function ShowHistory() {
    //get History Trianee Training Programs
    $.ajax({
        url: "/api/TraineeProgram/history/" + objHistory.id,
        type: "get",
        dataType: "json",
        contentType: "application/json",
        //data: JSON.stringify(),
        success: function (data) {

            //clear thead and tbody
            $("#title_history_trainee").empty();
            $("#history_trainee").empty();

            //fill thead
            $("#title_history_trainee").append(`<tr>
                                            <th colspan="6" style="color:red; font-size: 20px;">היסטוריה</th>
                                          </tr>
                                          <tr>
                                            <td>תאריך</td>
                                            <td>קב' שרירים</td>
                                            <td>שם התרגיל</td>
                                            <td>סטים</td>
                                            <td>חזרות</td>
                                            <td>משקל</td>
                                      </tr>`);

            console.log('------History------');
            console.log('------History------');
            console.log('------History------');
            console.log('------History------');
            console.log('---------->>' + data.traineeHistory.length);

            for (let i = 0; i < data.traineeHistory.length; i++) {

                //test
                console.log('-------------');
                console.log('data =>' + data.traineeHistory[i].Creation_Date.substring(8, 10) + '/' + data.traineeHistory[i].Creation_Date.substring(5, 7) + '/' + data.traineeHistory[i].Creation_Date.substring(0, 4));
                console.log('data =>' + data.traineeHistory[i].Category);
                console.log('data =>' + data.traineeHistory[i].Facility_Name);
                console.log('data =>' + data.traineeHistory[i].Amount_Of_Personal_Repetitions);
                console.log('data =>' + data.traineeHistory[i].Personal_Weight_To_Lift);
                console.log('-------------');

                //fill tbody
                $("#history_trainee").append(`<tr>
                                            <td>${data.traineeHistory[i].Creation_Date.substring(8, 10)}/${data.traineeHistory[i].Creation_Date.substring(5, 7)}/${data.traineeHistory[i].Creation_Date.substring(0, 4)}</td>
                                            <td>${data.traineeHistory[i].Category}</td>
                                            <td>${data.traineeHistory[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.traineeHistory[i].Amount_Of_Personal_Repetitions}</td>
                                            <td>${data.traineeHistory[i].Personal_Weight_To_Lift}</td>
                                        </tr>`);
            }
        },
        error: function (err) {
            if (err.status == ERROR) {
                alert("שגיאה");
            }
        }
    });
}

