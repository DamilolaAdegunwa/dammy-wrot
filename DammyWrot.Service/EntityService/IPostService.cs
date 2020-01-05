using DammyWrot.Repository.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace DammyWrot.Service.EntityServices
{
    public interface IPostService
    {
        Task Create(Post model);
        Task<IEnumerable<Post>> Get(Func<Post, bool> predicate);
        Task<IEnumerable<Post>> Get(long[] Ids);
        Task<IEnumerable<Post>> Get();
        Task<Post> Get(long Id);
        Task Update(Post model);
        Task Delete(Post model);
        Task<int> Count(Func<Post, bool> predicate);
    }
}
