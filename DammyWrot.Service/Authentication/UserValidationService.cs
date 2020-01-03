using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Linq;
using System.Security.Claims;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using DammyWrot.Core.Model;
using DammyWrot.Repository.Entity;

namespace DammyWrot.Service.Authentication
{
    public class UserValidationService : IUserValidationService
    {
        List<User> users;
        AppSettings key;

        public UserValidationService(IOptions<AppSettings> appSettings)
        {
            this.key = appSettings.Value;
            
            //this.users = new List<UserEntity>
            //{
            //    new UserEntity { Id = 1, FirstName = "Sachin", LastName = "Tendulkar", Email = "sachin@gmail.com",Username = "sachin", Password = "password" },
            //    new UserEntity { Id = 2, FirstName = "Dorthy", LastName = "dulkar", Email = "dorthy@gmail.com",Username = "dorthy", Password = "password" },
            //    new UserEntity { Id = 3, FirstName = "Sarah", LastName = "Babadus", Email = "sarah.babadus@gmail.com",Username = "Sarah", Password = "password" },
            //    new UserEntity { Id = 4, FirstName = "Femi", LastName = "Fitman", Email = "femi.fit@gmail.com",Username = "femi", Password = "password" },
            //    new UserEntity { Id = 5, FirstName = "George", LastName = "Brown", Email = "g.brown@gmail.com",Username = "brown", Password = "password" },
            //};
        }

        public User IsValidate(string username, string password)
        {
            var user = users.SingleOrDefault(x => x.Email?.ToLower() == username?.ToLower() && x.Password == password);
            if (user == null)
            {
                return null;
            }
            var key = Encoding.ASCII.GetBytes(this.key.SecretKey);
            var jwtToken = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(jwtToken);
            user.Token = tokenHandler.WriteToken(token);
            return user;
        }
    }
}