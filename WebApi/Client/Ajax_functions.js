function GetTrainerFacilityRecommendations(trianer_id,trainee_id) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: `/api/ComputerGym/GetTrainerFacilityRecommendations/${trianer_id}/${trainee_id}`,			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "GET",				                        //סוג הפעולה

    });

}

function UpdateTrainerFacilityRecommendations(trainer_facility_recommendation) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: "/api/ComputerGym/UpdateTrainerFacilityRecommendations",			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "PUT",				                        //סוג הפעולה
        data: JSON.stringify(trainer_facility_recommendation)
    });

}


function GetAllGymFacilitiesAndVideoLink() {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: `/api/ComputerGym/GetAllGymFacilitiesAndVideoLink`,			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "GET",				                        //סוג הפעולה

    });

}


function GetTrainerIdAndPassword(trainer_id) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: `/api/ComputerGym/GetTrainerIdAndPassword/${trainer_id}`,			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "GET",				                        //סוג הפעולה

    });

}


function GetTrainer(trainer_id) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: `/api/ComputerGym/GetTrainer/${trainer_id}`,			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "GET",				                        //סוג הפעולה

    });

}


function AddTrainer(trainer) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: "/api/ComputerGym/AddTrainer",			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "POST",				                        //סוג הפעולה
        data: JSON.stringify(trainer)
    });

}


function UpdateTrainer(trainer) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: "/api/ComputerGym/UpdateTrainer",			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "PUT",				                        //סוג הפעולה
        data: JSON.stringify(trainer
)
    });

}


function GetGymFacilities() {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: `/api/ComputerGym/GetGymFacilities`,			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "GET",				                        //סוג הפעולה

    });

}


function UpdateGymFacility(gym_facility) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: "/api/ComputerGym/UpdateGymFacility",			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "PUT",				                        //סוג הפעולה
        data: JSON.stringify(gym_facility)
    });

}


function DeleteGymFacility(gym_facility_code) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: `/api/ComputerGym/DeleteGymFacility/${gym_facility_code}`,			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "DELETE",				                        //סוג הפעולה
    });

}


function AddGymFacility(gym_facility) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: "/api/ComputerGym/AddGymFacility",			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "POST",				                        //סוג הפעולה
        data: JSON.stringify(gym_facility)
    });

}


function AddFacilityVideoLink(facility_video_link) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: "/api/ComputerGym/AddFacilityVideoLink",			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "POST",				                        //סוג הפעולה
        data: JSON.stringify(facility_video_link)
    });

}


function UpdateFacilityVideoLink(facility_video_link) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: "/api/ComputerGym/UpdateFacilityVideoLink",			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "PUT",				                        //סוג הפעולה
        data: JSON.stringify(facility_video_link)
    });

}


function DeleteFacilityVideoLink(video_link_code) {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: `/api/ComputerGym/DeleteFacilityVideoLink/${video_link_code}`,			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "DELETE",				                        //סוג הפעולה
    });

}


function GetFacilityVideoLink() {

    return $.ajax({
        async: false,
        dataType: "json",			                         //סוג הנתונים שאנחנו מצפים לקבל מהשרת
        url: `/api/ComputerGym/GetFacilityVideoLink`,			                   //הכתובת לשרת ולפונקציה
        contentType: "application/json; charset=utf-8",	   //סוג הנתונים שאנחנו שולחים לשרת
        type: "GET",				                        //סוג הפעולה

    });

}




