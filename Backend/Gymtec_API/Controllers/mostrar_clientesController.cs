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
    public class mostrar_clientesController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/mostrar_clientes
        public IQueryable<mostrar_clientes> Getmostrar_clientes()
        {
            return db.mostrar_clientes;
        }




        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool mostrar_clientesExists(int id)
        {
            return db.mostrar_clientes.Count(e => e.cedula == id) > 0;
        }
    }
}