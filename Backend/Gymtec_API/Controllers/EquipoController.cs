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
    public class EquipoController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Equipo
        public IQueryable<Equipo> GetEquipo()
        {
            return db.Equipo;
        }

        // GET: api/Equipo/5
        [ResponseType(typeof(Equipo))]
        public async Task<IHttpActionResult> GetEquipo(int id)
        {
            Equipo equipo = await db.Equipo.FindAsync(id);
            if (equipo == null)
            {
                return NotFound();
            }

            return Ok(equipo);
        }

        // PUT: api/Equipo/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEquipo(int id, Equipo equipo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != equipo.nSerie)
            {
                return BadRequest();
            }

            db.Entry(equipo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquipoExists(id))
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

        // POST: api/Equipo
        [ResponseType(typeof(Equipo))]
        public async Task<IHttpActionResult> PostEquipo(Equipo equipo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Equipo.Add(equipo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = equipo.nSerie }, equipo);
        }

        // DELETE: api/Equipo/5
        [ResponseType(typeof(Equipo))]
        public async Task<IHttpActionResult> DeleteEquipo(int id)
        {
            Equipo equipo = await db.Equipo.FindAsync(id);
            if (equipo == null)
            {
                return NotFound();
            }

            db.Equipo.Remove(equipo);
            await db.SaveChangesAsync();

            return Ok(equipo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EquipoExists(int id)
        {
            return db.Equipo.Count(e => e.nSerie == id) > 0;
        }
    }
}