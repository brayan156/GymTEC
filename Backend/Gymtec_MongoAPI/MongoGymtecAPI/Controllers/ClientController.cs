using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoGymtecAPI.Modelos;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MongoGymtecAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        string databasename = "Mongodbgymtecdatabase";
        string modelname = "Client";
        IMongoCollection<Client> collection;

        public ClientController(IMongoClient client)
        {
            var cliente =new MongoClient("mongodb+srv://admingymtec:12345@cluster0.q4x2d.mongodb.net/Mongodbgymtecdatabase?retryWrites=true&w=majority");
            var database = cliente.GetDatabase(databasename);
            collection = database.GetCollection<Client>(modelname);


        }





        // GET: api/<ClientController>
        [HttpGet]
        public List<Client> Get()
        { 
            return collection.Find(c=>true).ToList();
        }

        // GET api/<ClientController>/5
        [HttpGet("{id}")]
        public List<Client> Get(int id)
        {
           return collection.Find(c => c.cedula == id).ToList();
        }


        [HttpGet("{correo}/{contrasena}")]
        public List<Client> login(string correo,string contrasena)
        {

            string hash = "holanosoyelhash";
            byte[] data = Encoding.UTF8.GetBytes(contrasena);
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            TripleDESCryptoServiceProvider tripDES = new TripleDESCryptoServiceProvider();
            tripDES.Key = md5.ComputeHash(Encoding.UTF8.GetBytes(hash));
            tripDES.Mode = CipherMode.ECB;
            ICryptoTransform transform = tripDES.CreateEncryptor();
            byte[] result = transform.TransformFinalBlock(data, 0,data.Length);
            var encriptado = Convert.ToBase64String(result);

            return collection.Find(c => c.correo==correo & c.contrasena==encriptado).ToList(); ;
        }

        // POST api/<ClientController>
        [HttpPost]
        public void Post(Client cliente)
        {

            string hash = "holanosoyelhash";
            byte[] data = Encoding.UTF8.GetBytes(cliente.contrasena);
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            TripleDESCryptoServiceProvider tripDES = new TripleDESCryptoServiceProvider();
            tripDES.Key = md5.ComputeHash(Encoding.UTF8.GetBytes(hash));
            tripDES.Mode = CipherMode.ECB;
            ICryptoTransform transform = tripDES.CreateEncryptor();
            byte[] result = transform.TransformFinalBlock(data, 0, data.Length);
            var encriptado = Convert.ToBase64String(result);
            cliente.contrasena = encriptado;
            collection.InsertOne(cliente);
        }

        // PUT api/<ClientController>/5
        [HttpPut("{id}")]
        public void Put(int id, Client cliente)
        {
            collection.ReplaceOne(c => c.cedula == cliente.cedula,cliente);
        }

        // DELETE api/<ClientController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            collection.DeleteOne(c => c.cedula == id);
        }
    }
}
