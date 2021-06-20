using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Gymtec_API.Controllers
{
    public class PuestoPermisoController : ApiController
    {

        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();
        // POST: api/PuestoPermiso
        [HttpPost]
        [Route("api/PuestoPermiso/{idpuesto}")]
        public async void Post(int idpuesto,List<string> datos)
        {
            var puesto = db.Puesto.Find(idpuesto);
            List<Permiso> permisos=new List<Permiso>();
            datos.ForEach(idpermiso =>{
                puesto.Permiso.Add(db.Permiso.Find(idpermiso));
            });
            await db.SaveChangesAsync();
        }
    }
}
