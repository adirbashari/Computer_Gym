using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.DTO
{
    public class AllGymFacilitiesAndVideoLinkDTO
    {
        public int Facility_Code { get; set; }
        public string Facility_Name { get; set; }
        public string Category { get; set; }
        public string Picture { get; set; }
        public List<FacilityVideoLinkDTO> Video_Links { get; set; }

    }
}
