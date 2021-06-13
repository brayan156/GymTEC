using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Gymtec_API.Controllers
{
    public class StoreProceduresController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/StoreProcedures



        [HttpGet]
        [Route("api/StoreProcedures/servicios_gimnasio/{id}")]
        public IEnumerable<servicios_gimnasio_Result> getServGym(int id)
        {
            Debug.WriteLine("en el store");
            return db.servicios_gimnasio(id);
        }


        [HttpGet]
        [Route("api/StoreProcedures/tratamientos_gimnasio/{id}")]
        public IEnumerable<servicios_gimnasio_Result> tratamientosGym(int id)
        {
            Debug.WriteLine("en el store");
            return db.servicios_gimnasio(id);
        }

        // GET: api/StoreProcedures/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/StoreProcedures
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/StoreProcedures/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/StoreProcedures/5
        public void Delete(int id)
        {
        }
    }
}
