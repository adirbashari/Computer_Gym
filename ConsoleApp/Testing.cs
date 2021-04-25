using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using ClassLibrary.DTO;
using ClassLibrary.EF;
using ClassLibrary.DbClasses;

namespace ConsoleApp
{
    class Testing
    {
        static void Main(string[] args)
        {

            #region
            #endregion


            //for class FacilityVideoLinkExtention
            #region test for function:AddFacilityVideoLink() 
            //קוד המתקן חייב להיות קיים בבסיס הנתונים
            Facility_Video_Link facilityVideoLinkToAdd = new Facility_Video_Link()
            {
                Facility_Code = 5,
                Video_Link = "link_url5",
            };
            int resAddFacilityVideoLink = FacilityVideoLinkExtension.AddFacilityVideoLink(facilityVideoLinkToAdd);

            if (resAddFacilityVideoLink != -1)
            {
                Console.WriteLine("function: AddFacilityVideoLink() worked fine\n" +
                    "successfully added link with code: " + resAddFacilityVideoLink);
            }

            else
            {
                Console.WriteLine("error\n" + "function: AddFacilityVideoLink() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion



            #region test for function:UpdateFacilityVideoLink()
            //קוד המתקן וקוד הקישור חייבים להיות קיימים בבסיס הנתונים
            Facility_Video_Link facilityVideoLinkToUpdate = new Facility_Video_Link()
            {
                Video_Link_Code = 21,
                Facility_Code = 5,
                Video_Link = "link_url6",
            };
            bool resUpdateFacilityVideoLink = FacilityVideoLinkExtension.UpdateFacilityVideoLink(facilityVideoLinkToUpdate);

            if (resUpdateFacilityVideoLink)
            {
                Console.WriteLine("function: UpdateFacilityVideoLink() worked fine\n" +
                    "successfully updated link with code: " + facilityVideoLinkToUpdate.Video_Link_Code);
            }

            else
            {
                Console.WriteLine("error\n" + "function: UpdateFacilityVideoLink() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion



            #region test for function:DeleteFacilityVideoLink()
            //קוד הקישור חייב להיות קיים בבסיס הנתונים
            int videoLinkCode = 4;


            bool resDeleteFacilityVideoLink = FacilityVideoLinkExtension.DeleteFacilityVideoLink(videoLinkCode);

            if (resDeleteFacilityVideoLink)
            {
                Console.WriteLine("function: DeleteFacilityVideoLink() worked fine\n" +
                    "successfully delete link with code: " + videoLinkCode);
            }

            else
            {
                Console.WriteLine("error\n" + "function: DeleteFacilityVideoLink() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion



            #region test for function:GetFacilityVideoLink()

            List<FacilityVideoLinkDTO> facilityVideoLinks = FacilityVideoLinkExtension.GetFacilityVideoLink();

            if (facilityVideoLinks.Count >= 0)
            {
                Console.WriteLine("function: GetFacilityVideoLink() worked fine\n" + "there are " + facilityVideoLinks.Count + " links");
            }

            else
            {
                Console.WriteLine("error\n" + "function: GetFacilityVideoLink() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion




            //for class GymFacilityExtention

            #region test for function:AddGymFacility() 
            Gym_Facility gymFacilityToAdd = new Gym_Facility()
            {
                Big_Muscle = true,
                Category = "קטגוריה לבדיקה",
                Facility_Name = "מתקן לבדיקה",
                Picture = "תמונה לבדיקה",
            };
            int resAddGymFacility = GymFacilityExtension.AddGymFacility(gymFacilityToAdd);

            if (resAddGymFacility != -1)
            {
                Console.WriteLine("function: AddGymFacility() worked fine\n" +
                    "successfully added facility with code: " + resAddGymFacility);
            }

            else
            {
                Console.WriteLine("error\n" + "function: AddGymFacility() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion



            #region test for function:UpdateGymFacility()
            //קוד המתקן חייב להיות קיים בבסיס הנתונים
            Gym_Facility gymFacilityToUpdate = new Gym_Facility()
            {
                Facility_Code = 4,
                Big_Muscle = true,
                Category = "קטגוריה לבדיקה",
                Facility_Name = "מתקן לבדיקה",
                Picture = "תמונה לבדיקה",
            };
            bool resUpdateGymFacility = GymFacilityExtension.UpdateGymFacility(gymFacilityToUpdate);

            if (resUpdateGymFacility)
            {
                Console.WriteLine("function: UpdateGymFacility() worked fine\n" +
                    "successfully updated facility with code: " + gymFacilityToUpdate.Facility_Code);
            }

            else
            {
                Console.WriteLine("error\n" + "function: UpdateGymFacility() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion



            #region test for function:DeleteGymFacility()
            //קוד המתקן לא יכול להופיע באף טבלה אחרת כדי למחוק אותו,אסור שתהיה תלות
            int gymFacilityCode = 28;


            bool resDeleteGymFacility = GymFacilityExtension.DeleteGymFacility(gymFacilityCode);

            if (resDeleteGymFacility)
            {
                Console.WriteLine("function: DeleteGymFacility() worked fine\n" +
                    "successfully delete facility with code: " + gymFacilityCode);
            }

            else
            {
                Console.WriteLine("error\n" + "function: DeleteGymFacility() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion



            #region test for function:GetAllGymFacilities()

            List<GymFacilityDTO> gymFacilities = GymFacilityExtension.GetAllGymFacilities();

            if (gymFacilities.Count >= 0)
            {
                Console.WriteLine("function: GetAllGymFacilities() worked fine\n" + "there are " + gymFacilities.Count + " gym facilities");
            }

            else
            {
                Console.WriteLine("error\n" + "function: GetAllGymFacilities() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion




            //for class TrainerExtension

            //להגיד לעידו שישים בפונקציה של הוספת מתאמן try ן catch 
            //למקרה שקיים כבר מתאמן כזה
            #region test for function:AddTrainer() 
            Trainer trainerToAdd = new Trainer()
            {

                Trainer_Id = "12345",
                First_Name = "בדיקה",
                Last_Name = "בדיקה",
                User_Name = "בדיקה",
                Password = "בדיקה",
                Phone_Number = "בדיקה",

            };
            bool resAddTrainer = TrainerExtension.AddTrainer(trainerToAdd);

            if (resAddTrainer)
            {
                Console.WriteLine("function: AddTrainer() worked fine\n" +
                    "successfully added trainer with id: " + trainerToAdd.Trainer_Id);
            }

            else
            {
                Console.WriteLine("error\n" + "function: AddTrainer() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion


            #region test for function:UpdateTrainer() 
            Trainer trainerToUpdate = new Trainer()
            {
                Trainer_Id = "12345",
                First_Name = "בדיקה",
                Last_Name = "בדיקה",
                User_Name = "בדיקה",
                Password = "בדיקה",
                Phone_Number = "בדיקה",

            };
            bool resUpdateTrainer = TrainerExtension.UpdateTrainer(trainerToUpdate);

            if (resUpdateTrainer)
            {
                Console.WriteLine("function: UpdateTrainer() worked fine\n" +
                    "successfully updated trainer with id: " + trainerToUpdate.Trainer_Id);
            }

            else
            {
                Console.WriteLine("error\n" + "function: UpdateTrainer() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion



            //for class TrainerFacilityRecommendationExtension

            #region test for function:UpdateTrainerFacilityRecommendations() 
            Trainer_Facility_Recommendation recommendationToUpdate = 
                new Trainer_Facility_Recommendation()
            {
                Recommended_Weight_To_Lift = "15" ,
                Amount_Of_Recommended_Repetitions="35",
                Facility_Recommendation_Code_For_Trainee=1,
            };
            bool resTrainerFacilityRecommendationExtension = TrainerFacilityRecommendationExtension.
                UpdateTrainerFacilityRecommendations(recommendationToUpdate);

            if (resTrainerFacilityRecommendationExtension)
            {
                Console.WriteLine("function: UpdateTrainerFacilityRecommendations() worked fine\n" +
                    "successfully updated  recommendation with code: "
                    + recommendationToUpdate.Facility_Recommendation_Code_For_Trainee);
            }

            else
            {
                Console.WriteLine("error\n" + "function: UpdateTrainerFacilityRecommendations() not worked properly!\n");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");
            #endregion



            Console.WriteLine("ForDebug");
            Console.WriteLine("--------------------------------------------------------------------\n");



            #region test for GetTrianeeDetails
            var id = "123456789";
            var password = "1234";
            TraineeDetailsDto ids = TraineeExtension.GetTraineeDetailsById(id, password);

            if (ids != null)
            {
                Console.WriteLine("function: GetTraineeDetailsById() worked good");
                Console.WriteLine("successfully GET");
            }
            else
            {
                Console.WriteLine("ERROR\nfunction: GetTraineeDetailsById() worked not good");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");

            //Console.WriteLine("Trainee Id: " + id + "\n" + "Trainee Details:\n");
            //Console.WriteLine("-------------------");

            //Console.WriteLine("ID: " + ids.id + ", name: " + ids.f_name + ids.l_name);
            //Console.WriteLine("user_name: " + ids.user_name);
            //Console.WriteLine("password: " + ids.password);
            //Console.WriteLine("phone_number: " + ids.phone_number);
            //Console.WriteLine("date_Of_birth: " + ids.date_Of_birth);
            //Console.WriteLine("height: " + ids.height);
            //Console.WriteLine("weight: " + ids.weight);
            //Console.WriteLine("gender: " + ids.gender);
            //Console.WriteLine("address: " + ids.address);
            //Console.WriteLine("Amount_Of_Training_Per_Week: " + ids.Amount_Of_Training_Per_Week);
            //Console.WriteLine("Perform_Exercises: " + ids.Perform_Exercises);
            //Console.WriteLine("Training_Goal: " + ids.Training_Goal);
            //Console.WriteLine("Fitness_Level: " + ids.Fitness_Level);
            //Console.WriteLine("Body_Problem: " + ids.Body_Problem);

            //Console.WriteLine("-------------------");
            #endregion


            #region test for UpdateTrianeeDetails
            Trainee trainee = new Trainee();

            trainee.First_Name = "איציק";
            trainee.Last_Name = "זהר";
            trainee.User_Name = "איציק ז";
            trainee.Trainee_Id = "123456789";
            trainee.Password = "1234";
            trainee.Phone_Number = "0525846153";
            trainee.Date_Of_Birth = new DateTime(1990, 12, 10);
            trainee.Gender = true;
            trainee.Height = 180;
            trainee.Weight = 78;
            trainee.Address = "השושנים 5";
            trainee.Amount_Of_Training_Per_Week = 5;
            trainee.Perform_Exercises = true;
            trainee.Training_Goal = "עלייה במסה";
            trainee.Fitness_Level = 2;
            trainee.Body_Problem = "back";


            bool update = TraineeExtension.UpdateTraineeDetails(trainee);

            if (update)
            {
                Console.WriteLine("function: UpdateTraineeDetails() worked good");
                Console.WriteLine("successfully UPDATE");
            }
            else
            {
                Console.WriteLine("ERROR\nfunction: UpdateTraineeDetails() worked not good");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");

            //Console.WriteLine("bool = " + ids);
            //Console.WriteLine("Trainee Id: " + trainee.Trainee_Id + "\n" + "Trainee Details:\n");
            //Console.WriteLine("-------------------");

            //Console.WriteLine("ID: " + trainee.Trainee_Id + ", name: " + trainee.First_Name + trainee.Last_Name);
            //Console.WriteLine("user_name: " + trainee.User_Name);
            //Console.WriteLine("password: " + trainee.Password);
            //Console.WriteLine("phone_number: " + trainee.Phone_Number);
            //Console.WriteLine("date_Of_birth: " + trainee.Date_Of_Birth);
            //Console.WriteLine("height: " + trainee.Height);
            //Console.WriteLine("weight: " + trainee.Weight);
            //Console.WriteLine("gender: " + trainee.Gender);
            //Console.WriteLine("address: " + trainee.Address);
            //Console.WriteLine("Amount_Of_Training_Per_Week: " + trainee.Amount_Of_Training_Per_Week);
            //Console.WriteLine("Perform_Exercises: " + trainee.Perform_Exercises);
            //Console.WriteLine("Training_Goal: " + trainee.Training_Goal);
            //Console.WriteLine("Fitness_Level: " + trainee.Fitness_Level);
            //Console.WriteLine("Body_Problem: " + trainee.Body_Problem);

            //Console.WriteLine("-------------------");
            #endregion


            #region test for AddTrianeeDetails
            Trainee trainee_1 = new Trainee();

            trainee_1.First_Name = "אברי";
            trainee_1.Last_Name = "גלעד";
            trainee_1.User_Name = "אברי1";
            trainee_1.Trainee_Id = "123456123";
            trainee_1.Password = "אברי1";
            trainee_1.Phone_Number = "0525846153";
            trainee_1.Date_Of_Birth = new DateTime(1962, 11, 10);
            trainee_1.Gender = true;
            trainee_1.Height = 172;
            trainee_1.Weight = 74;
            trainee_1.Address = "האורנים 4";
            trainee_1.Amount_Of_Training_Per_Week = 4;
            trainee_1.Perform_Exercises = true;
            trainee_1.Training_Goal = "עלייה במסה";
            trainee_1.Fitness_Level = 2;
            trainee_1.Body_Problem = "חזה,גב,רגליים";

            bool add = TraineeExtension.AddTrainee(trainee_1);

            if (add)
            {
                Console.WriteLine("function: AddTrainee() worked good");
                Console.WriteLine("successfully ADD");
            }
            else
            {
                Console.WriteLine("ERROR\nfunction: AddTrainee() worked not good");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");

            //Console.WriteLine("-------------------");
            #endregion


            #region test for GetTrianeeProgram
            var Trainee_Id = "123456789";
            TraineeTrainingProgramDTO program = GymFacilityExtension.GetTrianeeTrainingProgram(Trainee_Id);

            if (program != null)
            {
                Console.WriteLine("function: GetTrianeeTrainingProgram() worked good");
                Console.WriteLine("successfully GET");
            }
            else
            {
                Console.WriteLine("ERROR\nfunction: GetTrianeeTrainingProgram() worked not good");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");

            //Console.WriteLine("Trainee Id: " + Trainee_Id + "\n" + "Trainee Training Program:\n");
            //foreach (TraineeTrainingProgramFacilityDTO i in program.trainingProgram)
            //{
            //    Console.WriteLine("Facility_Code: " + i.Facility_Code
            //        + "\n" + "Facility_Name: " + i.Facility_Name
            //        + "\n" + "Category: " + i.Category
            //        + "\n" + "Amount_Of_Recommended_Repetitions: " + i.Amount_Of_Recommended_Repetitions
            //        + "\n" + "Amount_Of_Personal_Repetitions: " + i.Amount_Of_Personal_Repetitions
            //        + "\n" + "Recommended_Weight_To_Lift: " + i.Recommended_Weight_To_Lift
            //        + "\n" + "Personal_Weight_To_Lift: " + i.Personal_Weight_To_Lift
            //        + "\n" + "Days_to_Train: " + i.Days_to_Train);

            //    Console.WriteLine("-------------------");
            //}

            //Console.WriteLine("-------------------");
            #endregion


            #region test for GetTrianeeProgram
            var Trainee_Ids = "123456789";
            TraineeHistoryDTO program_1 = TraineeFacilitiesHistoryExtension.GetTrianeeHistory(Trainee_Ids);

            if (program_1 != null)
            {
                Console.WriteLine("function: GetTrianeeHistory() worked good");
                Console.WriteLine("successfully GET");
            }
            else
            {
                Console.WriteLine("ERROR\nfunction: GetTrianeeHistory() worked not good");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");

            //Console.WriteLine("Trainee Id: " + Trainee_Id + "\n" + "Trainee Training Program:\n");
            //foreach (TraineeHistoryFacilitiesDTO i in program.traineeHistory)
            //{
            //    Console.WriteLine("Facility_Name: " + i.Facility_Name
            //        + "\n" + "Category: " + i.Category
            //        + "\n" + "Amount_Of_Personal_Repetitions: " + i.Amount_Of_Personal_Repetitions
            //        + "\n" + "Personal_Weight_To_Lift: " + i.Personal_Weight_To_Lift
            //        + "\n" + "Facility_Code: " + i.Facility_Code
            //        + "\n" + "Creation_Date: " + i.Creation_Date);

            //    Console.WriteLine("-------------------");
            //}

            //Console.WriteLine("-------------------");
            #endregion


            #region test for Add Line to History
            Trainee_Facilities_History history = new Trainee_Facilities_History();

            history.Trainee_Id = "123456789";
            history.Amount_Of_Personal_Repetitions = 8;
            history.Personal_Weight_To_Lift = 25;
            history.Creation_Date = new DateTime(2020, 02, 14);
            history.Facility_Code = 5;

            bool n = TraineeFacilitiesHistoryExtension.AddLineInHistory(history);

            if (n)
            {
                Console.WriteLine("function: AddLineInHistory() worked good");
                Console.WriteLine("successfully ADD");
            }
            else
            {
                Console.WriteLine("ERROR\nfunction: AddLineInHistory() worked not good");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");

            //Console.WriteLine("-------------------");
            #endregion


            #region test for Update Line to Trainer_Facility_Recommendation
            Trainer_Facility_Recommendation update_1 = new Trainer_Facility_Recommendation();
            update_1.Recommended_Weight_To_Lift = "5";
            update_1.Amount_Of_Recommended_Repetitions = "8";
            update_1.Facility_Recommendation_Code_For_Trainee = 17;

            bool t = TrainerFacilityRecommendationExtension.UpdateTraineeProgram(update_1);

            if (t)
            {
                Console.WriteLine("function: UpdateTraineeProgram() worked good");
                Console.WriteLine("successfully UPDATE");
            }
            else
            {
                Console.WriteLine("ERROR\nfunction: UpdateTraineeProgram() worked not good");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");

            //Console.WriteLine(n);
            //Console.WriteLine("-------------------");
            #endregion


            #region test for GetAllGymFacilities
            List<GymFacilitiesDTO> facilities = GymFacilityExtension.GetAllGymFacilitiesForAlgorithem();
            GymFacilitiesDTO[] allFacility = new GymFacilitiesDTO[30];

            if (facilities.Count > 0)
            {
                Console.WriteLine("function: GetAllGymFacilities() worked good");
                Console.WriteLine("successfully GET");
            }
            else
            {
                Console.WriteLine("ERROR\nfunction: GetAllGymFacilities() worked not good");
            }

            Console.WriteLine("--------------------------------------------------------------------\n");

            //int count = 0;

            //foreach (GymFacilitiesDTO i in facilities)
            //{
            //    Console.WriteLine("Facility_Code: " + i.Facility_Code
            //        + "\n" + "Facility_Name: " + i.Facility_Name
            //        + "\n" + "Category: " + i.Category
            //        + "\n" + "Big_Muscle: " + i.Big_Muscle);

            //    Console.WriteLine();
            //    allFacility[count] = i;
            //    count++;
            //    //allFacility.;
            //}

            //Console.WriteLine("------------------------------");
            //Console.WriteLine("------------------------------");
            //foreach (GymFacilitiesDTO i in allFacility)
            //{
            //    Console.WriteLine("Facility_Code: " + i.Facility_Code
            //        + "\n" + "Facility_Name: " + i.Facility_Name
            //        + "\n" + "Category: " + i.Category
            //        + "\n" + "Big_Muscle: " + i.Big_Muscle);

            //    Console.WriteLine();
            //    //allFacility;

            #endregion


        }
    }
}
