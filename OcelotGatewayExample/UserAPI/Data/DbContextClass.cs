using Microsoft.EntityFrameworkCore;
using UserAPI.Models;

namespace UserAPI.Data
{
    public class DbContextClass : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DbContextClass(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserScopes>()
                .HasKey(us => us.UserScopeId);

            modelBuilder.Entity<User>()
                .HasMany(u => u.UserScopes)
                .WithMany(us => us.User)
                .UsingEntity(u_us => u_us.ToTable("User_UserScopes"));
        }
        public DbSet<User> Users { get; set; }
    }
}
