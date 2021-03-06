/*
DECLARE @DatabaseName nvarchar(50)
SET @DatabaseName = N'ComputerGymDB'

DECLARE @SQL varchar(max)

SELECT @SQL = COALESCE(@SQL,'') + 'Kill ' + Convert(varchar, SPId) + ';'
FROM MASTER..SysProcesses
WHERE DBId = DB_ID(@DatabaseName) AND SPId <> @@SPId

--SELECT @SQL 
EXEC(@SQL)

Use Master
GO
Drop Database ComputerGymDB
GO
*/


CREATE DATABASE ComputerGymDB  
ON ( NAME = 'ComputerGymDB_Data', 
    FILENAME = 'C:\tempDB\ComputerGymDB\ComputerGymDB_Data.MDF' , 
    SIZE = 10, 
    FILEGROWTH = 10% ) 
LOG ON ( NAME = 'ComputerGymDB_Log', 
        FILENAME = 'C:\tempDB\ComputerGymDB\ComputerGymDB_Log.LDF' )
COLLATE Hebrew_CI_AS
GO

Use ComputerGymDB 
GO

-- הגדרת סוגי משתנים
EXEC sp_addtype 'number', 'int', 'not null'
EXEC sp_addtype 'fnumber', 'float', 'not null'
EXEC sp_addtype 'names', 'nvarchar (50)', 'not null'
EXEC sp_addtype 'string', 'nvarchar(1000)', 'not null'
EXEC sp_addtype 'Id', 'char (9)', 'not null'
GO
--DROP TYPE number 
--DROP TYPE fnumber 
--DROP TYPE names 
--DROP TYPE string 
--DROP TYPE Id 

-- הגדרת טבלאות

create table Trainer(
[Trainer_Id] names,
[First_Name] names ,
[Last_Name] names ,
[User_Name] names,
[Password] names,
[Phone_Number] names,
PRIMARY KEY ([Trainer_Id])
)
go
-------------------------------------------------------------------------


create table Trainee(
[Trainee_Id] Id,
[First_Name] names ,
[Last_Name] names,
[User_Name] names,
[Password] names,
[Phone_Number] names,
Date_Of_Birth date not null,
Height fnumber,
Weight fnumber,
Gender bit not null,
Address String,
Amount_Of_Training_Per_Week number,
Perform_Exercises bit not null,
Training_Goal string,
Fitness_Level number ,
Body_Problem string,
PRIMARY KEY ([Trainee_Id])
)
go
-------------------------------------------------------------------------

create table Gym_Facility(
[Facility_Code] number IDENTITY(1,1),
[Facility_Name] names,
[Category] names,
[Picture] string ,
Big_Muscle bit not null,
PRIMARY KEY ([Facility_Code])
)
go

-------------------------------------------------------------------------

create table Trainer_Facility_Recommendation(
Facility_Recommendation_Code_For_Trainee number IDENTITY(1,1),
[Trainer_Id] names,
[Facility_Code] number ,
[Amount_Of_Personal_Repetitions] number,
[Amount_Of_Recommended_Repetitions] string,
[Recommended_Weight_To_Lift] string,
[Personal_Weight_To_Lift] number,
Days_to_Train names,
[Trainee_Id] Id,
Creation_Date date NOT NULL,
PRIMARY KEY (Facility_Recommendation_Code_For_Trainee)
)
go

-------------------------------------------------------------------------
create table Trainee_Facilities_History (
Trainee_Facilities_History_Code number IDENTITY(1,1),
[Trainee_Id] Id,
[Amount_Of_Personal_Repetitions] number,
[Personal_Weight_To_Lift] number,
Creation_Date date NOT NULL,
[Facility_Code] number ,
PRIMARY KEY (Trainee_Facilities_History_Code)
)
go



-------------------------------------------------------------------------

create table Facility_Video_Link(
[Video_Link_Code] number IDENTITY(1,1),
[Facility_Code] number ,
[Video_Link] string,
PRIMARY KEY ([Video_Link_Code])
)
go

-------------------------------------------------------------------------


--Facility_Video_Link ********
--Trainee_Facilities_History
--Trainer_Facility_Recommendation *****
--Gym_Facility
--Trainee
--Trainer


-- הגדרת מפתחות זרים - קשרי גומלין לנירמול

ALTER TABLE Trainer_Facility_Recommendation
ADD
CONSTRAINT [TFR_fk_Trainer] FOREIGN KEY 
          (Trainer_Id) REFERENCES Trainer (Trainer_Id)
go
-----
--ALTER TABLE Trainer_Facility_Recommendation
--drop
--CONSTRAINT [TFR_fk_Trainer] 
--go

ALTER TABLE Trainer_Facility_Recommendation
ADD
CONSTRAINT [TFR_fk_c] FOREIGN KEY 
          ([Trainee_Id]) REFERENCES Trainee ([Trainee_Id])
go
-----
--ALTER TABLE Trainer_Facility_Recommendation
--drop
--CONSTRAINT [[TFR_fk_c]] 
--go

ALTER TABLE Trainer_Facility_Recommendation
ADD
CONSTRAINT [TFR_fk_b] FOREIGN KEY 
          ([Facility_Code]) REFERENCES Gym_Facility ([Facility_Code])
go
-----
--ALTER TABLE Trainer_Facility_Recommendation
--drop
--CONSTRAINT [[TFR_fk_b]] 
--go


ALTER TABLE Facility_Video_Link
ADD
CONSTRAINT [FVL_fk_GF] FOREIGN KEY 
          (Facility_Code) REFERENCES Gym_Facility (Facility_Code)
go
-----
--ALTER TABLE Facility_Video_Link
--drop
--CONSTRAINT [FVL_fk_GF] 
--go



ALTER TABLE Trainee_Facilities_History
ADD
CONSTRAINT [TTP_fk_Trainee] FOREIGN KEY 
          ([Trainee_Id]) REFERENCES Trainee ([Trainee_Id])
go
-----
--ALTER TABLE Trainee_Facilities_History
--drop
--CONSTRAINT [TTP_fk_Trainee] 
--go


-----






--הזנת נתונים


