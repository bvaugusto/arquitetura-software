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
                var books = new Book();
                return books.createObject(null);
                }
            catch (System.Exception)
            {
                throw;
            }
        }
        
        // GET api/book/5
        [HttpGet("{id}")]
        public ActionResult<List<Book>> Get(int id)
        {
            try
            {
                var books = new Book();
                return books.createObject(id);
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
        public string title { get; set; }
        public string author { get; set; }
        public int year { get; set; }
        public string isbn { get; set; }
        public decimal price { get; set; }



        public Book(){}

        public Book(int id, string title, string author, int year, string isbn, decimal price)
        {
            this.id = id;
            this.title = title;
            this.author = author;
            this.year = year;
            this.isbn = isbn;
            this.price = price;
        }

        public List<Book> createObject(int? id)
        {
            var book = new List<Book>();
            book.Add(new Book(1, "Livro 1", "Autor A", 2019, "8595083274", 50.00m));
            book.Add(new Book(1, "Livro 2", "Autor B", 2018, "8595083274", 60.00m));
            book.Add(new Book(1, "Livro 3", "Autor C", 2017, "8595083274", 70.00m));
            book.Add(new Book(1, "Livro 4", "Autor D", 2016, "8595083274", 80.00m));
            book.Add(new Book(1, "Livro 5", "Autor E", 2015, "8595083274", 90.00m));
            return book;
        }


    }
}
