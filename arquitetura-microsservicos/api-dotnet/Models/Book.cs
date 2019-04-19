using System;
namespace Aula02.Models
{
    public class Book
    {

        public long Id { get; set; }
        public string Name { get; set; }

        //public Book(long id, string name)
        //{
        //    this.Id = id;
        //    this.Name = name;
        //}

        public Book(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
