using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Aula02.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        // GET api/order
        [HttpGet]
        public ActionResult<List<Order>> Get()
        {
            try
            {
                var Order = new Order();
                return Order.createObject(null);
                
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        // GET api/order/5
        [HttpGet("{id}")]
        public ActionResult<List<Order>> Get(int id)
        {
            try
            {
                var Order = new Order();
                return Order.createObject(id);
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
        }

        // POST api/order
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

        // PUT api/order/5
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

        // DELETE api/order/5
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

    public class Order
    {
        public Order(){}

        public List<Order> createObject(int? id)
        {
            var review = new List<Order>();
            return review;
        }
        
    }
}