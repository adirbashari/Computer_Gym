using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary.EF;
using ClassLibrary.DTO;


namespace ClassLibrary.DbClasses
{
    public class GymFacilityExtension
    {


        // Method for returning all facilities
        public static List<GymFacilityDTO> GetAllGymFacilities()
        {
            ComputerGymDBContext db = new ComputerGymDBContext();

            return db.Gym_Facility.Select(s => new GymFacilityDTO()
            {
                Big_Muscle = s.Big_Muscle,
                Facility_Code = s.Facility_Code,
                Category = s.Category,
                Facility_Name = s.Facility_Name,
                Picture = s.Picture,
            }).OrderBy(s => s.Category).ToList();

        }

        // Get all facility in the Gym for algorithem that build trainee program
        public static List<GymFacilitiesDTO> GetAllGymFacilitiesForAlgorithem()
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            List<GymFacilitiesDTO> all_facility_in_gym = db.Gym_Facility.Select(s => new GymFacilitiesDTO()
            {
                Facility_Code = s.Facility_Code,
                Facility_Name = s.Facility_Name,
                Category = s.Category,
                Big_Muscle = s.Big_Muscle
            }).OrderByDescending(x => x.Category).ToList();

            return all_facility_in_gym;
        }


        //Method for updating a facility 
        public static bool UpdateGymFacility(Gym_Facility gym_facility)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Gym_Facility gymFacility = db.Gym_Facility.SingleOrDefault(x => x.Facility_Code == gym_facility.Facility_Code);

            if (gymFacility == null)
            {
                return false;
            }

            else if (gymFacility != null)
            {
                gymFacility.Category = gym_facility.Category;
                gymFacility.Facility_Name = gym_facility.Facility_Name;
                gymFacility.Picture = gym_facility.Picture;
                gymFacility.Big_Muscle = gym_facility.Big_Muscle;
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


        //Method for deleting a facility
        public static bool DeleteGymFacility(int facility_code)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Gym_Facility gymFacility = db.Gym_Facility.SingleOrDefault(x => x.Facility_Code == facility_code);

            if (gymFacility == null)
            {
                return false;
            }

            else if (gymFacility != null)
            {
                try
                {
                    db.Gym_Facility.Remove(gymFacility);
                    db.SaveChanges();
                }
                catch (Exception)
                {

                    return false;
                }

                return true;
            }
            return false;

        }


        //Method for adding a facility
        public static int AddGymFacility(Gym_Facility gym_facility)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Gym_Facility gymFacility = new Gym_Facility();
            gymFacility.Category = gym_facility.Category;
            gymFacility.Facility_Name = gym_facility.Facility_Name;
            gymFacility.Picture = gym_facility.Picture;
            gymFacility.Big_Muscle = gym_facility.Big_Muscle;
            try
            {
                db.Gym_Facility.Add(gymFacility);
                db.SaveChanges();
            }
            catch (Exception)
            {

                return -1;
            }


            return gymFacility.Facility_Code;
        }



        //A method of returning all facilities and each facility its list of links
        public static List<AllGymFacilitiesAndVideoLinkDTO> GetAllGymFacilitiesAndVideoLink()
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            return db.Gym_Facility.Select(s => new AllGymFacilitiesAndVideoLinkDTO()
            {
                Facility_Code = s.Facility_Code,
                Category = s.Category,
                Facility_Name = s.Facility_Name,
                Picture = s.Picture,
                Video_Links = s.Facility_Video_Link.Select(a => new FacilityVideoLinkDTO()
                {
                    Video_Link = a.Video_Link,
                    Video_Link_Code = a.Video_Link_Code,
                    Facility_Code = a.Facility_Code,
                }).ToList()
            }).OrderBy(z => z.Category).ToList();
        }


        // Get trainee training program
        public static TraineeTrainingProgramDTO GetTrianeeTrainingProgram(string Trainee_id)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            TraineeTrainingProgramDTO program = new TraineeTrainingProgramDTO();
            program.trainingProgram = GetTrianeeTrainingProgramFacilities(Trainee_id);
            return program;
        }


        // Get all facility for trainee training program
        private static List<TraineeTrainingProgramFacilityDTO> GetTrianeeTrainingProgramFacilities(string Trainee_id)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            List<TraineeTrainingProgramFacilityDTO> program = db.Trainer_Facility_Recommendation
                .Where(x => x.Trainee_Id == Trainee_id)
                .OrderByDescending(q => q.Creation_Date)
                .Select(s => new TraineeTrainingProgramFacilityDTO()
                {
                    Facility_Code = s.Facility_Code,
                    Amount_Of_Recommended_Repetitions = s.Amount_Of_Recommended_Repetitions,
                    Amount_Of_Personal_Repetitions = s.Amount_Of_Personal_Repetitions,
                    Recommended_Weight_To_Lift = s.Recommended_Weight_To_Lift,
                    Personal_Weight_To_Lift = s.Personal_Weight_To_Lift,
                    Days_to_Train = s.Days_to_Train,
                    Facility_Name = s.Gym_Facility.Facility_Name,
                    Category = s.Gym_Facility.Category,
                    Facility_Recommendation_Code_For_Trainee = s.Facility_Recommendation_Code_For_Trainee
                }).ToList();

            return program;
        }




    }
}
