using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary.DTO;
using ClassLibrary.EF;



namespace ClassLibrary.DbClasses
{
    public class FacilityVideoLinkExtension
    {

        //Method for adding a link to the facility
        public static int AddFacilityVideoLink(Facility_Video_Link facility_video_link)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Facility_Video_Link facilityVideoLink = new Facility_Video_Link();
            facilityVideoLink.Facility_Code = facility_video_link.Facility_Code;
            facilityVideoLink.Video_Link = facility_video_link.Video_Link;

            try
            {
                db.Facility_Video_Link.Add(facilityVideoLink);
                db.SaveChanges();
            }
            catch (Exception)
            {
                return -1;
            }
            return facilityVideoLink.Video_Link_Code;
        }


        //Method for update facility link
        public static bool UpdateFacilityVideoLink(Facility_Video_Link facility_video_link)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Facility_Video_Link facilityVideoLink = db.Facility_Video_Link.SingleOrDefault(x =>
            x.Video_Link_Code == facility_video_link.Video_Link_Code);
            if (facilityVideoLink == null)
            {
                return false;
            }

            else if (facilityVideoLink != null)
            {
                facilityVideoLink.Video_Link = facility_video_link.Video_Link;
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


        //Method for deleting a link to the facility
        public static bool DeleteFacilityVideoLink(int video_link_code)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Facility_Video_Link facilityVideoLink =
                db.Facility_Video_Link.SingleOrDefault(x => x.Video_Link_Code == video_link_code);
            if (facilityVideoLink == null)
            {
                return false;
            }

            else if (facilityVideoLink != null)
            {
                try
                {
                    db.Facility_Video_Link.Remove(facilityVideoLink);
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


        // Method for returning all links of all facilities
        public static List<FacilityVideoLinkDTO> GetFacilityVideoLink()
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            return db.Facility_Video_Link.Select(s => new FacilityVideoLinkDTO()
            {
                Video_Link_Code = s.Video_Link_Code,
                Facility_Code = s.Facility_Code,
                Video_Link = s.Video_Link
            }).OrderBy(s => s.Facility_Code).ToList();

        }






    }
}
