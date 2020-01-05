using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using DammyWrot.Service.EntityServices;
using DammyWrot.Core.Model;
using DammyWrot.Repository.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using DammyWrot.Service.Authentication;

namespace DammyWrot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        #region field
        private readonly IUserService _userService;
        private readonly ILogger<UserController> _logger;
        private readonly AppSettings _appSettings;
        private readonly IUserValidationService _userValidationService;
        #endregion
        #region constructor
        public UserController(IUserService userService, ILogger<UserController> logger, IOptions<AppSettings> options, IUserValidationService userValidationService)
        {
            _userService = userService;
            _logger = logger;
            _appSettings = options.Value;
            _userValidationService = userValidationService;
        }
        #endregion
        #region endpoint methods
        [HttpPost("[action]")]
        [Produces(typeof(User))]
        public async Task<IActionResult> RegisterUser([FromBody] User model)
        {
            try
            {
                model.Id = 0;model.Email = model.Email?.Trim().ToLower();model.Name?.Trim();
                //validate email regex, required and uniqueness
                var wellFormattedEmail = Regex.IsMatch(model.Email, @"^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$");
                if (!wellFormattedEmail) return BadRequest("Please input a valid email!!");
                if (string.IsNullOrEmpty(model.Email?.Trim())) return BadRequest("Email is required!!");
                if ((await _userService.Get(u => u.Email == model.Email)).Count() > 0) return BadRequest("User with this email already exist. If this is you, login instead!");

                //validate password for regex and required
                var wellFormattedPassword = Regex.IsMatch(model.Password, @"(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?!.*\s).*$");
                if (!wellFormattedPassword) return BadRequest("Invalid password format!!");
                if (string.IsNullOrEmpty(model.Password?.Trim())) return BadRequest("Password is required!");

                //validate name for required and length
                if (string.IsNullOrEmpty(model.Name?.Trim()) || model.Name.Length <= 2) return BadRequest("Invalid Name given!");

                //Create a new user in the database
                _userService.Create(model);

                //Get User
                var GetUser = (await _userService.Get(u => u.Email == model.Email)).FirstOrDefault();

                //Get token
                var token = _userValidationService.GetToken(GetUser.Id);//I should really do something if the token is null

                //assign token to user and update
                GetUser.Token = await token;
                _userService.Update(GetUser);

                return await Task.FromResult(Ok(GetUser));
            }
            catch (Exception ex)
            {
                _logger.LogError($"{ex.Message} :: {ex}");
                return BadRequest(ex);
            }
        }
        #endregion
    }
}