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
        }
        [AllowAnonymous]
        [HttpPost("token")]
        [Produces(typeof(string))]
        public async Task<IActionResult> Authenticate([FromBody]User model)
        {
            var token = this._uservalidationService.GetToken(model.Email, model.Password);
            if (token == null)
            {
                return BadRequest();
            }
            return Ok(_ = (await token));
        }
    }
}