using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Gymtec_API.Controllers
{
    public class ProductoSucursalController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();


        // POST: api/ProductoSucursal
        [HttpPost]
        [Route("api/ProductoSucursal/{idproducto}/{idSucursal}")]
        public void Post(int idproducto, int idSucursal)
        {
            var sucursal = db.Sucursal.Find(idSucursal);
            sucursal.Producto.Add(db.Producto.Find(idproducto));
            db.SaveChanges();
        }



        // DELETE: api/ProductoSucursal/5
        [HttpDelete]
        [Route("api/ProductoSucursal/{idproducto}/{idSucursal}")]
        public void Delete(int idproducto, int idSucursal)
        {

            var sucursal = db.Sucursal.Find(idSucursal);
            sucursal.Producto.Remove(db.Producto.Find(idproducto));
            db.SaveChanges();
        }
    }
}
