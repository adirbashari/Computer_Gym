using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClassLibrary.EF;
using ClassLibrary.DTO;
using ClassLibrary.DbClasses;

namespace WebAppli.Controllers
{
    public class TraineeProgramController : ApiController
    {
       //GET api/TraineeProgram/id
       [Route("api/TraineeProgram/{id}")]
       [HttpGet]
        public HttpResponseMessage GetTrianeePrograms(string id)
        {
            TraineeTrainingProgramDTO program = GymFacilityExtension.GetTrianeeTrainingProgram(id);
            if (program == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            return Request.CreateResponse(HttpStatusCode.OK, program);

        }


        //GET api/TraineeProgram/id
        [Route("api/TraineeProgram/history/{id}")]
        [HttpGet]
        public HttpResponseMessage GetTrianeeHistory(string id)
        {
            TraineeHistoryDTO history = TraineeFacilitiesHistoryExtension.GetTrianeeHistory(id);
            if (history == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            return Request.CreateResponse(HttpStatusCode.OK, history);

        }


        //GET api/TraineeProgram/allFacilities
        [Route("api/TraineeProgram/allFacilities")]
        [HttpGet]
        public HttpResponseMessage GetAllFacikityInGym()
        {
            List<GymFacilitiesDTO> list = GymFacilityExtension.GetAllGymFacilitiesForAlgorithem();
            if (list == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            return Request.CreateResponse(HttpStatusCode.OK, list);

        }


        // POST api/TraineeProgram
        [Route("api/TraineeProgram/history")]
        [HttpPost]
        public bool AddHistoryTrainee(Trainee_Facilities_History add_history)
        {
            return TraineeFacilitiesHistoryExtension.AddLineInHistory(add_history);
        }


        // POST api/TraineeProgram/newProgram
        [Route("api/TraineeProgram/newProgram")]
        [HttpPost]
        public bool AddNewTraineeProg(List<Trainer_Facility_Recommendation> add_program)
        {
            return TrainerFacilityRecommendationExtension.AddNewTraineeProgram(add_program);
        }


        // PUT api/TraineeProgram
        [Route("api/TraineeProgram")]
        [HttpPut]
        public bool PutTraineeProgram(Trainer_Facility_Recommendation up_program)
        {
            return TrainerFacilityRecommendationExtension.UpdateTraineeProgram(up_program);
        }

    }
}

