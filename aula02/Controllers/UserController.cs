using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Aula02.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET api/user
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            try
            {
                return new string[] { "value1", "value2" };
            }
            catch (System.Exception)
            {
                
                throw;
            }
            
        }

        // GET api/user/5
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

        // POST api/user
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

        // PUT api/user/5
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

        // DELETE api/user/5
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
