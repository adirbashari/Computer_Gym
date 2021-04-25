//perform_exercises: 1=yes, 0=no
//body_problem: "back","chest"
//training_goal: "אימוני חוזק"
//amount_of_training_per_week: 6
//fitness_level: 1/2/3

let MASS_BUILD = "עלייה במסה";
let STRENGTH_TRAINING = "אימוני חוזק";
let TONING = "חיטוב";

let MASS_BUILD_REPETITIONS = "5-8";
let STRENGTH_TRAINING_REPETITIONS = "9-12";
let TONING_REPETITIONS = "13-20";

let SMALL_LOW = "0-7";
let SMALL_MEDIUM_A = "6-12";
let SMALL_MEDIUM_B = "8-14";
let SMALL_HIGHT = "10-16";

let BIG_LOW  = "0-30";
let BIG_MEDIUM_A = "21-40";
let BIG_MEDIUM_B = "31-50";
let BIG_HIGHT = "41-60";

let SMALL_THIN = "13+";
let SMALL_MEDIUM = "15+";
let SMALL_FAT = "17+";

let BIG_THIN = "41+";
let BIG_MEDIUM = "51+";
let BIG_FAT = "61+";

let THIN = -1;
let FAT = 1;
let MEDIUM = 0;

let FITNESS_LEVEL_LOW = 1;
let FITNESS_LEVEL_MEDIUM = 2;
let FITNESS_LEVEL_HIGHT = 3;


let TRAINING_PER_WEEK_LOW = 1;
let TRAINING_PER_WEEK_HIGH = 3;

let HEIGHT_AVERAGE_TO_DECREASE = 100;
let HEIGHT_AVERAGE_TO_INCREASE_OR_DECREASE = 10;

//function BuildTraineeProgram
function BuildTraineeProgram(
    fitness_level, amount_of_training_per_week, training_goal, body_problem, hide_exercises, weight, height) {
    let buildProgramParameters = {};


    //two_days
    if (amount_of_training_per_week >= TRAINING_PER_WEEK_LOW && amount_of_training_per_week <= TRAINING_PER_WEEK_HIGH) {
        buildProgramParameters.two_days = false;
    }
    else {
        buildProgramParameters.two_days = true;
    }


    //exercises_to_hide
    if (body_problem.length == 0) {
        buildProgramParameters.exercises_to_hide = "";
    }
    else {
        buildProgramParameters.exercises_to_hide = "";
        for (let i = 0; i < body_problem.length; i++) {
            buildProgramParameters.exercises_to_hide =
                buildProgramParameters.exercises_to_hide + "" + body_problem[i] + ",";
        }
    }



    //hide_exercises-boolean -true means to hide
    buildProgramParameters.hide_exercises = hide_exercises;


    //amount_of_repetitions
    switch (training_goal) {
        case MASS_BUILD:
            buildProgramParameters.amount_of_repetitions = MASS_BUILD_REPETITIONS;
            break;
        case STRENGTH_TRAINING:
            buildProgramParameters.amount_of_repetitions = STRENGTH_TRAINING_REPETITIONS;
            break;
        case TONING:
            buildProgramParameters.amount_of_repetitions = TONING_REPETITIONS;
            break;
        default: buildProgramParameters.amount_of_repetitions = STRENGTH_TRAINING_REPETITIONS;
    }


    //amount_of_weight_to_lift
    let height_average = height - HEIGHT_AVERAGE_TO_DECREASE;
    let height_weight_classification = 0;
    if (height_average - HEIGHT_AVERAGE_TO_INCREASE_OR_DECREASE > weight) {
        height_weight_classification = THIN;
    }
    if (height_average + HEIGHT_AVERAGE_TO_INCREASE_OR_DECREASE < weight) {
        height_weight_classification = FAT;
    }
    if (height_average - HEIGHT_AVERAGE_TO_INCREASE_OR_DECREASE <= weight && height_average + HEIGHT_AVERAGE_TO_INCREASE_OR_DECREASE >= weight) {
        height_weight_classification = MEDIUM;
    }
    ////////
    if (fitness_level == FITNESS_LEVEL_LOW || hide_exercises == false) {
        buildProgramParameters.small_muscle_recommandation = SMALL_LOW;
        buildProgramParameters.big_muscle_recommandation = BIG_LOW;
    }
    ////
    else if (fitness_level == FITNESS_LEVEL_MEDIUM && height_weight_classification == THIN) {
        buildProgramParameters.small_muscle_recommandation = SMALL_MEDIUM_A;
        buildProgramParameters.big_muscle_recommandation = BIG_MEDIUM_A;
    }

    else if (fitness_level == FITNESS_LEVEL_MEDIUM && height_weight_classification == MEDIUM) {
        buildProgramParameters.small_muscle_recommandation = SMALL_MEDIUM_B;
        buildProgramParameters.big_muscle_recommandation = BIG_MEDIUM_B;
    }
    else if (fitness_level == FITNESS_LEVEL_MEDIUM && height_weight_classification == FAT) {
        buildProgramParameters.small_muscle_recommandation = SMALL_HIGHT;
        buildProgramParameters.big_muscle_recommandation = BIG_HIGHT;
    }
    //////
    else if (fitness_level == FITNESS_LEVEL_HIGHT && height_weight_classification == THIN) {
        buildProgramParameters.small_muscle_recommandation = SMALL_THIN;
        buildProgramParameters.big_muscle_recommandation = BIG_THIN;
    }

    else if (fitness_level == FITNESS_LEVEL_HIGHT && height_weight_classification == MEDIUM) {
        buildProgramParameters.small_muscle_recommandation = SMALL_MEDIUM;
        buildProgramParameters.big_muscle_recommandation = BIG_MEDIUM;
    }
    else if (fitness_level == FITNESS_LEVEL_HIGHT && height_weight_classification == FAT) {
        buildProgramParameters.small_muscle_recommandation = SMALL_FAT;
        buildProgramParameters.big_muscle_recommandation = BIG_FAT;
    }

    return buildProgramParameters;

}


//let res0 = BuildTraineeProgram(3, 4, MASS_BUILD, ["back"], false, 73, 183);
//console.log(res0);
//let res1 = BuildTraineeProgram(3, 2, STRENGTH_TRAINING, "", false, 73, 183);
//console.log(res1);
//let res2 = BuildTraineeProgram(3, 7, TONING, "", false, 73, 183);
//console.log(res2);
//let res3 = BuildTraineeProgram(2, 4, MASS_BUILD, "", false, 73, 183);
//console.log(res3);
//let res4 = BuildTraineeProgram(2, 4, STRENGTH_TRAINING, "", false, 73, 183);
//console.log(res4);
//let res5 = BuildTraineeProgram(2, 4, TONING, "", false, 73, 183);
//console.log(res5);
//let res6 = BuildTraineeProgram(1, 4, MASS_BUILD, "", false, 73, 183);
//console.log(res6);
//let res7 = BuildTraineeProgram(1, 4, STRENGTH_TRAINING, "", false, 73, 183);
//console.log(res7);
//let res8 = BuildTraineeProgram(1, 4, TONING, "", false, 73, 183);
//console.log(res8);
