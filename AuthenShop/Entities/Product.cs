using System.ComponentModel.DataAnnotations;

namespace AuthenShop.Entities
{
    public class Product
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [MaxLength(50)]
        [Required]
        public string Title { get; set; }

        [MaxLength(256)]
        [Required]
        public string Category { get; set; }

        [MaxLength(256)]
        [Required]
        public string Description { get; set; }

        [MaxLength(256)]
        [Required]
        public string Image { get; set; }

        [Required]
        public bool Status { get; set; }

        [Required]
        public decimal Price { get; set; }
    }
}