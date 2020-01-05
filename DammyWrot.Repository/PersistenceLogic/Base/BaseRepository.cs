using DammyWrot.Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace DammyWrot.Repository.PersistenceLogic.Base
{
    public class BaseRepository : IBaseRepository
    {
        #region fields
        private readonly AppDbContext _db;

        #endregion
        public BaseRepository()
        {
            _db = new AppDbContext();
        }
        #region methods
        public Task Create<T>(T model) where T : class
        {
            try
            {
                var v =_db.Add(model);
                _ = _db.SaveChanges();
                return Task.CompletedTask;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Task<IEnumerable<T>> Get<T>(Func<T, bool> predicate) where T : class
        {
            try
            {
                var resp = _db.Set<T>().Where(predicate);
                return Task.FromResult(resp);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Task<IEnumerable<T>> Get<T>(long[] Ids) where T:class
        {
            try
            {
                List<T> result = new List<T>();
                foreach (long Id in Ids)
                {
                    result.Add(_db.Find<T>(Id));
                }
                return Task.FromResult((IEnumerable<T>)result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Task<IEnumerable<T>> Get<T>() where T : class
        {
            try
            {
                var resp = _db.Set<T>().ToList();
                return Task.FromResult((IEnumerable<T>)resp);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Task<T> Get<T>(long Id) where T : class
        {
            try
            {
                var resp = _db.Find<T>(Id);
                return Task.FromResult(resp);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Task Update<T>(T model) where T : class
        {
            try
            {
                _ = _db.Update(model);
                _db.SaveChanges();
                return Task.CompletedTask;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Task Delete<T>(T model) where T : class
        {
            try
            {
                _ = _db.Remove(model);
                _db.SaveChanges();
                return Task.CompletedTask;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<int> Count<T>(Func<T, bool> predicate) where T: class
        {
            try
            {
                var count = (await Get<T>(predicate)).ToList<T>().Count;
                var resp = await Task.FromResult(count);
                return resp;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}