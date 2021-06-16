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
    public class SucursalController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Sucursal

        public IQueryable<Sucursal> GetSucursal()
        {
            return db.Sucursal;
        }

        // GET: api/Sucursal/5
        [ResponseType(typeof(Sucursal))]
        public async Task<IHttpActionResult> GetSucursal(int id)
        {
            Sucursal sucursal = await db.Sucursal.FindAsync(id);
            if (sucursal == null)
            {
                return NotFound();
            }

            return Ok(sucursal);
        }

        // PUT: api/Sucursal/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSucursal(int id, Sucursal sucursal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sucursal.id)
            {
                return BadRequest();
            }

            db.Entry(sucursal).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SucursalExists(id))
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

        // POST: api/Sucursal
        [ResponseType(typeof(Sucursal))]
        public async Task<IHttpActionResult> PostSucursal(Sucursal sucursal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Sucursal.Add(sucursal);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = sucursal.id }, sucursal);
        }

        // DELETE: api/Sucursal/5
        [ResponseType(typeof(Sucursal))]
        public async Task<IHttpActionResult> DeleteSucursal(int id)
        {
            Sucursal sucursal = await db.Sucursal.FindAsync(id);
            if (sucursal == null)
            {
                return NotFound();
            }

            db.Sucursal.Remove(sucursal);
            await db.SaveChangesAsync();

            return Ok(sucursal);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SucursalExists(int id)
        {
            return db.Sucursal.Count(e => e.id == id) > 0;
        }
    }
}