using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary.EF;
using ClassLibrary.DTO;

namespace ClassLibrary.DbClasses
{
    public class TraineeFacilitiesHistoryExtension
    {
        // Get history trainee training program
        public static TraineeHistoryDTO GetTrianeeHistory(string Trainee_id)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            TraineeHistoryDTO program = new TraineeHistoryDTO();
            program.traineeHistory = GetTrianeeHistoryFacilities(Trainee_id);
            return program;
        }

        // Get all facility for history trainee training program
        private static List<TraineeHistoryFacilitiesDTO> GetTrianeeHistoryFacilities(string Trainee_id)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            List<TraineeHistoryFacilitiesDTO> program = db.Trainee_Facilities_History
                .Where(x => x.Trainee_Id == Trainee_id)
                .OrderBy(q => q.Creation_Date)
                .Select(s => new TraineeHistoryFacilitiesDTO()
                {
                    Facility_Name = s.Trainee.Trainer_Facility_Recommendation.FirstOrDefault(c => c.Facility_Code == s.Facility_Code).Gym_Facility.Facility_Name,
                    Category = s.Trainee.Trainer_Facility_Recommendation.FirstOrDefault(c => c.Facility_Code == s.Facility_Code).Gym_Facility.Category,
                    Amount_Of_Personal_Repetitions = s.Amount_Of_Personal_Repetitions,
                    Personal_Weight_To_Lift = s.Personal_Weight_To_Lift,
                    Facility_Code = s.Facility_Code,
                    Creation_Date = s.Creation_Date
                }).ToList();

            return program;
        }


        //POST Trainee History
        public static bool AddLineInHistory(Trainee_Facilities_History history)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Trainee_Facilities_History add_history_trainee = new Trainee_Facilities_History();

            add_history_trainee.Trainee_Id = history.Trainee_Id;
            add_history_trainee.Amount_Of_Personal_Repetitions = history.Amount_Of_Personal_Repetitions;
            add_history_trainee.Personal_Weight_To_Lift = history.Personal_Weight_To_Lift;
            add_history_trainee.Creation_Date = DateTime.Today;
            add_history_trainee.Facility_Code = history.Facility_Code;

            try
            {
                db.Trainee_Facilities_History.Add(add_history_trainee);
                db.SaveChanges();
            }
            catch
            {
                return false;
            }

            return true;
        }


        //A method for returning all recommendations on a particular trainee's facilities so that the coach can change them if needed
        public static List<TrainerFacilityRecommendationDTO> GetTrainerFacilityRecommendations(string trainer_id, string trainee_id)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            return db.Trainer_Facility_Recommendation.Where(x => x.Trainee_Id == trainee_id && x.Trainer_Id == trainer_id)
                .Select(x => new TrainerFacilityRecommendationDTO()
                {
                    Amount_Of_Recommended_Repetitions = x.Amount_Of_Recommended_Repetitions,
                    Facility_Code = x.Facility_Code,
                    Facility_Recommendation_Code_For_Trainee = x.Facility_Recommendation_Code_For_Trainee,
                    Recommended_Weight_To_Lift = x.Recommended_Weight_To_Lift,
                    Trainee_Id = x.Trainee_Id,
                    Trainer_Id = x.Trainer_Id,
                }).OrderBy(x => x.Facility_Code).ToList();
        }


        //Method of updating the recommendation of a particular trainee facility
        public static bool UpdateTrainerFacilityRecommendations(Trainer_Facility_Recommendation trainer_facility_recommendation)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Trainer_Facility_Recommendation trainerFacilityRecommendation = db.Trainer_Facility_Recommendation.SingleOrDefault(x =>
            x.Facility_Recommendation_Code_For_Trainee == trainer_facility_recommendation.Facility_Recommendation_Code_For_Trainee);

            if (trainerFacilityRecommendation == null)
            {
                return false;
            }

            else if (trainerFacilityRecommendation != null)
            {
                trainerFacilityRecommendation.Recommended_Weight_To_Lift = trainer_facility_recommendation.Recommended_Weight_To_Lift;
                trainerFacilityRecommendation.Amount_Of_Recommended_Repetitions = trainer_facility_recommendation.Amount_Of_Recommended_Repetitions;
                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch (Exception)
                {

                    return false;
                }

            }
            return false;
        }

    }
}
