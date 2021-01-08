using AuthenShop.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AuthenShop.Entities;

namespace AuthenShop.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser, AppRole, string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<AuthenShop.Entities.Product> Products { get; set; }

        public DbSet<AuthenShop.Entities.CartDetail> CartDetail { get; set; }
        public DbSet<AuthenShop.Entities.Cart> Cart { get; set; }
    }
}