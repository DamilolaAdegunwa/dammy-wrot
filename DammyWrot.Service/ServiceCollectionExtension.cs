using System;
using System.Collections.Generic;
using System.Text;
using DammyWrot.Service.AuthenticationService;
using Microsoft.Extensions.DependencyInjection;
namespace DammyWrot.Service
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddDammyWrotServices(this IServiceCollection services)
        {
            services.AddTransient<IUserValidationService,UserValidationService>();
            return services;
        }
    }
}
