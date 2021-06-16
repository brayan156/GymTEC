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
    public class TelefonoController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Telefono
        public IQueryable<Telefono> GetTelefono()
        {
            return db.Telefono;
        }

        // GET: api/Telefono/5
        [ResponseType(typeof(Telefono))]
        public async Task<IHttpActionResult> GetTelefono(int id)
        {
            Telefono telefono = await db.Telefono.FindAsync(id);
            if (telefono == null)
            {
                return NotFound();
            }

            return Ok(telefono);
        }

        // PUT: api/Telefono/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTelefono(int id, Telefono telefono)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != telefono.id)
            {
                return BadRequest();
            }

            db.Entry(telefono).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TelefonoExists(id))
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

        // POST: api/Telefono
        [ResponseType(typeof(Telefono))]
        public async Task<IHttpActionResult> PostTelefono(Telefono telefono)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Telefono.Add(telefono);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TelefonoExists(telefono.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = telefono.id }, telefono);
        }

        // DELETE: api/Telefono/5
        [ResponseType(typeof(Telefono))]
        public async Task<IHttpActionResult> DeleteTelefono(int id)
        {
            Telefono telefono = await db.Telefono.FindAsync(id);
            if (telefono == null)
            {
                return NotFound();
            }

            db.Telefono.Remove(telefono);
            await db.SaveChangesAsync();

            return Ok(telefono);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TelefonoExists(int id)
        {
            return db.Telefono.Count(e => e.id == id) > 0;
        }
    }
}