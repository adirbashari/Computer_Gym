using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary.EF;
using ClassLibrary.DTO;

namespace ClassLibrary.DbClasses
{
    public class TraineeExtension
    {
        //Get Trainee Details
        public static TraineeDetailsDto GetTraineeDetailsById(string id, string password)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            TraineeDetailsDto trainee = db.Trainees.Select(x => new TraineeDetailsDto()
            {
                id = x.Trainee_Id,
                f_name = x.First_Name,
                l_name = x.Last_Name,
                user_name = x.User_Name,
                password = x.Password,
                phone_number = x.Phone_Number,
                date_Of_birth = x.Date_Of_Birth,
                height = x.Height,
                weight = x.Weight,
                gender = x.Gender,
                address = x.Address,
                Amount_Of_Training_Per_Week = x.Amount_Of_Training_Per_Week,
                Perform_Exercises = x.Perform_Exercises,
                Training_Goal = x.Training_Goal,
                Fitness_Level = x.Fitness_Level,
                Body_Problem = x.Body_Problem
            }).SingleOrDefault(x => (x.id == id && x.password == password));

            return trainee;
        }


        //Get Trainee Details
        public static bool GetTraineeExistById(string id)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            TraineeDetailsDto trainee = db.Trainees.Select(x => new TraineeDetailsDto()
            {
                id = x.Trainee_Id,
                f_name = x.First_Name,
                l_name = x.Last_Name,
                user_name = x.User_Name,
                password = x.Password,
                phone_number = x.Phone_Number,
                date_Of_birth = x.Date_Of_Birth,
                height = x.Height,
                weight = x.Weight,
                gender = x.Gender,
                address = x.Address,
                Amount_Of_Training_Per_Week = x.Amount_Of_Training_Per_Week,
                Perform_Exercises = x.Perform_Exercises,
                Training_Goal = x.Training_Goal,
                Fitness_Level = x.Fitness_Level,
                Body_Problem = x.Body_Problem
            }).SingleOrDefault(x => x.id == id);

            if (trainee == null)
            {
                return false;
            }
            return true;

        }


        //Put Trainee Details
        public static bool UpdateTraineeDetails(Trainee traineeDetails)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Trainee trainee = db.Trainees.SingleOrDefault(x => x.Trainee_Id == traineeDetails.Trainee_Id);

            if (trainee == null)
            {
                return false;
            }
            else if (trainee != null)
            {
                trainee.First_Name = traineeDetails.First_Name;
                trainee.Last_Name = traineeDetails.Last_Name;
                trainee.User_Name = traineeDetails.User_Name;
                trainee.Password = traineeDetails.Password;
                trainee.Phone_Number = traineeDetails.Phone_Number;
                trainee.Date_Of_Birth = traineeDetails.Date_Of_Birth;
                trainee.Height = traineeDetails.Height;
                trainee.Weight = traineeDetails.Weight;
                trainee.Gender = traineeDetails.Gender;
                trainee.Address = traineeDetails.Address;
                trainee.Amount_Of_Training_Per_Week = traineeDetails.Amount_Of_Training_Per_Week;
                trainee.Perform_Exercises = traineeDetails.Perform_Exercises;
                trainee.Training_Goal = traineeDetails.Training_Goal;
                trainee.Fitness_Level = traineeDetails.Fitness_Level;
                trainee.Body_Problem = traineeDetails.Body_Problem;

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


        //POST Trainee Details
        public static bool AddTrainee(Trainee traineeDetails)
        {
            ComputerGymDBContext db = new ComputerGymDBContext();
            Trainee trainee = new Trainee();
            trainee.Trainee_Id = traineeDetails.Trainee_Id;
            trainee.First_Name = traineeDetails.First_Name;
            trainee.Last_Name = traineeDetails.Last_Name;
            trainee.User_Name = traineeDetails.User_Name;
            trainee.Password = traineeDetails.Password;
            trainee.Phone_Number = traineeDetails.Phone_Number;
            trainee.Date_Of_Birth = traineeDetails.Date_Of_Birth;
            trainee.Height = traineeDetails.Height;
            trainee.Weight = traineeDetails.Weight;
            trainee.Gender = traineeDetails.Gender;
            trainee.Address = traineeDetails.Address;

            trainee.Amount_Of_Training_Per_Week = traineeDetails.Amount_Of_Training_Per_Week;
            trainee.Perform_Exercises = traineeDetails.Perform_Exercises;
            trainee.Training_Goal = traineeDetails.Training_Goal;
            trainee.Fitness_Level = traineeDetails.Fitness_Level;
            trainee.Body_Problem = traineeDetails.Body_Problem;

            try {
                db.Trainees.Add(trainee);
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
