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
    public class ServiciosController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Servicios
        public IQueryable<Servicio> GetServicio()
        {
            return db.Servicio;
        }

        // GET: api/Servicios/5
        [ResponseType(typeof(Servicio))]
        public async Task<IHttpActionResult> GetServicio(int id)
        {
            Servicio servicio = await db.Servicio.FindAsync(id);
            if (servicio == null)
            {
                return NotFound();
            }

            return Ok(servicio);
        }

        // PUT: api/Servicios/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutServicio(int id, Servicio servicio)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != servicio.id)
            {
                return BadRequest();
            }

            db.Entry(servicio).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Servicios
        [ResponseType(typeof(Servicio))]
        public async Task<IHttpActionResult> PostServicio(Servicio servicio)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Servicio.Add(servicio);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = servicio.id }, servicio);
        }

        // DELETE: api/Servicios/5
        [ResponseType(typeof(Servicio))]
        public async Task<IHttpActionResult> DeleteServicio(int id)
        {
            Servicio servicio = await db.Servicio.FindAsync(id);
            if (servicio == null)
            {
                return NotFound();
            }

            db.Servicio.Remove(servicio);
            await db.SaveChangesAsync();

            return Ok(servicio);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ServicioExists(int id)
        {
            return db.Servicio.Count(e => e.id == id) > 0;
        }
    }
}