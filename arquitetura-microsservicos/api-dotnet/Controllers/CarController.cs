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
        [HttpGet]
        public ActionResult<List<Car>> Get()
        {
            try
            {
                List<Car> car = new List<Car>();
                return car;
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

        public Car(){}
        public Car(int id, int idBook)
        {
            this.id = id;
            this.idBook = idBook;
        }
    }
}