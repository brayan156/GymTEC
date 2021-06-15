using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Gymtec_API.Controllers
{
    public class StoreProceduresController : ApiController
    {
        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();

        // GET: api/StoreProcedures



        [HttpGet]
        [Route("api/StoreProcedures/tratamientos_gimnasio/{idsucursal}")]
        public IEnumerable<tratamientos_gimnasio_Result> tratamientosGym(int idsucursal)
        {
            Debug.WriteLine("en el store");
            return db.tratamientos_gimnasio(idsucursal);
        }

        [HttpGet]
        [Route("api/StoreProcedures/servicios_gimnasio/{idsucursal}")]
        public IEnumerable<servicios_gimnasio_Result> getServGym(int idsucursal)
        {
            Debug.WriteLine("en el store");
            return db.servicios_gimnasio(idsucursal);
        }




        [HttpGet]
        [Route("api/StoreProcedures/productos_gimnasio/{idsucursal}")]
        public IEnumerable<productos_gimnasio_Result> productos_gimnasio (int idsucursal)
        {
            Debug.WriteLine("en el store");
            return db.productos_gimnasio(idsucursal);
        }


        [HttpGet]
        [Route("api/StoreProcedures/mostrar_clases_gimnasio/{idsucursal}")]
        public IEnumerable<mostrar_clases_gimnasio_Result> productos_mostrar_clases_gimnasiogimnasio(int idsucursal)
        {
            Debug.WriteLine("en el store");
            return db.mostrar_clases_gimnasio(idsucursal);
        }

        [HttpGet]
        [Route("api/StoreProcedures/login_admin/{contrasena}/{correo}")]
        public IEnumerable<login_admin_Result> login_admin(string contrasena,string correo)
        {
            Debug.WriteLine("en el store");
            return db.login_admin(correo,contrasena);
        }


        [HttpGet]
        [Route("api/StoreProcedures/inventario_gimnasio/{idsucursal}")]
        public IEnumerable<inventario_gimnasio_Result> inventario_gimnasio(int idsucursal)
        {
            Debug.WriteLine("en el store");
            return db.inventario_gimnasio(idsucursal);
        }


        [HttpGet]
        [Route("api/StoreProcedures/generar_planilla/{idsucursal}")]
        public IEnumerable<generar_planilla_Result> generar_planilla(int idsucursal)
        {
            Debug.WriteLine("en el store");
            return db.generar_planilla(idsucursal);
        }


        [HttpGet]
        [Route("api/StoreProcedures/filtro_clases")]
        public IEnumerable<filtro_clases_Result> filtro_clases(dynamic datos)
        {
            Debug.WriteLine("en el store");
            return db.filtro_clases(datos["idsucursal"],datos["nombre_servicio"],datos["fechainicio"],datos["fechafin"]);
        }

        [HttpGet]
        [Route("api/StoreProcedures/filtro_clases_cliente/{idcliente}")]
        public IEnumerable<filtro_clase_cliente_Result> filtro_clases_cliente(int idcliente)
        {
            Debug.WriteLine("en el store");
            return db.filtro_clase_cliente(idcliente);
        }

        [HttpPost]
        [Route("api/StoreProcedures/copiar_gimnasio")]
        public string copiar_gimnasio(Sucursal sucursal)
        {
            Debug.WriteLine("en el store");
            db.copiar_gimnasio(sucursal.id , sucursal.imagen, sucursal.nombre, sucursal.distrito, sucursal.canton, sucursal.provincia);
            return "realizado";
        }

        [HttpGet]
        [Route("api/StoreProcedures/copiar_calendario/{fechainicio}/{fechanuevo}")]
        public string copiar_calendario(DateTime fechainicio,DateTime fechanuevo)
        {
            Debug.WriteLine("en el store");
            db.copiar_calendario(fechainicio,fechanuevo);
            return "realizado";
        }

    }
}
