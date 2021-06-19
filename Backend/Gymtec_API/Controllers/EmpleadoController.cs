using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Gymtec_API;

namespace Gymtec_API.Controllers
{
    public class EmpleadoController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/Empleado
        public IQueryable<Empleado> GetEmpleado()
        {
            return db.Empleado;
        }

        // GET: api/Empleado/5
        [ResponseType(typeof(Empleado))]
        public async Task<IHttpActionResult> GetEmpleado(int id)
        {
            Empleado empleado = await db.Empleado.FindAsync(id);
            if (empleado == null)
            {
                return NotFound();
            }

            return Ok(empleado);
        }

        // PUT: api/Empleado/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEmpleado(int id, Empleado empleado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != empleado.cedula)
            {
                return BadRequest();
            }


            var ebase = db.Empleado.Find(id);



            if (empleado.contrasena != ebase.contrasena)
            {
                string hash = "holanosoyelhash";
                byte[] data = Encoding.UTF8.GetBytes(empleado.contrasena);
                MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
                TripleDESCryptoServiceProvider tripDES = new TripleDESCryptoServiceProvider();
                tripDES.Key = md5.ComputeHash(Encoding.UTF8.GetBytes(hash));
                tripDES.Mode = CipherMode.ECB;
                ICryptoTransform transform = tripDES.CreateEncryptor();
                byte[] result = transform.TransformFinalBlock(data, 0, data.Length);
                var encriptado = Convert.ToBase64String(result);
                empleado.contrasena = encriptado;

            }


            db.Entry(empleado).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpleadoExists(id))
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

        // POST: api/Empleado
        [ResponseType(typeof(Empleado))]
        public async Task<IHttpActionResult> PostEmpleado(Empleado empleado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            string hash = "holanosoyelhash";
            byte[] data = Encoding.UTF8.GetBytes(empleado.contrasena);
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            TripleDESCryptoServiceProvider tripDES = new TripleDESCryptoServiceProvider();
            tripDES.Key = md5.ComputeHash(Encoding.UTF8.GetBytes(hash));
            tripDES.Mode = CipherMode.ECB;
            ICryptoTransform transform = tripDES.CreateEncryptor();
            byte[] result = transform.TransformFinalBlock(data, 0, data.Length);
            var encriptado = Convert.ToBase64String(result);
            empleado.contrasena = encriptado;
            db.Empleado.Add(empleado);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmpleadoExists(empleado.cedula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = empleado.cedula }, empleado);
        }

        // DELETE: api/Empleado/5
        [ResponseType(typeof(Empleado))]
        public async Task<IHttpActionResult> DeleteEmpleado(int id)
        {
            Empleado empleado = await db.Empleado.FindAsync(id);
            if (empleado == null)
            {
                return NotFound();
            }

            db.Empleado.Remove(empleado);
            await db.SaveChangesAsync();

            return Ok(empleado);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmpleadoExists(int id)
        {
            return db.Empleado.Count(e => e.cedula == id) > 0;
        }
    }
}