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
    public class SearchController : ControllerBase
    {
        // GET api/search
        [HttpGet]
        public ActionResult<List<Search>> Get()
        {
            try
            {
                List<Search> search = new List<Search>();
                search.Add(new Search(1, "teste 1"));
                search.Add(new Search(2, "teste 2"));
                search.Add(new Search(3, "teste 3"));

                return search;
            }
            catch (System.Exception)
            {
                
                throw;
            }

            // return new string[] { "value1", "value2" };
            
            // return Json(new {foo="bar", baz="Blech"});
            
            // return Json(resultado);
        }

        // GET api/search/5
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

        // POST api/search
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

        // PUT api/search/5
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

        // DELETE api/search/5
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

    public class Search
    {
        public int Codigo;
        public string Nome;

        public Search(){}

        public Search(int cod, string nome)
        {
            this.Codigo = cod;
            this.Nome = nome;
        }
    }
}
