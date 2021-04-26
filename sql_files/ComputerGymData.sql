use ComputerGymDB


--INSERT INTO [dbo].[Trainee] ([Trainee_Id], [First_Name], [Last_Name], [User_Name], [Password], [Phone_Number], [Date_Of_Birth], [Height], [Weight], [Gender], [Address], [Amount_Of_Training_Per_Week], [Perform_Exercises], [Training_Goal], [Fitness_Level], [Body_Problem])
--VALUES (N'123456789', N'עידו', N'יחזקאל', N'איציק י', N'1234', N'213213', N'2019-12-12', 180, 75, 1, N'השושנים 5', 5, 1, N'עלייה במסה', 2, N'back')
--INSERT INTO [dbo].[Trainee] ([Trainee_Id], [First_Name], [Last_Name], [User_Name], [Password], [Phone_Number], [Date_Of_Birth], [Height], [Weight], [Gender], [Address], [Amount_Of_Training_Per_Week], [Perform_Exercises], [Training_Goal], [Fitness_Level], [Body_Problem])
--VALUES (N'987654321', N'משה', N'פרץ', N'משה פ', N'1234', N'213213', N'2019-12-01', 160, 59, 1, N'האפונים 9', 3, 1, N'חיטוב', 1, N' ')


INSERT INTO [dbo].[Trainer] ([Trainer_Id], [First_Name], [Last_Name], [User_Name], [Password], [Phone_Number]) VALUES (N'111111111', N'שלום', N'עזר', N'שלום ע', N'514665', N'2154984')



--SET IDENTITY_INSERT [dbo].[Trainer_Facility_Recommendation] ON
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (1, N'111111111', 1, 10, N'10-20', N'20-30', 50, N'A', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (2, N'111111111', 2, 10, N'10-20', N'20-30', 50, N'A', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (3, N'111111111', 3, 10, N'10-20', N'20-30', 50, N'A', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (4, N'111111111', 4, 10, N'10-20', N'20-30', 50, N'B', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (5, N'111111111', 5, 10, N'10-20', N'20-30', 50, N'B', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (6, N'111111111', 6, 10, N'10-20', N'20-30', 50, N'B', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (7, N'111111111', 7, 10, N'10-20', N'20-30', 50, N'A', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (8, N'111111111', 9, 10, N'10-20', N'20-30', 50, N'A', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (9, N'111111111', 10, 10, N'10-20', N'20-30', 50, N'A', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (10, N'111111111', 11, 10, N'10-20', N'20-30', 50, N'B', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (11, N'111111111', 12, 10, N'10-20', N'20-30', 50, N'B', N'123456789', N'2018-05-05')
--INSERT INTO [dbo].[Trainer_Facility_Recommendation] ([Facility_Recommendation_Code_For_Trainee], [Trainer_Id], [Facility_Code], [Amount_Of_Personal_Repetitions], [Amount_Of_Recommended_Repetitions], [Recommended_Weight_To_Lift], [Personal_Weight_To_Lift], [Days_to_Train], [Trainee_Id], [Creation_Date]) VALUES (12, N'111111111', 13, 10, N'10-20', N'20-30', 50, N'B', N'123456789', N'2018-05-05')
--SET IDENTITY_INSERT [dbo].[Trainer_Facility_Recommendation] OFF



--SET IDENTITY_INSERT [dbo].[Trainee_Facilities_History] ON
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (1, N'123456789', 15, 50, N'2019-01-01', 1)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (2, N'123456789', 15, 50, N'2019-01-01', 2)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (3, N'123456789', 15, 50, N'2019-01-01', 3)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (4, N'123456789', 15, 50, N'2019-01-01', 4)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (5, N'123456789', 15, 50, N'2019-01-01', 5)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (6, N'123456789', 15, 50, N'2019-01-01', 6)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (7, N'123456789', 15, 50, N'2019-01-01', 7)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (8, N'123456789', 15, 50, N'2019-01-01', 9)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (9, N'123456789', 15, 50, N'2019-01-01', 10)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (10, N'123456789', 15, 50, N'2019-01-01', 11)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (11, N'123456789', 15, 40, N'2019-01-01', 1)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (12, N'123456789', 15, 40, N'2019-01-01', 2)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (13, N'123456789', 15, 40, N'2019-01-01', 3)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (14, N'123456789', 15, 40, N'2019-01-01', 4)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (15, N'123456789', 15, 40, N'2019-01-01', 5)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (16, N'123456789', 15, 40, N'2019-01-01', 6)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (17, N'123456789', 15, 40, N'2019-01-01', 7)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (18, N'123456789', 15, 40, N'2019-01-01', 9)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (19, N'123456789', 15, 40, N'2019-01-01', 10)
--INSERT INTO [dbo].[Trainee_Facilities_History] ([Trainee_Facilities_History_Code], [Trainee_Id], [Amount_Of_Personal_Repetitions], [Personal_Weight_To_Lift], [Creation_Date], [Facility_Code]) VALUES (20, N'123456789', 15, 40, N'2019-01-01', 11)
--SET IDENTITY_INSERT [dbo].[Trainee_Facilities_History] OFF





-------------------------------
SET IDENTITY_INSERT [dbo].[Gym_Facility] ON
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (1, N'לג פרס', N'רגליים', N'לג פרס', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (2, N'סקווט חופשי כנגד מוט', N'רגליים', N'סקווט חופשי כנגד מוט', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (3, N'פשיטת ברכיים', N'רגליים', N'פשיטת ברכיים', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (4, N'פטישים', N'יד קדמית', N'פטישים', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (5, N'הרמת מוט W', N'יד קדמית', N'הרמת מוט W', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (6, N'כפיפת מרפק בישיבה', N'יד קדמית', N'כפיפת מרפק בישיבה', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (7, N'לחיצת חזה', N'חזה', N'לחיצת חזה', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (9, N'לחיצת חזה בשיפוע חיובי', N'חזה', N'לחיצת חזה בשיפוע חיובי', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (10, N'פרפר בישיבה', N'חזה', N'פרפר בישיבה', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (11, N'לחיצת כתפיים', N'כתפיים', N'לחיצת כתפיים', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (12, N'הרחקת כתפיים', N'כתפיים', N'הרחקת כתפיים', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (13, N'כפיפת כתף', N'כתפיים', N'כפיפת כתף', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (14, N'לחיצה צרפתית יד אחורית', N'יד אחורית', N'לחיצה צרפתית יד אחורית', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (15, N'פשיטת מרפק בפולי', N'יד אחורית', N'פשיטת מרפק בפולי', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (16, N'ג''קסונים', N'יד אחורית', N'ג''קסונים', 0)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (17, N'מתח', N'גב', N'מתח', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (18, N'חתירה כנגד כבל פולי', N'גב', N'חתירה כנגד כבל פולי', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (19, N'משיכה מפולי עליון', N'גב', N'משיכה מפולי עליון', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (20, N'כפיפות בטן', N'בטן', N'תמונה 19', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (21, N'תרגילי אופניים', N'בטן', N'תמונה 20', 1)
INSERT INTO [dbo].[Gym_Facility] ([Facility_Code], [Facility_Name], [Category], [Picture], [Big_Muscle]) VALUES (22, N'בטן סטטית', N'בטן', N'תמונה 21', 1)
SET IDENTITY_INSERT [dbo].[Gym_Facility] OFF




SET IDENTITY_INSERT [dbo].[Facility_Video_Link] ON
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (2, 1, N'https://www.youtube.com/watch?v=IZxyjW7MPJQ
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (4, 2, N'https://www.youtube.com/watch?v=Q3Ur13N-cB8
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (5, 3, N'https://www.youtube.com/watch?v=zQLgsrEmWK4
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (6, 19, N'https://www.youtube.com/watch?v=EL8b08fSh5o
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (7, 17, N'https://www.youtube.com/watch?v=eGo4IYlbE5g')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (8, 18, N'https://www.youtube.com/watch?v=sP_4vybjVJs')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (9, 7, N'https://www.youtube.com/watch?v=Dm2e9GZE2Qg
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (14, 9, N'https://www.youtube.com/watch?v=fnDM2jJ2yeI
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (16, 10, N'https://www.youtube.com/watch?v=Z57CtFmRMxA&feature=emb_title')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (17, 16, N'https://www.youtube.com/watch?v=akJGb1tHB1w
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (18, 15, N'https://www.youtube.com/watch?v=HKCXbziInAE
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (19, 14, N'https://www.youtube.com/watch?v=QKw3YKkeu5I
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (20, 11, N'https://www.youtube.com/watch?v=rBqG3whwYbA
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (21, 12, N'https://www.youtube.com/watch?v=X7VZKpfXrbg
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (22, 13, N'https://www.youtube.com/watch?v=X4FAKZKuuNQ
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (23, 5, N'https://www.youtube.com/watch?v=UVltnAp5Dbw
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (24, 6, N'https://www.youtube.com/watch?v=UXmjG3y2CeQ
')
INSERT INTO [dbo].[Facility_Video_Link] ([Video_Link_Code], [Facility_Code], [Video_Link]) VALUES (25, 4, N'https://www.youtube.com/watch?time_continue=10&v=b7phYAO4EJY&feature=emb_title')
SET IDENTITY_INSERT [dbo].[Facility_Video_Link] OFF