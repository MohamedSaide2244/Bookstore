namespace API.DTOs
{
    public class ShoppingCartDto
    {
         public int Quantity { get; set; } = 1;
         public BookDto item { get; set; } 

    }
}