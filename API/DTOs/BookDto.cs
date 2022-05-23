namespace API.DTOs
{
    public class BookDto
    {
        public string Name { get; set; } = null!;
        public decimal Price { get; set; }
        public string Author { get; set; } = null!;
        public string ImageUlr { get; set; } = null!;
    }
}