namespace API.Entities
{
    public class ShoppingCart
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string UserId { get; set; } = null!;
         public string BookName { get; set; } = null!;
        public decimal Price { get; set; }
        public string Author { get; set; } = null!;
        public string ImageUlr { get; set; } = null!;
        public int Quantity { get; set; }
    }
}