using DammyWrot.Repository.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DammyWrot.Repository.PersistenceLogic
{
    public interface IPostRepository
    {
        public Task<int> Count(Func<Post, bool> predicate);
        public Task Create(Post model);
        public Task Delete(Post model);
        public Task<IEnumerable<Post>> Get(Func<Post, bool> predicate);

        public Task<IEnumerable<Post>> Get(long[] Ids);
        public Task<IEnumerable<Post>> Get();
        public Task<Post> Get(long Id);
        public Task Update(Post model);
    }
}
