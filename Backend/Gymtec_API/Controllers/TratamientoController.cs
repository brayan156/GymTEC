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
    public class TratamientoController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Tratamiento
        public IQueryable<Tratamiento> GetTratamiento()
        {
            return db.Tratamiento;
        }

        // GET: api/Tratamiento/5
        [ResponseType(typeof(Tratamiento))]
        public async Task<IHttpActionResult> GetTratamiento(int id)
        {
            Tratamiento tratamiento = await db.Tratamiento.FindAsync(id);
            if (tratamiento == null)
            {
                return NotFound();
            }

            return Ok(tratamiento);
        }

        // PUT: api/Tratamiento/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTratamiento(int id, Tratamiento tratamiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tratamiento.id)
            {
                return BadRequest();
            }

            db.Entry(tratamiento).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TratamientoExists(id))
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

        // POST: api/Tratamiento
        [ResponseType(typeof(Tratamiento))]
        public async Task<IHttpActionResult> PostTratamiento(Tratamiento tratamiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Tratamiento.Add(tratamiento);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tratamiento.id }, tratamiento);
        }

        // DELETE: api/Tratamiento/5
        [ResponseType(typeof(Tratamiento))]
        public async Task<IHttpActionResult> DeleteTratamiento(int id)
        {
            Tratamiento tratamiento = await db.Tratamiento.FindAsync(id);
            if (tratamiento == null)
            {
                return NotFound();
            }

            db.Tratamiento.Remove(tratamiento);
            await db.SaveChangesAsync();

            return Ok(tratamiento);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TratamientoExists(int id)
        {
            return db.Tratamiento.Count(e => e.id == id) > 0;
        }
    }
}