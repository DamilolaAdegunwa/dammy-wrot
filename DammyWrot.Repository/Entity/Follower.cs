using System;
using System.Collections.Generic;
using System.Text;

namespace DammyWrot.Repository.Entity
{
    public class Follower
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long FollowerId { get; set; }
    }
}
