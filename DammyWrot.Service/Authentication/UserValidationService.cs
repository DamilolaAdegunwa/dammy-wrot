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
using DammyWrot.Service.EntityServices;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace DammyWrot.Service.Authentication
{
    public class UserValidationService : IUserValidationService
    {
        #region fields
        private readonly AppSettings _appSettings;
        private readonly IUserService _userService;
        private readonly ILogger<UserValidationService> _logger;
        #endregion
        public UserValidationService(IOptions<AppSettings> appSettings, IUserService userService, ILogger<UserValidationService> logger)
        {
            this._appSettings = appSettings.Value;
            this._userService = userService;
            this._logger = logger;
        }
        public async Task<string> GetToken(long Id)
        {
            try
            {
                var userCheck = (await _userService.Get(u => u.Id == Id))?.FirstOrDefault<User>();
                if (userCheck == null)
                {
                    return null;
                }
                var key = Encoding.ASCII.GetBytes(this._appSettings.SecretKey);
                var jwtToken = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Name, Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(10),//hardcode alert!!
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.CreateToken(jwtToken);
                return _ = tokenHandler.WriteToken(token);
                
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<string> GetToken(string email, string password)
        {
            try
            {
                var user = (await _userService.Get(u=> u.Email == email && u.Password == password))?.FirstOrDefault<User>();
                if (user == null)
                {
                    return null;
                }
                return await GetToken(user.Id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<string> GetToken(User user)
        {
            try
            {
                var userCheck = (await _userService.Get(u => u.Id == user.Id))?.FirstOrDefault<User>();
                if (userCheck == null)
                {
                    return null;
                }
                return await GetToken(userCheck.Id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}