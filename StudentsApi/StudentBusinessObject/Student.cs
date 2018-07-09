using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace StudentBusinessObject
{
    public class Student
    {
        [Required]
        public string Class { get; set; }
        [Required]
        public string Professor { get; set; }
        [Required]
        public int StudentID { get; set; }
        public int RegisteredCount { get; set; }
    }
}
