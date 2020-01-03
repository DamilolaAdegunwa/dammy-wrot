using System;
using System.Collections.Generic;

namespace DammyWrot.Repository.Entity
{
    public class User
    {
        public User()
        {
            this.Posts = new HashSet<Post>();
        }
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
