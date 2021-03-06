using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
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
        public IEnumerable<productos_gimnasio_Result> productos_gimnasio(int idsucursal)
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
        public IEnumerable<login_admin_Result> login_admin(string contrasena, string correo)
        {
            Debug.WriteLine("en el store");

            string hash = "holanosoyelhash";
            byte[] data = Encoding.UTF8.GetBytes(contrasena);
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            TripleDESCryptoServiceProvider tripDES = new TripleDESCryptoServiceProvider();
            tripDES.Key = md5.ComputeHash(Encoding.UTF8.GetBytes(hash));
            tripDES.Mode = CipherMode.ECB;
            ICryptoTransform transform = tripDES.CreateEncryptor();
            byte[] result = transform.TransformFinalBlock(data, 0, data.Length);
            var encriptado = Convert.ToBase64String(result);

            return db.login_admin(correo, encriptado);
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


        [HttpPost]
        [Route("api/StoreProcedures/filtro_clases/{fechainicio}/{fechafin}")]
        public IEnumerable<filtro_clases_Result> filtro_clases(DateTime? fechainicio, DateTime? fechafin, dynamic datos)
        {
            Debug.WriteLine("en el store");
            int idsucursal = datos["idsucursal"];
            string nombre_servicio = datos["nombre_servicio"];
            int idcliente = datos["idcliente"];
            return db.filtro_clases(idsucursal, nombre_servicio, fechainicio, fechafin, idcliente);
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
