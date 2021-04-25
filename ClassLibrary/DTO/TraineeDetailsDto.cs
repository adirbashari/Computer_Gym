using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassLibrary.DTO
{
    public class TraineeDetailsDto
    {
        public string id { get; set; }
        public string f_name { get; set; }
        public string l_name { get; set; }
        public string user_name { get; set; }
        public string password { get; set; }
        public string phone_number { get; set; }
        public DateTime date_Of_birth { get; set; }
        public double height { get; set; }
        public double weight { get; set; }
        public bool gender { get; set; }
        public string address { get; set; }
        public int Amount_Of_Training_Per_Week { get; set; }
        public bool Perform_Exercises { get; set; }
        public string Training_Goal { get; set; }
        public int Fitness_Level { get; set; }
        public string Body_Problem { get; set; }

    }
}