using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClassLibrary.DTO;
using ClassLibrary.EF;
using ClassLibrary.DbClasses;

namespace WebApi.Controllers
{
    [RoutePrefix ("api/ComputerGym")]
    public class ComputerGymController : ApiController
    {

        //These are all linking methods that transmit the information from the server to the customer through Ajax calls made on the client

                [HttpGet]
        [Route("GetTrainerIdAndPassword/{trainer_id}")]
        public HttpResponseMessage GetTrainerIdAndPassword(string trainer_id)
        {
            TrainerIdAndPasswordDTO trainerIdAndPassword = TrainerExtension.GetTrainerIdAndPassword(trainer_id);

            if (trainerIdAndPassword == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK, trainerIdAndPassword);
        }


        [HttpGet]
        [Route("GetTrainerFacilityRecommendations/{trainer_id}/{trainee_id}")]
        public HttpResponseMessage GetTrainerFacilityRecommendations(string trainer_id, string trainee_id)
        {
            List<TrainerFacilityRecommendationDTO> trainerFacilityRecommendations =
                TrainerFacilityRecommendationExtension.GetTrainerFacilityRecommendations(trainer_id, trainee_id);

            if (trainerFacilityRecommendations == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK, trainerFacilityRecommendations);
        }


        [HttpPut]
        [Route("UpdateTrainerFacilityRecommendations")]
        public HttpResponseMessage UpdateTrainerFacilityRecommendations(Trainer_Facility_Recommendation trainer_facility_recommendation)
        {
            bool status;
            status = TrainerFacilityRecommendationExtension.UpdateTrainerFacilityRecommendations(trainer_facility_recommendation);

            if (status == true)
            {
                return Request.CreateResponse(HttpStatusCode.OK);

            }
            return Request.CreateResponse(HttpStatusCode.BadRequest);

        }

        [HttpGet]
        [Route("GetTrainer/{trainer_id}")]
        public HttpResponseMessage GetTrainer(string trainer_id)
        {
            TrainerDTO trainer = TrainerExtension.GetTrainer(trainer_id);

            if (trainer == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK, trainer);
        }


        [HttpPost]
        [Route("AddTrainer")]
        public HttpResponseMessage AddTrainer(Trainer triner)
        {
            bool status;
            status = TrainerExtension.AddTrainer(triner);

            if (status == true)
            {
                return Request.CreateResponse(HttpStatusCode.OK);

            }
            return Request.CreateResponse(HttpStatusCode.BadRequest);

        }


        [HttpPut]
        [Route("UpdateTrainer")]
        public HttpResponseMessage UpdateTrainer(Trainer trainer)
        {
            bool status;
            status = TrainerExtension.UpdateTrainer(trainer);

            if (status == true)
            {
                return Request.CreateResponse(HttpStatusCode.OK);

            }
            return Request.CreateResponse(HttpStatusCode.BadRequest);

        }


        [HttpGet]
        [Route("GetGymFacilities")]
        public HttpResponseMessage GetGymFacilities()
        {
            List<GymFacilityDTO> gymFacilities = GymFacilityExtension.GetAllGymFacilities();

            if (gymFacilities == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK, gymFacilities);
        }


        [HttpGet]
        [Route("GetAllGymFacilitiesAndVideoLink")]
        public HttpResponseMessage GetAllGymFacilitiesAndVideoLink()
        {
            List<AllGymFacilitiesAndVideoLinkDTO> facilitiesAndVideoLink = GymFacilityExtension.GetAllGymFacilitiesAndVideoLink();

            if (facilitiesAndVideoLink == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK, facilitiesAndVideoLink);
        }


        [HttpPut]
        [Route("UpdateGymFacility")]
        public HttpResponseMessage UpdateGymFacility(Gym_Facility gym_facility)
        {
            bool status = GymFacilityExtension.UpdateGymFacility(gym_facility);


            if (status == false)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK);

        }


        [HttpDelete]
        [Route("DeleteGymFacility/{gym_facility_code}")]
        public HttpResponseMessage DeleteGymFacility(int gym_facility_code)
        {

            bool status = GymFacilityExtension.DeleteGymFacility(gym_facility_code);


            if (status == false)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK);

        }


        [HttpPost]
        [Route("AddGymFacility")]
        public HttpResponseMessage AddGymFacility(Gym_Facility gym_facility)
        {

            int gymFacility = GymFacilityExtension.AddGymFacility(gym_facility);

            return Request.CreateResponse(HttpStatusCode.OK, gymFacility);

        }


        [HttpPost]
        [Route("AddFacilityVideoLink")]
        public HttpResponseMessage AddFacilityVideoLink(Facility_Video_Link facility_video_link)
        {
            int videoLinkCode = FacilityVideoLinkExtension.AddFacilityVideoLink(facility_video_link);


            if (videoLinkCode != -1)
            {
                return Request.CreateResponse(HttpStatusCode.OK, videoLinkCode);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, videoLinkCode);

            }


        }


        [HttpPut]
        [Route("UpdateFacilityVideoLink")]
        public HttpResponseMessage UpdateFacilityVideoLink(Facility_Video_Link facility_video_link)
        {
            bool status = FacilityVideoLinkExtension.UpdateFacilityVideoLink(facility_video_link);


            if (status == false)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK);

        }


        [HttpDelete]
        [Route("DeleteFacilityVideoLink/{video_link_code}")]
        public HttpResponseMessage DeleteFacilityVideoLink(int video_link_code)
        {

            bool status = FacilityVideoLinkExtension.DeleteFacilityVideoLink(video_link_code);


            if (status == false)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK);

        }


        [HttpGet]
        [Route("GetFacilityVideoLink")]
        public HttpResponseMessage GetFacilityVideoLink()
        {
            List<FacilityVideoLinkDTO> videoLinks = FacilityVideoLinkExtension.GetFacilityVideoLink();

            if (videoLinks == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
            return Request.CreateResponse(HttpStatusCode.OK, videoLinks);
        }








    }
}
