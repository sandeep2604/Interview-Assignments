using StudentService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using StudentBusinessObject;

namespace StudentsApi.Controllers
{
    [RoutePrefix("api/studentinfo")]
    [AllowAnonymous]
    public class StudentsController : ApiController
    {
        private static string FilePath = ConfigurationManager.AppSettings["FilePath"];
        private readonly IStudentsService _IStudentsService;
        public StudentsController(IStudentsService requestHandler)
        {
            this._IStudentsService = requestHandler;
        }

        [HttpGet]
        [Route("GetAll")]
        public HttpResponseMessage Get()
        {
            var objResult = _IStudentsService.GetStudentInfo(FilePath);
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

        [HttpGet]
        [Route("GetStudentsRegsiterdCountForClass")]
        public HttpResponseMessage GetStudentsRegsiterdForClass()
        {
            var objResult = _IStudentsService.GetStudentsRegsiterdCountForClass(FilePath);
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


        [HttpGet]
        [Route("GetStudentsRegsiterdCountForMoreClass")]
        public HttpResponseMessage GetStudentsRegsiterdCountForMoreClass()
        {
            var objResult = _IStudentsService.GetStudentsRegsiterdCountForMoreClass(FilePath);
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

        [HttpPost]
        [Route("save")]
        public HttpResponseMessage Post([FromBody]Student data)
        {
            var objResult = _IStudentsService.Save(FilePath, data);
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
