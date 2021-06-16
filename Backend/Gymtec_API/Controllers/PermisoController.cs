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
    public class PermisoController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Permiso
        public IQueryable<Permiso> GetPermiso()
        {
            return db.Permiso;
        }

        // GET: api/Permiso/5
        [ResponseType(typeof(Permiso))]
        public async Task<IHttpActionResult> GetPermiso(string id)
        {
            Permiso permiso = await db.Permiso.FindAsync(id);
            if (permiso == null)
            {
                return NotFound();
            }

            return Ok(permiso);
        }

        // PUT: api/Permiso/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPermiso(string id, Permiso permiso)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != permiso.nombre)
            {
                return BadRequest();
            }

            db.Entry(permiso).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PermisoExists(id))
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

        // POST: api/Permiso
        [ResponseType(typeof(Permiso))]
        public async Task<IHttpActionResult> PostPermiso(Permiso permiso)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Permiso.Add(permiso);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PermisoExists(permiso.nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = permiso.nombre }, permiso);
        }

        // DELETE: api/Permiso/5
        [ResponseType(typeof(Permiso))]
        public async Task<IHttpActionResult> DeletePermiso(string id)
        {
            Permiso permiso = await db.Permiso.FindAsync(id);
            if (permiso == null)
            {
                return NotFound();
            }

            db.Permiso.Remove(permiso);
            await db.SaveChangesAsync();

            return Ok(permiso);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PermisoExists(string id)
        {
            return db.Permiso.Count(e => e.nombre == id) > 0;
        }
    }
}