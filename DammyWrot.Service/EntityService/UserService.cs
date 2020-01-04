using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DammyWrot.Repository.Entity;
using DammyWrot.Repository.PersistenceLogic;
using Microsoft.Extensions.Logging;
namespace DammyWrot.Service.EntityServices
{
    public class UserService : IUserService
    {
        #region fields and properties
        private readonly IUserRepository _UserRepository;
        private readonly ILogger<UserService> _logger;
        #endregion
        #region constructor(s)
        public UserService(IUserRepository UserRepository, ILogger<UserService> logger)
        {
            _UserRepository = UserRepository;
            _logger = logger;
        }
        #endregion
        #region methods
        public Task<int> Count(Func<User, bool> predicate)
        {
            return _UserRepository.Count(predicate);
        }

        public Task Create(User model)
        {
            return _UserRepository.Create(model);
        }

        public Task Delete(User model)
        {
            return _UserRepository.Delete(model);
        }

        public Task<IEnumerable<User>> Get(Func<User, bool> predicate)
        {
            return _UserRepository.Get(predicate);
        }

        public Task<IEnumerable<User>> Get(long[] Ids)
        {
            return _UserRepository.Get(Ids);
        }

        public Task<IEnumerable<User>> Get()
        {
            return _UserRepository.Get();
        }

        public Task<User> Get(long Id)
        {
            return _UserRepository.Get(Id);
        }

        public Task Update(User model)
        {
            return _UserRepository.Update(model);
        }
        #endregion
    }
}
