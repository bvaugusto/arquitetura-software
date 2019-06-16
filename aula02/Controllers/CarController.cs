using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Aula02.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        // GET api/car
        [HttpGet]
        public ActionResult<List<Car>> Get()
        {
            try
            {
                var car = new Car();
                return car.createObject(null);
                
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        // GET api/car/5
        [HttpGet("{id}")]
        public ActionResult<List<Car>> Get(int id)
        {
            try
            {
                var car = new Car();
                return car.createObject(id);
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
        }

        // POST api/car
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

        // PUT api/car/5
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

        // DELETE api/car/5
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

    public class Car
    {
        public int id { get; set; }
        public int idBook { get; set; }
        public int idSession { get; set; }

        public Car(){}
        public Car(int id, int idBook, int idSession)
        {
            this.id = id;
            this.idBook = idBook;
            this.idSession = idSession;
        }

        public List<Car> createObject(int? id)
        {
             var car = new List<Car>();
                car.Add(new Car(1, 1, 31321321));
            return car;
        }
    }
}