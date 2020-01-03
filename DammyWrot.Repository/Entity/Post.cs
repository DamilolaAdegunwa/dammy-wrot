using System;
using System.Collections.Generic;
using System.Text;

namespace DammyWrot.Repository.Entity
{
    public class Post
    {
        public Post()
        {
            this.Comments = new HashSet<Comment>();
        }
        public long Id { get; set; }
        public string Content { get; set; }
        public DateTimeOffset DateCreaed { get; set; }
        public long Likes { get; set; }
        public User User { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
