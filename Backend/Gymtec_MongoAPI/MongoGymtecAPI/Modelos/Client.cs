using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MongoGymtecAPI.Modelos
{
    public class Client
    {
        [BsonId]
        [BsonRepresentation(BsonType.Int32)]
        public int cedula { get; set; }
        public string nombre { get; set; }
        public string primerApellido { get; set; }
        public string segundoApellido { get; set; }
        public int edad { get; set; }
        public DateTime fechaNacimiento { get; set; }
        public int peso { get; set; }
        public float imc { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public string correo { get; set; }
        public string contrasena { get; set; }


    }
}
