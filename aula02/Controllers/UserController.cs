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
        public ActionResult<List<User>> Get()
        {
            try
            {
                List<User> user = new List<User>();
                user.Add(new User(1, "Bruno Augusto", "bvaugusto@gmail.com", 00000000000));
                user.Add(new User(2, "Augusto Bruno", "augusto@gmail.com", 00000000000));

                return user;
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

    public class User
    {
        public int id { get; set; }
        public string fullname { get; set; }
        public string email { get; set; }
        public int cpf { get; set; }

        public User(){}

        public User(int id, string fullname, string email, int cpf)
        {
            this.id = id;
            this.fullname = fullname;
            this.email = email;
            this.cpf = cpf;
        }
    }
}
