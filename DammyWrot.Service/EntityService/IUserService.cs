using DammyWrot.Repository.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace Array.ApplicationServices.EntityServices
{
    public interface IUserService
    {
        Task Create(User model);
        Task<IEnumerable<User>> Get(Func<User, bool> predicate);
        Task<IEnumerable<User>> Get(long[] Ids);
        Task<IEnumerable<User>> Get();
        Task<User> Get(long Id);
        Task Update(User model);
        Task Delete(User model);
        Task<int> Count(Func<User, bool> predicate);
    }
}
