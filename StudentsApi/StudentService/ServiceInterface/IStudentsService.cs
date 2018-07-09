using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentBusinessObject;

namespace StudentService
{
    public interface IStudentsService
    {
        List<Student> GetStudentInfo(string FilePath);
        List<Student> GetStudentsRegsiterdCountForClass(string FilePath);
        List<Student> GetStudentsRegsiterdCountForMoreClass(string FilePath);
        Student Save(string FilePath, Student StudentData);
    }
}
