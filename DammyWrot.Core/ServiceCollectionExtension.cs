using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
namespace DammyWrot.Core
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddDammyWrotCore(this IServiceCollection services)
        {
            return services;
        }
    }
}
