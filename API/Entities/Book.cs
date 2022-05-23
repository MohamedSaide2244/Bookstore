
namespace API.Entities
{
    public class Book
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string BookName { get; set; } = null!;
        public decimal Price { get; set; }
        public string Author { get; set; } = null!;
        public string ImageUlr { get; set; } = null!;
    }
}