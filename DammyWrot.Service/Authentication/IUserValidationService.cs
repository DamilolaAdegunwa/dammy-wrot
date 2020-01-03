using DammyWrot.Repository.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace DammyWrot.Service.Authentication
{
    public interface IUserValidationService
    {
        User IsValidate(string username, string password);
    }
}
