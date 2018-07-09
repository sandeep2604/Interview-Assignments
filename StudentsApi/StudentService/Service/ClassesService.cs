using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentBusinessObject;
using System.IO;
using System.Data;
using System.Collections.Generic;

namespace StudentService
{
    public class ClassesService : IClassesService
    {
        public List<string> GetClasses()
        {
            List<string> ClassInfo = new List<string>();
            try
            {
                ClassInfo _classInfo = new ClassInfo();
                ClassInfo = _classInfo.Classes.ToList<string>();
            }
            catch (Exception er)
            {

            }
            return ClassInfo;
        }
    }
}
