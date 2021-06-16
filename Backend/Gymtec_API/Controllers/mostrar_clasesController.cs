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
    public class mostrar_clasesController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/mostrar_clases
        public IQueryable<mostrar_clases> Getmostrar_clases()
        {
            return db.mostrar_clases;
        }



        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool mostrar_clasesExists(int id)
        {
            return db.mostrar_clases.Count(e => e.id == id) > 0;
        }
    }
}