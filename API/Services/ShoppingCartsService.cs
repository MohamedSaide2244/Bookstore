namespace API.Services
{
    public class ShoppingCartsService
    {
        private readonly IMongoCollection<ShoppingCart> _shoppingCartsCollection;
        public ShoppingCartsService(IOptions<BookStoreDatabaseSettings> bookStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(bookStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(bookStoreDatabaseSettings.Value.DatabaseName);

            _shoppingCartsCollection = mongoDatabase.GetCollection<ShoppingCart>(bookStoreDatabaseSettings.Value.ShoppingCartsCollectionName);
        }

        public async Task<List<ShoppingCart>> GetAsync()
        {
            return await _shoppingCartsCollection.Find(_ => true).ToListAsync();
        }

        public async Task<List<ShoppingCart>> GetMyShopingAsync(string id)
        {
            return await _shoppingCartsCollection.Find(x => x.UserId == id).ToListAsync();
        }

        public async Task CreateAsync(ShoppingCart shoppingCart)
        {
            await _shoppingCartsCollection.InsertOneAsync(shoppingCart);
        }

        public async Task UpdateAsync(string id, ShoppingCart shoppingCart)
        {
            await _shoppingCartsCollection.ReplaceOneAsync(x => x.Id == id, shoppingCart);
        }


        public async Task RemoveAsync(string id)
        {
            await _shoppingCartsCollection.DeleteOneAsync(x => x.Id == id);
        }

    }

}
