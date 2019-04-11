using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Aula02.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        // GET api/book
        [HttpGet]
        public ActionResult<List<Book>> Get()
        {
            try
            {

                List<Book> result = new List<Book>();
                result.Add(new Book(1, "Teste 1"));
                result.Add(new Book(2, "Teste 2"));
                result.Add(new Book(3, "Teste 3"));
                result.Add(new Book(4, "Teste 4"));
                result.Add(new Book(5, "Teste 5"));
                result.Add(new Book(6, "Teste 6"));
                result.Add(new Book(7, "Teste 7"));

                return result;
            }
            catch (System.Exception)
            {
                throw;
            }

        }


        // GET api/book/5
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

        // POST api/book
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

        // PUT api/book/5
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

        // DELETE api/book/5
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

    public class Book
    {
        public int id { get; set; }
        public string nome { get; set; }

        public Book(int id, string nome)
        {
            this.id = id;
            this.nome = nome;
        }


    }
}
