using System;
using System.Collections.Generic;
using System.Text;
using DammyWrot.Core;
using DammyWrot.Repository.PersistenceLogic;
using DammyWrot.Repository.PersistenceLogic.Base;
using Microsoft.Extensions.DependencyInjection;

namespace DammyWrot.Repository
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddDammyWrotRepository(this IServiceCollection services)
        {
            services.AddTransient<IBaseRepository,BaseRepository>();
            services.AddTransient<IUserRepository,UserRepository>();

            //add from core
            services.AddDammyWrotCore();
            return services;
        }
    }
}
