using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Aula02.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        // GET api/review
        [HttpGet]
        public ActionResult<List<Review>> Get()
        {
            try
            {
                List<Review> review = new List<Review>();
                review.Add(new Review(1, 1, 1, "Muito Bom", "O autor consegue trazer o leitor para dentro da história.", 5, DateTimeOffset.Now.LocalDateTime));
                review.Add(new Review(2, 2, 2, "Ruim", "Não gostei.", 1, DateTimeOffset.Now.LocalDateTime));
                return review;
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }
    }

    public class Review
    {
        public int idReview { get; set; }
        public int idBook { get; set; }
        public int idUser { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public int rating { get; set; }
        public DateTime year {get; set; }

        public Review(){}

        public Review(int idReview, int idBook, int idUser, string title, string description, int rating, DateTime year)
        {
            this.idReview = idReview;
            this.idBook = idBook;
            this.idUser = idUser;
            this.title = title;
            this.description = description;
            this.rating = rating;
            this.year = year;
        }
    }
}
