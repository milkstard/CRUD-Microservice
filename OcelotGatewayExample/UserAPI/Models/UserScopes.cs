
namespace UserAPI.Models
{
    public class UserScopes
    {
        public int UserScopeId { get; set; }
        public string Scope { get; set; }
        public ICollection<User> User { get; set; }
    }
}
