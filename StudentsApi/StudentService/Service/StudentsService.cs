using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentBusinessObject;
using System.IO;
using System.Data;

namespace StudentService
{
    public class StudentsService: IStudentsService
    {
       
        public List<Student> GetStudentInfo(string FilePath)
        {
            List<Student> StudentInfo = new List<Student>();
            try
            {
              
                string FileName = FilePath;
                if (File.Exists(FileName))
                {
                    using (FileStream f = File.Open(FileName, FileMode.Open))
                    {
                        using (StreamReader reader = new StreamReader(f))
                        {
                            bool passedFirstline = false;
                            while (!reader.EndOfStream)
                            {
                                string row = reader.ReadLine();
                                if (passedFirstline)
                                {
                                    Student RowDetails = SplitRow(row);
                                    if(RowDetails != null)
                                    {
                                        StudentInfo.Add(RowDetails);
                                    }
                                }
                                else
                                {
                                    passedFirstline = true;
                                }
                                
                            }
                        }
                        f.Flush();
                        f.Close();
                    }
                }
            }
            catch(Exception er)
            {
                 
            }

            return StudentInfo;
        }

        public List<Student> GetStudentsRegsiterdCountForClass(string FilePath)
        {
            List<Student> StudentClass = new List<Student>();
            try
            {
                List<Student> StudentInfo = new List<Student>();
                StudentInfo = GetStudentInfo(FilePath);
                ClassInfo Classes = new ClassInfo();
                foreach(var item in Classes.Classes.ToList())
                {
                    Student StObj = new Student();
                    StObj.Class = item;
                    StObj.RegisteredCount = StudentInfo.Where(name => name.Class == item).Count();
                    StudentClass.Add(StObj);
                }
            }
            catch(Exception er)
            {

            }
            return StudentClass;

        }


        public List<Student> GetStudentsRegsiterdCountForMoreClass(string FilePath)
        {
            List<Student> StudentClass = new List<Student>();
            try
            {
                List<Student> StudentInfo = new List<Student>();
                StudentInfo = GetStudentInfo(FilePath);
                StudentClass = StudentInfo.GroupBy(i => i.StudentID).Select(x => new Student {
                    RegisteredCount = x.Count(),
                    StudentID = x.Key
                }).Where(s=> s.RegisteredCount > 1).ToList();


            }
            catch (Exception er)
            {

            }
            return StudentClass;

        }

        public Student Save(string FilePath, Student StudentData)
        {
            try
            {
                        string studentDetails = StudentData.Class + "," + StudentData.Professor + "," + StudentData.StudentID + Environment.NewLine;
                        if (!File.Exists(FilePath))
                        {
                            string clientHeader = "Class" + "," + "Professor" + "," + "Student ID" + Environment.NewLine;
                            File.WriteAllText(FilePath, clientHeader);
                        }
                        File.AppendAllText(FilePath, studentDetails);
            }
            catch (Exception er)
            {

            }
            return StudentData;
        }

        static Student SplitRow(string Row)
        {

            var splitRow = Row.Split(",".ToCharArray());
            Student StObj = new Student();
            if (splitRow.Length >= 3)
            {
                StObj.Class = splitRow[0];
                StObj.Professor = splitRow[1];
                if(splitRow[2] != null && splitRow[2].ToString() != "")
                {
                    int StudentID;
                    if (int.TryParse(splitRow[2], out StudentID))
                    {
                        StObj.StudentID = StudentID;
                    }
                    else
                    {
                        StObj.StudentID = 0;
                    }
                    
                }
                else
                {
                    StObj.StudentID = 0;
                }
               
            }
            return StObj;
        }
    }
}
