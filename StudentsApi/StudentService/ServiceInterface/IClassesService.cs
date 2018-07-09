using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentBusinessObject;

namespace StudentService
{
    public interface IClassesService
    {
        List<string> GetClasses();
    }
}
