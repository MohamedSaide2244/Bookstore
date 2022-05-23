namespace API.Controllers
{
    [Authorize]
    public class ShoppingCartsController : BaseApiController
    {
        private readonly ShoppingCartsService _shoppingCartsService;
         private readonly UsersService _usersService;
        public ShoppingCartsController(ShoppingCartsService shoppingCartsService,UsersService usersService)
        {
            this._shoppingCartsService = shoppingCartsService;
             this._usersService = usersService;
        }

        [HttpGet]
        public async Task<List<ShoppingCart>> GetShoppingCart()
        {
            return await _shoppingCartsService.GetAsync();
        }

         [HttpGet("myshopping")]
        public async Task<List<ShoppingCart>> GetMyShoppingCart()
        {
            return await _shoppingCartsService.GetMyShopingAsync(User.GetUserId());
        }

         [HttpPost]
        public async Task<IActionResult> Creat(ShoppingCart shoppingCart)
        {
            var user=User.GetUserId();
            shoppingCart.UserId= user;
            await _shoppingCartsService.CreateAsync(shoppingCart);
            return Ok();
        }

         [HttpPut]
        public async Task<IActionResult> Update(string id,ShoppingCart shoppingCart)
        {
            await _shoppingCartsService.UpdateAsync( id,shoppingCart);
            return Ok();
        }

         [HttpDelete]
        public async Task<IActionResult> Remove(string id)
        {
            await _shoppingCartsService.RemoveAsync(id);
            return Ok();
        }
    }
}