$(document).ready(FullBodyOrNot);

let objProgram = JSON.parse(sessionStorage.getItem("userProgram"));
let ERROR = "404";

// Check if AB Or Full Body Program
function FullBodyOrNot() {
    // if day per week between 1-3, Show just A table
    if (objProgram.Amount_Of_Training_Per_Week >= 1 && objProgram.Amount_Of_Training_Per_Week <= 3) {
        $("#A").css("margin-right", "25%");
        $("#B").hide();
        ShowFullBody();
    }
    else {
        ShowA();
    }

}

// Show A table
function ShowA() {

    //get Trianee Training Programs A
    $.ajax({
        url: "/api/TraineeProgram/" + objProgram.id,
        type: "get",
        dataType: "json",
        contentType: "application/json",
        //data: JSON.stringify(),
        success: function (data) {

            //clear thead and tbody
            $("#title_trainee_A").empty();
            $("#trainee_A").empty();

            //fill thead
            $("#title_trainee_A").append(`<tr>
                                          <th colspan="8" style="color:red">A</th>
                                          </tr>
                                          <tr>
                                          <td>קב' שרירים</td>
                                          <td>שם התרגיל</td>
                                          <td>סטים</td>
                                          <td>המלצת חזרות</td>
                                          <td>המלצת משקל</td>
                                          <td>חזרות</td>
                                          <td>משקל</td>
                                          <td></td>
                                      </tr>`);

            console.log('------A------');
            console.log('------A------');
            console.log('------A------');
            console.log('------A------');
            console.log('---------->>' + data.trainingProgram.length);

            for (let i = 0; i < data.trainingProgram.length; i++) {

                //test
                console.log('-------------');
                console.log('data =>' + data.trainingProgram[i].Facility_Code);
                console.log('data =>' + data.trainingProgram[i].Category);
                console.log('data =>' + data.trainingProgram[i].Facility_Name);
                console.log('data =>' + data.trainingProgram[i].Amount_Of_Recommended_Repetitions);
                console.log('data =>' + data.trainingProgram[i].Recommended_Weight_To_Lift);
                console.log('data =>' + data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                console.log('data =>' + data.trainingProgram[i].Personal_Weight_To_Lift);
                console.log('day =>' + data.trainingProgram[i].Days_to_Train);
                console.log('-------------');

                //fill tbody
                if (i % 3 == 0 && (data.trainingProgram[i].Days_to_Train == 'A' || data.trainingProgram[i].Days_to_Train == 'C')) {
                    $("#trainee_A").append(`<tr>
                                            <td rowspan="3" style="border-bottom:2px solid black">${data.trainingProgram[i].Category}</td>
                                            <td>${data.trainingProgram[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.trainingProgram[i].Amount_Of_Recommended_Repetitions}</td>
                                            <td>${data.trainingProgram[i].Recommended_Weight_To_Lift}</td>
                                            <td><input class="repet${i}" style="width:60px" /></td>
                                            <td><input class="line${i}" style="width:60px" /></td>
                                            <td><button class="btn${i}"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
                                        </tr>`);
                    $(".line" + i).val(data.trainingProgram[i].Personal_Weight_To_Lift);
                    $(".repet" + i).val(data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                    if (data.trainingProgram[i].Days_to_Train == 'C') { $(".line" + i).val(''); }
                    UpdateTraineeProgram();
                }
                else if (i % 3 == 2 && (data.trainingProgram[i].Days_to_Train == 'A' || data.trainingProgram[i].Days_to_Train == 'C')) {
                    $("#trainee_A").append(`<tr style="border-bottom:2px solid black">
                                            <td>${data.trainingProgram[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.trainingProgram[i].Amount_Of_Recommended_Repetitions}</td>
                                            <td>${data.trainingProgram[i].Recommended_Weight_To_Lift}</td>
                                            <td><input class="repet${i}" style="width:60px" /></td>
                                            <td><input class="line${i}" style="width:60px" /></td>
                                            <td><button class="btn${i}"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
                                        </tr>`);
                    $(".line" + i).val(data.trainingProgram[i].Personal_Weight_To_Lift);
                    $(".repet" + i).val(data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                    if (data.trainingProgram[i].Days_to_Train == 'C') { $(".line" + i).val(''); }
                    UpdateTraineeProgram();
                }
                else if (data.trainingProgram[i].Days_to_Train == 'A' || data.trainingProgram[i].Days_to_Train == 'C') {
                    $("#trainee_A").append(`<tr>
                                            <td>${data.trainingProgram[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.trainingProgram[i].Amount_Of_Recommended_Repetitions}</td>
                                            <td>${data.trainingProgram[i].Recommended_Weight_To_Lift}</td>
                                            <td><input class="repet${i}" style="width:60px" /></td>
                                            <td><input class="line${i}" style="width:60px" /></td>
                                            <td><button class="btn${i}"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
                                        </tr>`);
                    $(".line" + i).val(data.trainingProgram[i].Personal_Weight_To_Lift);
                    $(".repet" + i).val(data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                    if (data.trainingProgram[i].Days_to_Train == 'C') { $(".line" + i).val(''); }
                    UpdateTraineeProgram();
                }

                //update Trianee Training Programs
                function UpdateTraineeProgram() {
                    $(".btn" + i).click(function () {

                        let add_history = {
                            Trainee_Id: objProgram.id,
                            Amount_Of_Personal_Repetitions: data.trainingProgram[i].Amount_Of_Personal_Repetitions,
                            Personal_Weight_To_Lift: data.trainingProgram[i].Personal_Weight_To_Lift,
                            Creation_Date: new Date(),
                            Facility_Code: data.trainingProgram[i].Facility_Code
                        };
                        //console.log(add_history);
                        InsertHistory(add_history);
                      
                        let update_trainee_program = {
                            Amount_Of_Personal_Repetitions: parseInt($(".repet" + i).val()),
                            Personal_Weight_To_Lift: parseInt($(".line" + i).val()),
                            Facility_Recommendation_Code_For_Trainee: data.trainingProgram[i].Facility_Recommendation_Code_For_Trainee
                        };
                        //console.log(update_trainee_program);
                        //console.log($(".line" + i).val() + ', ' + $(".repet" + i).val() + ', ' + update_trainee_program.Facility_Recommendation_Code_For_Trainee);
                        UpdateTraineeProgramTotal(update_trainee_program);

                    })  
                }
            }

            //call function ShowB()
            ShowB();
        },
        error: function (err) {
            if (err.status == ERROR) {
                alert("שגיאה");
            }
        }
    });
}

// Show B table
function ShowB() {
    //get Trianee Training Programs B
    $.ajax({
        url: "/api/TraineeProgram/" + objProgram.id,
        type: "get",
        dataType: "json",
        contentType: "application/json",
        //data: JSON.stringify(),
        success: function (data) {

            //clear thead and tbody
            $("#title_trainee_B").empty();
            $("#trainee_B").empty();

            //fill thead
            $("#title_trainee_B").append(`<tr>
                                          <th colspan="8" style="color:red">B</th>
                                          </tr>
                                          <tr>
                                          <td>קב' שרירים</td>
                                          <td>שם התרגיל</td>
                                          <td>סטים</td>
                                          <td>המלצת חזרות</td>
                                          <td>המלצת משקל</td>
                                          <td>חזרות</td>
                                          <td>משקל</td>
                                          <td></td>
                                      </tr>`);

            console.log('------B------');
            console.log('------B------');
            console.log('------B------');
            console.log('------B------');

            for (let i = 0; i < data.trainingProgram.length; i++) {

                //test
                console.log('-------------');
                console.log('data =>' + data.trainingProgram[i].Facility_Code);
                console.log('data =>' + data.trainingProgram[i].Category);
                console.log('data =>' + data.trainingProgram[i].Facility_Name);
                console.log('data =>' + data.trainingProgram[i].Amount_Of_Recommended_Repetitions);
                console.log('data =>' + data.trainingProgram[i].Recommended_Weight_To_Lift);
                console.log('data =>' + data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                console.log('data =>' + data.trainingProgram[i].Personal_Weight_To_Lift);
                console.log('day =>' + data.trainingProgram[i].Days_to_Train);
                console.log('-------------');

                //fill tbody
                if (i % 3 == 0 && (data.trainingProgram[i].Days_to_Train == 'B' || data.trainingProgram[i].Days_to_Train == 'C')) {
                    $("#trainee_B").append(`<tr>
                                            <td rowspan="3" style="border-bottom:2px solid black">${data.trainingProgram[i].Category}</td>
                                            <td>${data.trainingProgram[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.trainingProgram[i].Amount_Of_Recommended_Repetitions}</td>
                                            <td>${data.trainingProgram[i].Recommended_Weight_To_Lift}</td>
                                            <td><input class="repet${i}" style="width:60px" /></td>
                                            <td><input class="line${i}" style="width:60px" /></td>
                                            <td><button class="btn${i}"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
                                        </tr>`);
                    $(".line" + i).val(data.trainingProgram[i].Personal_Weight_To_Lift);
                    $(".repet" + i).val(data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                    if (data.trainingProgram[i].Days_to_Train == 'C') { $(".line" + i).val(''); }
                    UpdateTraineeProgram();
                }
                else if (i % 3 == 2 && (data.trainingProgram[i].Days_to_Train == 'B' || data.trainingProgram[i].Days_to_Train == 'C')) {
                    $("#trainee_B").append(`<tr style="border-bottom:2px solid black">
                                            <td>${data.trainingProgram[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.trainingProgram[i].Amount_Of_Recommended_Repetitions}</td>
                                            <td>${data.trainingProgram[i].Recommended_Weight_To_Lift}</td>
                                            <td><input class="repet${i}" style="width:60px" /></td>
                                            <td><input class="line${i}" style="width:60px" /></td>
                                            <td><button class="btn${i}"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
                                        </tr>`);
                    $(".line" + i).val(data.trainingProgram[i].Personal_Weight_To_Lift);
                    $(".repet" + i).val(data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                    if (data.trainingProgram[i].Days_to_Train == 'C') { $(".line" + i).val(''); }
                    UpdateTraineeProgram();
                }
                else if (data.trainingProgram[i].Days_to_Train == 'B' || data.trainingProgram[i].Days_to_Train == 'C') {
                    $("#trainee_B").append(`<tr>
                                            <td>${data.trainingProgram[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.trainingProgram[i].Amount_Of_Recommended_Repetitions}</td>
                                            <td>${data.trainingProgram[i].Recommended_Weight_To_Lift}</td>
                                            <td><input class="repet${i}" style="width:60px" /></td>
                                            <td><input class="line${i}" style="width:60px" /></td>
                                            <td><button class="btn${i}"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
                                        </tr>`);
                    $(".line" + i).val(data.trainingProgram[i].Personal_Weight_To_Lift);
                    $(".repet" + i).val(data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                    if (data.trainingProgram[i].Days_to_Train == 'C') { $(".line" + i).val(''); }
                    UpdateTraineeProgram();
                }

                //update Trianee Training Programs
                function UpdateTraineeProgram() {
                    $(".btn" + i).click(function () {

                        let add_history_2 = {
                            Trainee_Id: objProgram.id,
                            Amount_Of_Personal_Repetitions: data.trainingProgram[i].Amount_Of_Personal_Repetitions,
                            Personal_Weight_To_Lift: data.trainingProgram[i].Personal_Weight_To_Lift,
                            Creation_Date: new Date(),
                            Facility_Code: data.trainingProgram[i].Facility_Code
                        };
                        InsertHistory(add_history_2);

                        let update_trainee_program_2 = {
                            Amount_Of_Personal_Repetitions: parseInt($(".repet" + i).val()),
                            Personal_Weight_To_Lift: parseInt($(".line" + i).val()),
                            Facility_Recommendation_Code_For_Trainee: data.trainingProgram[i].Facility_Recommendation_Code_For_Trainee
                        };
                        //console.log(update_trainee_program_2);
                        //console.log($(".line" + i).val() + ', ' + $(".repet" + i).val() + ', ' + update_trainee_program_2.Facility_Recommendation_Code_For_Trainee);
                        UpdateTraineeProgramTotal(update_trainee_program_2);

                    })
                }
            }
        },
        error: function (err) {
            if (err.status == ERROR) {
                alert("שגיאה");
            }
        }
    });

}

// add Trianee Training Program to history
function InsertHistory(add_history) {
    $.ajax({
        url: "/api/TraineeProgram/history",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(add_history),
        success: function (data) {
            console.log("--------");
        },
        error: function (err) {
            if (err == false) {
                alert("שגיאה");
            }
        }
    });
}

// update Trianee Training Program
function UpdateTraineeProgramTotal(update_trainee_program) {
    $.ajax({
        url: "/api/TraineeProgram",
        type: "PUT",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(update_trainee_program),
        success: function (data) {
            if (data == true) {
                console.log("data ******** ---------- //////");
            }
            
            console.log("--------");
        },
        error: function (err) {
            if (err == false) {
                alert("שגיאה");
            }
        }
    });
}

// Show FullBody table
function ShowFullBody() {

    //get Trianee Training Programs FullBody(A)
    $.ajax({
        url: "/api/TraineeProgram/" + objProgram.id,
        type: "get",
        dataType: "json",
        contentType: "application/json",
        //data: JSON.stringify(),
        success: function (data) {

            //clear thead and tbody
            $("#title_trainee_A").empty();
            $("#trainee_A").empty();

            //fill thead
            $("#title_trainee_A").append(`<tr>
                                          <th colspan="8" style="color:red">FullBody</th>
                                          </tr>
                                          <tr>
                                          <td>קב' שרירים</td>
                                          <td>שם התרגיל</td>
                                          <td>סטים</td>
                                          <td>המלצת חזרות</td>
                                          <td>המלצת משקל</td>
                                          <td>חזרות</td>
                                          <td>משקל</td>
                                          <td></td>
                                      </tr>`);

            console.log('------A------');
            console.log('------A------');
            console.log('------A------');
            console.log('------A------');
            console.log('---------->>' + data.trainingProgram.length);

            for (let i = 0; i < data.trainingProgram.length; i++) {

                //test
                console.log('-------------');
                console.log('data =>' + data.trainingProgram[i].Facility_Code);
                console.log('data =>' + data.trainingProgram[i].Category);
                console.log('data =>' + data.trainingProgram[i].Facility_Name);
                console.log('data =>' + data.trainingProgram[i].Amount_Of_Recommended_Repetitions);
                console.log('data =>' + data.trainingProgram[i].Recommended_Weight_To_Lift);
                console.log('data =>' + data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                console.log('data =>' + data.trainingProgram[i].Personal_Weight_To_Lift);
                console.log('day =>' + data.trainingProgram[i].Days_to_Train);
                console.log('-------------');

                //fill tbody
                if (i % 3 == 0 && (data.trainingProgram[i].Days_to_Train == 'A' || data.trainingProgram[i].Days_to_Train == 'C')) {
                    $("#trainee_A").append(`<tr>
                                            <td rowspan="2" style="border-bottom:2px solid black">${data.trainingProgram[i].Category}</td>
                                            <td>${data.trainingProgram[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.trainingProgram[i].Amount_Of_Recommended_Repetitions}</td>
                                            <td>${data.trainingProgram[i].Recommended_Weight_To_Lift}</td>
                                            <td><input class="repet${i}" style="width:60px" /></td>
                                            <td><input class="line${i}" style="width:60px" /></td>
                                            <td><button class="btn${i}"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
                                        </tr>`);
                    $(".line" + i).val(data.trainingProgram[i].Personal_Weight_To_Lift);
                    $(".repet" + i).val(data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                    if (data.trainingProgram[i].Days_to_Train == 'C') { $(".line" + i).val(''); }
                    UpdateTraineeProgram();
                }
                else if (i % 3 == 2 && (data.trainingProgram[i].Days_to_Train == 'A' || data.trainingProgram[i].Days_to_Train == 'C')) {
                    $("#trainee_A").append(`<tr style="border-bottom:2px solid black">
                                            <td>${data.trainingProgram[i].Facility_Name}</td>
                                            <td>4</td>
                                            <td>${data.trainingProgram[i].Amount_Of_Recommended_Repetitions}</td>
                                            <td>${data.trainingProgram[i].Recommended_Weight_To_Lift}</td>
                                            <td><input class="repet${i}" style="width:60px" /></td>
                                            <td><input class="line${i}" style="width:60px" /></td>
                                            <td><button class="btn${i}"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
                                        </tr>`);
                    $(".line" + i).val(data.trainingProgram[i].Personal_Weight_To_Lift);
                    $(".repet" + i).val(data.trainingProgram[i].Amount_Of_Personal_Repetitions);
                    if (data.trainingProgram[i].Days_to_Train == 'C') { $(".line" + i).val(''); }
                    UpdateTraineeProgram();
                }
                else if (data.trainingProgram[i].Days_to_Train == 'A' || data.trainingProgram[i].Days_to_Train == 'C') {
                    continue;
                }

                //update Trianee Training Programs
                function UpdateTraineeProgram() {
                    $(".btn" + i).click(function () {

                        let add_history = {
                            Trainee_Id: objProgram.id,
                            Amount_Of_Personal_Repetitions: data.trainingProgram[i].Amount_Of_Personal_Repetitions,
                            Personal_Weight_To_Lift: data.trainingProgram[i].Personal_Weight_To_Lift,
                            Creation_Date: new Date(),
                            Facility_Code: data.trainingProgram[i].Facility_Code
                        };
                        //console.log(add_history);
                        InsertHistory(add_history);

                        let update_trainee_program = {
                            Amount_Of_Personal_Repetitions: parseInt($(".repet" + i).val()),
                            Personal_Weight_To_Lift: parseInt($(".line" + i).val()),
                            Facility_Recommendation_Code_For_Trainee: data.trainingProgram[i].Facility_Recommendation_Code_For_Trainee
                        };
                        //console.log(update_trainee_program);
                        //console.log($(".line" + i).val() + ', ' + $(".repet" + i).val() + ', ' + update_trainee_program.Facility_Recommendation_Code_For_Trainee);
                        UpdateTraineeProgramTotal(update_trainee_program);

                    })
                }
            }

            //call function ShowB()
            ShowB();
        },
        error: function (err) {
            if (err.status == ERROR) {
                alert("שגיאה");
            }
        }
    });
}
