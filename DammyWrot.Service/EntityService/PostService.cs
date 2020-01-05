using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DammyWrot.Repository.Entity;
using DammyWrot.Repository.PersistenceLogic;
using Microsoft.Extensions.Logging;
namespace DammyWrot.Service.EntityServices
{
    public class PostService : IPostService
    {
        #region fields and properties
        private readonly IPostRepository _PostRepository;
        private readonly ILogger<PostService> _logger;
        #endregion
        #region constructor(s)
        public PostService(IPostRepository PostRepository, ILogger<PostService> logger)
        {
            _PostRepository = PostRepository;
            _logger = logger;
        }
        #endregion
        #region methods
        public Task<int> Count(Func<Post, bool> predicate)
        {
            return _PostRepository.Count(predicate);
        }

        public Task Create(Post model)
        {
            return _PostRepository.Create(model);
        }

        public Task Delete(Post model)
        {
            return _PostRepository.Delete(model);
        }

        public Task<IEnumerable<Post>> Get(Func<Post, bool> predicate)
        {
            return _PostRepository.Get(predicate);
        }

        public Task<IEnumerable<Post>> Get(long[] Ids)
        {
            return _PostRepository.Get(Ids);
        }

        public Task<IEnumerable<Post>> Get()
        {
            return _PostRepository.Get();
        }

        public Task<Post> Get(long Id)
        {
            return _PostRepository.Get(Id);
        }

        public Task Update(Post model)
        {
            return _PostRepository.Update(model);
        }
        #endregion
    }
}
