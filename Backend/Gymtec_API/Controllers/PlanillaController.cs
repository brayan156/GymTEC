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
    public class PlanillaController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Planilla
        public IQueryable<Planilla> GetPlanilla()
        {
            return db.Planilla;
        }

        // GET: api/Planilla/5
        [ResponseType(typeof(Planilla))]
        public async Task<IHttpActionResult> GetPlanilla(int id)
        {
            Planilla planilla = await db.Planilla.FindAsync(id);
            if (planilla == null)
            {
                return NotFound();
            }

            return Ok(planilla);
        }

        // PUT: api/Planilla/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPlanilla(int id, Planilla planilla)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != planilla.id)
            {
                return BadRequest();
            }

            db.Entry(planilla).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlanillaExists(id))
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

        // POST: api/Planilla
        [ResponseType(typeof(Planilla))]
        public async Task<IHttpActionResult> PostPlanilla(Planilla planilla)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Planilla.Add(planilla);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = planilla.id }, planilla);
        }

        // DELETE: api/Planilla/5
        [ResponseType(typeof(Planilla))]
        public async Task<IHttpActionResult> DeletePlanilla(int id)
        {
            Planilla planilla = await db.Planilla.FindAsync(id);
            if (planilla == null)
            {
                return NotFound();
            }

            db.Planilla.Remove(planilla);
            await db.SaveChangesAsync();

            return Ok(planilla);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlanillaExists(int id)
        {
            return db.Planilla.Count(e => e.id == id) > 0;
        }
    }
}