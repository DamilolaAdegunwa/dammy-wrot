using DammyWrot.Repository.Entity;
using DammyWrot.Repository.PersistenceLogic.Base;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DammyWrot.Repository.PersistenceLogic
{
    public class UserRepository : IUserRepository
    {
        #region fields
        private readonly IBaseRepository _baseRepository;
        private readonly ILogger<UserRepository> _logger;
        #endregion
        #region constructor
        public UserRepository(IBaseRepository baseRepository, ILogger<UserRepository> logger)
        {
            _baseRepository = baseRepository;
            _logger = logger;
        }
        #endregion

        #region methods
        public async Task<int> Count(Func<User, bool> predicate)
        {
            return (await Get(predicate)).ToList().Count;
        }
        public Task Create(User model)
        {
            return _baseRepository.Create(model);
        }

        public Task Delete(User model)
        {
            return _baseRepository.Delete<User>(model);
        }

        public Task<IEnumerable<User>> Get(Func<User, bool> predicate)
        {
            return _baseRepository.Get<User>(predicate);
        }

        public Task<IEnumerable<User>> Get(long[] Ids)
        {
            return _baseRepository.Get<User>(Ids);
        }

        public Task<IEnumerable<User>> Get()
        {
            return _baseRepository.Get<User>();
        }

        public Task<User> Get(long Id)
        {
            return _baseRepository.Get<User>(Id);
        }

        public Task Update(User model)
        {
            return _baseRepository.Update(model);
        }
        #endregion
    }
}
