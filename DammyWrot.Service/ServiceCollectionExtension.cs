using System;
using System.Collections.Generic;
using System.Text;
using DammyWrot.Service.Authentication;
using Microsoft.Extensions.DependencyInjection;
using DammyWrot.Service.Security;
using DammyWrot.Service.EntityServices;
using DammyWrot.Repository;

namespace DammyWrot.Service
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddDammyWrotServices(this IServiceCollection services)
        {
            services.AddTransient<IUserValidationService,UserValidationService>();
            services.AddTransient<IDataProtection, DataProtection>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IPostService, PostService>();

            //add from repository
            services.AddDammyWrotRepository();
            return services;
        }
    }
}
