using StudentService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StudentBusinessObject;

namespace StudentsApi.Controllers
{
    [RoutePrefix("api/classinfo")]
    [AllowAnonymous]
    public class ClassesController : ApiController
    {
        public readonly IClassesService _IClassesService;

        public ClassesController(IClassesService requestHandler)
        {
            this._IClassesService = requestHandler;
        }


        [HttpGet]
        [Route("GetAll")]
        public HttpResponseMessage Get()
        {
            var objResult = _IClassesService.GetClasses();
            try
            {

                if (objResult != null)
                    return Request.CreateResponse(HttpStatusCode.Created, objResult);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, objResult);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
