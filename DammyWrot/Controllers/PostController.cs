using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DammyWrot.Core.Model;
using DammyWrot.Repository.Entity;
using DammyWrot.Service.Authentication;
using DammyWrot.Service.EntityServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace DammyWrot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        #region fields
        private readonly IUserService _userService;
        private readonly ILogger<PostController> _logger;
        private readonly AppSettings _appSettings;
        private readonly IUserValidationService _userValidationService;
        private readonly IPostService _postService;
        #endregion
        #region constructor
        public PostController(IUserService userService, ILogger<PostController> logger, IOptions<AppSettings> options, IUserValidationService userValidationService, IPostService postService)
        {
            _userService = userService;
            _logger = logger;
            _appSettings = options.Value;
            _userValidationService = userValidationService;
            _postService = postService;
        }
        #endregion
        #region endpoint methods
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Post model)//create
        {
            try
            {
                model.Id=0;
                var token = (string)HttpContext.Request.Headers["Authorization"];
                if (token == null) return BadRequest();
                var user = (await _userService.Get(u => u.Token == token)).FirstOrDefault();
                if (user == null) return BadRequest();
                model.UserId = user.Id;
                await _postService.Create(model);
                return Ok("posted!!");
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
        [HttpGet("[action]/{Id}")]
        public async Task<IActionResult> Get(long Id)//read
        {
            try
            {
                return Ok(_ = (await _postService.Get(Id)));
            }
            catch (Exception ex)
            {
                _logger.LogError($"{ex.Message} :: {ex}");
                return BadRequest();
            }
        }
        [HttpPut("[action]")]
        public async Task<IActionResult> Edit([FromBody]Post model)//update
        {
            try
            {
                await _postService.Update(model);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError($"{ex.Message} :: {ex}");
                return BadRequest();
            }
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> Delete([FromBody]Post model)//delete
        {
            try
            {
                model.Content = "This post was deleted!!";
                await _postService.Update(model);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError($"{ex.Message} :: {ex}");
                return BadRequest();
            }
        }
        #endregion
    }
}