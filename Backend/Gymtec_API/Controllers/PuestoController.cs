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
    public class PuestoController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Puesto
        public IQueryable<Puesto> GetPuesto()
        {
            return db.Puesto;
        }

        // GET: api/Puesto/5
        [ResponseType(typeof(Puesto))]
        public async Task<IHttpActionResult> GetPuesto(int id)
        {
            Puesto puesto = await db.Puesto.FindAsync(id);
            if (puesto == null)
            {
                return NotFound();
            }

            return Ok(puesto);
        }

        // PUT: api/Puesto/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPuesto(int id, Puesto puesto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != puesto.id)
            {
                return BadRequest();
            }

            db.Entry(puesto).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PuestoExists(id))
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

        // POST: api/Puesto
        [ResponseType(typeof(Puesto))]
        public async Task<IHttpActionResult> PostPuesto(Puesto puesto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Puesto.Add(puesto);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = puesto.id }, puesto);
        }

        // DELETE: api/Puesto/5
        [ResponseType(typeof(Puesto))]
        public async Task<IHttpActionResult> DeletePuesto(int id)
        {
            Puesto puesto = await db.Puesto.FindAsync(id);
            if (puesto == null)
            {
                return NotFound();
            }

            db.Puesto.Remove(puesto);
            await db.SaveChangesAsync();

            return Ok(puesto);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PuestoExists(int id)
        {
            return db.Puesto.Count(e => e.id == id) > 0;
        }
    }
}