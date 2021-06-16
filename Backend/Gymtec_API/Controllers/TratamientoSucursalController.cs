using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Gymtec_API.Controllers
{
    public class TratamientoSucursalController : ApiController
    {

        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();


        // POST: api/TratamientoSucursal
        [HttpPost]
        [Route("api/TratamientoSucursal/{idtratamiento}/{idSucursal}")]
        public void Post(int idtratamiento, int idSucursal)
        {
            var sucursal = db.Sucursal.Find(idSucursal);
            sucursal.Tratamiento.Add(db.Tratamiento.Find(idtratamiento));
            db.SaveChanges();
        }



        // DELETE: api/TratamientoSucursal/5
        [HttpDelete]
        [Route("api/TratamientoSucursal/{idtratamiento}/{idSucursal}")]
        public void Delete(int idtratamiento, int idSucursal)
        {

            var sucursal = db.Sucursal.Find(idSucursal);
            sucursal.Tratamiento.Remove(db.Tratamiento.Find(idtratamiento));
            db.SaveChanges();
        }
    }

}