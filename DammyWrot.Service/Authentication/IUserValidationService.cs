using DammyWrot.Repository.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DammyWrot.Service.Authentication
{
    public interface IUserValidationService
    {
        public Task<string> GetToken(long Id);
        public Task<string> GetToken(string email, string password);
        public Task<string> GetToken(User user);
    }
}
