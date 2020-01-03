using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DammyWrot.Core.Model;
using DammyWrot.Repository.Entity;
using DammyWrot.Service.Authentication;
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
        IUserValidationService _uservalidationService;
        private readonly AppSettings _appSettings;
        public JwtController(ILogger<JwtController> logger, IUserValidationService uservalidationService, IOptions<AppSettings> options)
        {
            _logger = logger;
            _uservalidationService = uservalidationService;
            _appSettings = options.Value;
            var testVal = _appSettings.SecretKey;
        }
        [AllowAnonymous]
        [HttpPost("token")]
        public IActionResult Authenticate([FromBody]User model)
        {
            var user = this._uservalidationService.IsValidate(model.Email, model.Password);
            if (user == null)
            {
                return BadRequest(new { message = "UserName or Password is invalid" });
            }
            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User model)
        {
            try
            {
                var user = this._uservalidationService.IsValidate(model.Email, model.Password);
                if (user != null)
                {
                    return BadRequest(new { message = "Email Already Exist", status = 1 });
                }
                /*
                 other checks would include valid password requirement, valid email format
                 */
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}