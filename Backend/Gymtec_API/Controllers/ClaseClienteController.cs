using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Gymtec_API.Controllers
{
    public class ClaseClienteController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();
        // GET: api/ClaseCliente


        // POST: api/ClaseCliente
        [HttpPost]
        [Route("api/ClaseCliente/{idclase}/{idcliente}")]
        public void Post(int idclase, int idcliente)
        {
            var cliente = db.Cliente.Find(idcliente);
            cliente.Clase.Add(db.Clase.Find(idclase));
            db.SaveChanges();
        }



        // DELETE: api/ClaseCliente/5
        [HttpDelete]
        [Route("api/ClaseCliente/{idclase}/{idcliente}")]
        public void Delete(int idclase, int idcliente)
        {

            var cliente = db.Cliente.Find(idcliente);
            cliente.Clase.Remove(db.Clase.Find(idclase));
            db.SaveChanges();
        }
    }
}
