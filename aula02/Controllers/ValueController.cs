using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;



namespace Aula02.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ValueController : ControllerBase
    {
        // GET api/value
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            try
            {
                // List<Object> resultado = new List<object>();
                // resultado.Add(new {Nome = "Linha de Código", URL = "www.linhadecodigo.com.br"});
            }
            catch (System.Exception)
            {
                
                throw;
            }
            return new string[] { "value1", "value2" };
            
            // return Json(new {foo="bar", baz="Blech"});

            
            // return Json(resultado);
        }

        // GET api/value/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            try
            {
                return "value";
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        // POST api/value
        [HttpPost]
        public void Post([FromBody] string value)
        {
            try
            {
                return;
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        // PUT api/value/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            try
            {
                return;
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        // DELETE api/value/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            try
            {
                return;
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }
    }
}
