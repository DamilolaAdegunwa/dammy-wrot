using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace DammyWrot.Repository.PersistenceLogic.Base
{
    public interface IBaseRepository
    {
        Task Create<T>(T model) where T : class;
        Task<IEnumerable<T>> Get<T>(Func<T, bool> predicate) where T : class;
        Task<IEnumerable<T>> Get<T>(long[] Ids) where T : class;
        Task<IEnumerable<T>> Get<T>() where T : class;
        Task<T> Get<T>(long Id) where T : class;
        Task Update<T>(T model) where T : class;
        Task Delete<T>(T model) where T : class;
        Task<int> Count<T>(Func<T, bool> predicate) where T : class;
    };
};