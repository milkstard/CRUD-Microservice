using UserAPI.Data;
using UserAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("https://localhost:7285");
// Add services to the container.
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddDbContext<DbContextClass>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
