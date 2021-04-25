using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClassLibrary.EF;
using ClassLibrary.DTO;
using ClassLibrary.DbClasses;

// Trainee
namespace WebAppli.Controllers
{
    public class TraineeController : ApiController
    {

        // GET api/Trainee/id/password
        [Route("api/Trainee/{id}/{password}")]
        [HttpGet]
        public HttpResponseMessage GetTrainee(string id, string password)
        {
            TraineeDetailsDto trainee = TraineeExtension.GetTraineeDetailsById(id, password);
            if (trainee == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            return Request.CreateResponse(HttpStatusCode.OK, trainee);

        }


        // GET api/Trainee/id
        [Route("api/Trainee/{id}")]
        [HttpGet]
        public bool GetTraineeCheckId(string id)
        {
            bool exist = TraineeExtension.GetTraineeExistById(id);
            return exist;
        }


        // PUT api/Trainee
        [HttpPut]
        //public HttpResponseMessage Put(Trainee trainee)
        public bool Put(Trainee trainee)
        {
            return TraineeExtension.UpdateTraineeDetails(trainee);

        }


        // POST api/Trainee
        [HttpPost]
        public bool AddTrainee(Trainee trainee)
        {
            return TraineeExtension.AddTrainee(trainee);

        }

    }
}