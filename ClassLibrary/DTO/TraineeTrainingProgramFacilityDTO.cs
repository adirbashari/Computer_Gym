using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.DTO
{
    public class TraineeTrainingProgramFacilityDTO
    {
        public int Facility_Code { get; set; }
        public string Amount_Of_Recommended_Repetitions { get; set; }
        public int Amount_Of_Personal_Repetitions { get; set; }
        public string Recommended_Weight_To_Lift { get; set; }
        public int Personal_Weight_To_Lift { get; set; }
        public string Days_to_Train { get; set; }
        public string Facility_Name { get; set; }
        public string Category { get; set; }
        public int Facility_Recommendation_Code_For_Trainee { get; set; }

    }
}
