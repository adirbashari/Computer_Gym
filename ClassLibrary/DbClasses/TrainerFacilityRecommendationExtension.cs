using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary.DTO;
using ClassLibrary.EF;

namespace ClassLibrary.DbClasses
{
    public class TrainerFacilityRecommendationExtension
    {

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



        //Put Trainee Program
        public static bool UpdateTraineeProgram(Trainer_Facility_Recommendation update_program)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Trainer_Facility_Recommendation up_program = db.Trainer_Facility_Recommendation.SingleOrDefault(x => x.Facility_Recommendation_Code_For_Trainee == update_program.Facility_Recommendation_Code_For_Trainee);

            if (up_program == null)
            {
                return false;
            }
            else if (up_program != null)
            {
                up_program.Personal_Weight_To_Lift = update_program.Personal_Weight_To_Lift;
                up_program.Amount_Of_Personal_Repetitions = update_program.Amount_Of_Personal_Repetitions;

                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }

            }

            return false;
        }


        //POST Trainee Program
        public static bool AddNewTraineeProgram(List<Trainer_Facility_Recommendation> add_program)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            for (int i = 0; i < add_program.Count; i++)
            {
                db.Trainer_Facility_Recommendation.Add(add_program[i]);
            }

            try
            {
                db.SaveChanges();
            }
            catch
            {
                return false;
            }

            return true;
        }





    }
}
