namespace API.Entities
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string UserName { get; set; } = null!;
        public string Password { get; set; } = null!;
        public Boolean IsAdmin { get; set; }
    }
}