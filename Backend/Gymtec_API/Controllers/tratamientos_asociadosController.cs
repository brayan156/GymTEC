using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Gymtec_API;

namespace Gymtec_API.Controllers
{
    public class tratamientos_asociadosController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/tratamientos_asociados
        public IQueryable<tratamientos_asociados> Gettratamientos_asociados()
        {
            return db.tratamientos_asociados;
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tratamientos_asociadosExists(int id)
        {
            return db.tratamientos_asociados.Count(e => e.cedula == id) > 0;
        }
    }
}