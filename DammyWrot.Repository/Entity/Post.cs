using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DammyWrot.Repository.Entity
{
    public class Post
    {
        public Post()
        {
            this.Comments = new HashSet<Comment>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string Content { get; set; }
        public DateTimeOffset DateCreated { get; set; } = DateTime.Now;
        public long Likes { get; set; }
        public User User { get; set; }
        public long UserId { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
