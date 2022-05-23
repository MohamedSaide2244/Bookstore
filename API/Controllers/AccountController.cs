namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UsersService _usersService;
        private readonly ITokenService _tokenService;
        public AccountController(UsersService usersService,ITokenService tokenService)
        {
            this._usersService = usersService;
            this._tokenService = tokenService;
        }
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.UserName)) return BadRequest("Username is taken");

            var user = new User
            {
                UserName = registerDto.UserName.ToLower(),
                Password = registerDto.Password,
                IsAdmin = false
            };


            await _usersService.CreateAsync(user);

            return new UserDto
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user),
                IsAdmin=user.IsAdmin
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {

            var user = await _usersService.GetByUserNameAsync(loginDto.UserName.ToLower());

            if (user == null) return BadRequest("Invalid UserName");

            if (user.Password != loginDto.Password) return BadRequest("Invalid Password");


            return new UserDto
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user),
                IsAdmin=user.IsAdmin
            };
        }

            private async Task<bool> UserExists(string username)
            {
                var user = await _usersService.GetByUserNameAsync(username.ToLower());
                if (user != null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }