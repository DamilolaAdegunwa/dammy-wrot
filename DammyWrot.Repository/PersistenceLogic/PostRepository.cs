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
    public class PostRepository : IPostRepository
    {
        #region fields
        private readonly IBaseRepository _baseRepository;
        private readonly ILogger<PostRepository> _logger;
        #endregion
        #region constructor
        public PostRepository(IBaseRepository baseRepository, ILogger<PostRepository> logger)
        {
            _baseRepository = baseRepository;
            _logger = logger;
        }
        #endregion

        #region methods
        public async Task<int> Count(Func<Post, bool> predicate)
        {
            return (await Get(predicate)).ToList().Count;
        }
        public Task Create(Post model)
        {
            return _baseRepository.Create(model);
        }

        public Task Delete(Post model)
        {
            return _baseRepository.Delete<Post>(model);
        }

        public Task<IEnumerable<Post>> Get(Func<Post, bool> predicate)
        {
            return _baseRepository.Get<Post>(predicate);
        }

        public Task<IEnumerable<Post>> Get(long[] Ids)
        {
            return _baseRepository.Get<Post>(Ids);
        }

        public Task<IEnumerable<Post>> Get()
        {
            return _baseRepository.Get<Post>();
        }

        public Task<Post> Get(long Id)
        {
            return _baseRepository.Get<Post>(Id);
        }

        public Task Update(Post model)
        {
            return _baseRepository.Update(model);
        }
        #endregion
    }
}
