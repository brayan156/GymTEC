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
    public class mostrar_empleadosController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/mostrar_empleados
        public IQueryable<mostrar_empleados> Getmostrar_empleados()
        {
            return db.mostrar_empleados;
        }

        // GET: api/mostrar_empleados/5
        [ResponseType(typeof(mostrar_empleados))]
        public async Task<IHttpActionResult> Getmostrar_empleados(int id)
        {
            mostrar_empleados mostrar_empleados = await db.mostrar_empleados.FindAsync(id);
            if (mostrar_empleados == null)
            {
                return NotFound();
            }

            return Ok(mostrar_empleados);
        }

        // PUT: api/mostrar_empleados/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putmostrar_empleados(int id, mostrar_empleados mostrar_empleados)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != mostrar_empleados.cedula)
            {
                return BadRequest();
            }

            db.Entry(mostrar_empleados).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!mostrar_empleadosExists(id))
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

        // POST: api/mostrar_empleados
        [ResponseType(typeof(mostrar_empleados))]
        public async Task<IHttpActionResult> Postmostrar_empleados(mostrar_empleados mostrar_empleados)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.mostrar_empleados.Add(mostrar_empleados);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (mostrar_empleadosExists(mostrar_empleados.cedula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = mostrar_empleados.cedula }, mostrar_empleados);
        }

        // DELETE: api/mostrar_empleados/5
        [ResponseType(typeof(mostrar_empleados))]
        public async Task<IHttpActionResult> Deletemostrar_empleados(int id)
        {
            mostrar_empleados mostrar_empleados = await db.mostrar_empleados.FindAsync(id);
            if (mostrar_empleados == null)
            {
                return NotFound();
            }

            db.mostrar_empleados.Remove(mostrar_empleados);
            await db.SaveChangesAsync();

            return Ok(mostrar_empleados);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool mostrar_empleadosExists(int id)
        {
            return db.mostrar_empleados.Count(e => e.cedula == id) > 0;
        }
    }
}