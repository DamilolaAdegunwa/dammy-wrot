using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DammyWrot.Core.Model;
using DammyWrot.Repository.Entity;
using DammyWrot.Service.Authentication;
using DammyWrot.Service.EntityServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace DammyWrot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JwtController : ControllerBase
    {
        private readonly ILogger<JwtController> _logger;
        private readonly IUserValidationService _userValidationService;
        private readonly AppSettings _appSettings;
        private readonly IUserService _userService;
        public JwtController(ILogger<JwtController> logger, IUserValidationService userValidationService, IOptions<AppSettings> options, IUserService userService)
        {
            _logger = logger;
            _userValidationService = userValidationService;
            _appSettings = options.Value;
            _userService = userService;
        }

        [HttpPost("[action]")]
        [Produces(typeof(string))]
        public async Task<IActionResult> CheckForToken([FromBody]User model)
        {
            var token = (await this._userService.Get(u => u.Email?.Trim().ToLower() == model.Email?.Trim().ToLower())).FirstOrDefault().Token;
            return Ok(_ = token);
        }

        [HttpPost("[action]/{Id}")]
        [Produces(typeof(string))]
        public async Task<IActionResult> CheckForTokenById(long Id)
        {
            var token = (await this._userService.Get(u => u.Id == Id)).FirstOrDefault().Token;
            return Ok(_ = token);
        }

        [HttpPost("[action]/{Email}")]
        [Produces(typeof(string))]
        public async Task<IActionResult> CheckForTokenByEmail(string email)
        {
            var token = (await this._userService.Get(u => u.Email?.Trim().ToLower() == email?.Trim().ToLower())).FirstOrDefault().Token;
            return Ok(_ = token);
        }

        [HttpPost("[action]")]
        [Produces(typeof(void))]
        public async Task<IActionResult> SetAsVerifiedUser(long Id, string email)
        {
            try
            {
                var user = (await _userService.Get(Id));
                if (user.Email?.ToLower() == email.ToLower())
                {
                    user.IsVerified = true;
                    await _userService.Update(user);
                    return Ok();
                }
                return BadRequest();
            }
            catch (Exception)
            {
                return BadRequest();
            }
            
        }

        [HttpPost("[action]")]
        [Produces(typeof(User))]
        public async Task<IActionResult> SignIn(string email, string password)
        {
            try
            {
                var user = (await _userService.Get(u => u.Email?.ToLower().Trim() == email.ToLower().Trim() && u.Password == password)).FirstOrDefault();
                if(user != null)
                {
                    //Get token
                    var token = await _userValidationService.GetToken(user.Id);
                    if (token == null) return BadRequest();

                    //assign token to user and update
                    user.Token = token;
                    await _userService.Update(user);
                    return Ok(user);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                _logger.LogError($"{ex.Message} :: {ex}");
                return BadRequest();
            }
        }

        [HttpPost("[action]")]
        [Produces(typeof(void))]
        public async Task<IActionResult> SignOut(long Id)
        {
            try
            {
                (await _userService.Get(u=> u.Id == Id)).FirstOrDefault().Token = null;
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


    }
}