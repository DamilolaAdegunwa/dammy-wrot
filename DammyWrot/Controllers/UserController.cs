using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Array.ApplicationServices.EntityServices;
using DammyWrot.Core.Model;
using DammyWrot.Repository.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

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
        #endregion
        #region constructor
        public UserController(IUserService userService, ILogger<UserController> logger, IOptions<AppSettings> options)
        {
            _userService = userService;
            _logger = logger;
            _appSettings = options.Value;
        }
        #endregion
        #region endpoint methods
        [HttpPost("[action]")]
        public async Task<IActionResult> RegisterUser([FromBody] User model)
        {
            try
            {
                model.Id = 0;
                _userService.Create(model);
                return await Task.FromResult(Ok("success connecting!!"));
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