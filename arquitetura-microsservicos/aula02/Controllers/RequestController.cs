using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Aula02.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        // GET api/request
        [HttpGet]
        public ActionResult<List<Request>> Get()
        {
            try
            {
                var request = new Request();
                return request.createObject(null);
                }
            catch (System.Exception)
            {
                throw;
            }
        }

        // GET api/request/5
        [HttpGet("{id}")]
        public ActionResult<List<Request>> Get(int id)
        {
            try
            {
                var Request = new Request();
                return Request.createObject(id);
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
        }

        // POST api/request
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

        // PUT api/request/5
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

        // DELETE api/request/5
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

    public class Request
        {
            public long idCodRequest { get; set; }
            public int idStatusRequest { get; set; }
            public int codProduct { get; set; }
            public decimal priceProduct { get; set; }
            public int dateRequest { get; set; }

            public Request(){}

            public Request(long idCodRequest, int idStatusRequest, int codProduct, decimal priceProduct, int dateRequest )
            {
                this.idCodRequest = idCodRequest;
                this.idStatusRequest = idStatusRequest;
                this.codProduct = codProduct;
                this.priceProduct = priceProduct;
                this.dateRequest = dateRequest;
            }

            public List<Request> createObject(int? id)
            {
                var request = new List<Request>();
                request.Add(new Request(1, 1, 1, 50.00m, 2019));
                return request;
            }

            
        }
}