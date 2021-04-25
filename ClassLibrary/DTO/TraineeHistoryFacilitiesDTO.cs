using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.DTO
{
    public class TraineeHistoryFacilitiesDTO
    {
        public string Facility_Name { get; set; }
        public string Category { get; set; }
        public int Amount_Of_Personal_Repetitions { get; set; }
        public int Personal_Weight_To_Lift { get; set; }
        public System.DateTime Creation_Date { get; set; }
        public int Facility_Code { get; set; }
    }
}
