using System;
using System.Collections.Generic;
using System.Text;

namespace DammyWrot.Repository.Entity
{
    public class Comment
    {
        public long Id { get; set; }
        public string Content { get; set; }
        public long Likes { get; set; }
        public DateTimeOffset DateCreated { get; set; }
        public Post Post { get; set; }
    }
}
