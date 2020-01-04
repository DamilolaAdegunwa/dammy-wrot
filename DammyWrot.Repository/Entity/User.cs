using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DammyWrot.Repository.Entity
{
    public class User
    {
        public User()
        {
            this.Posts = new HashSet<Post>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string Name { get; set; }
        public string Token { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public bool IsVerified { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}
