using Microsoft.EntityFrameworkCore;
using CadastroMercadoriasAPI.Models;

namespace CadastroMercadoriasAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Mercadoria> Mercadorias { get; set; }
    }
}

