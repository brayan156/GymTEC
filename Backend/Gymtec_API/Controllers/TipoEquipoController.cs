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
    public class TipoEquipoController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/TipoEquipo
        public IQueryable<TipoEquipo> GetTipoEquipo()
        {
            return db.TipoEquipo;
        }

        // GET: api/TipoEquipo/5
        [ResponseType(typeof(TipoEquipo))]
        public async Task<IHttpActionResult> GetTipoEquipo(int id)
        {
            TipoEquipo tipoEquipo = await db.TipoEquipo.FindAsync(id);
            if (tipoEquipo == null)
            {
                return NotFound();
            }

            return Ok(tipoEquipo);
        }

        // PUT: api/TipoEquipo/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoEquipo(int id, TipoEquipo tipoEquipo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoEquipo.id)
            {
                return BadRequest();
            }

            db.Entry(tipoEquipo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoEquipoExists(id))
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

        // POST: api/TipoEquipo
        [ResponseType(typeof(TipoEquipo))]
        public async Task<IHttpActionResult> PostTipoEquipo(TipoEquipo tipoEquipo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TipoEquipo.Add(tipoEquipo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tipoEquipo.id }, tipoEquipo);
        }

        // DELETE: api/TipoEquipo/5
        [ResponseType(typeof(TipoEquipo))]
        public async Task<IHttpActionResult> DeleteTipoEquipo(int id)
        {
            TipoEquipo tipoEquipo = await db.TipoEquipo.FindAsync(id);
            if (tipoEquipo == null)
            {
                return NotFound();
            }

            db.TipoEquipo.Remove(tipoEquipo);
            await db.SaveChangesAsync();

            return Ok(tipoEquipo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoEquipoExists(int id)
        {
            return db.TipoEquipo.Count(e => e.id == id) > 0;
        }
    }
}