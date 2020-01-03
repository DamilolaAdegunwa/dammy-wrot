using DammyWrot.Repository.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DammyWrot.Repository.PersistenceLogic
{
    public interface IUserRepository
    {
        public Task<int> Count(Func<User, bool> predicate);
        public Task Create(User model);
        public Task Delete(User model);
        public Task<IEnumerable<User>> Get(Func<User, bool> predicate);

        public Task<IEnumerable<User>> Get(long[] Ids);
        public Task<IEnumerable<User>> Get();
        public Task<User> Get(long Id);
        public Task Update(User model);
    }
}
