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
                return search;
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
