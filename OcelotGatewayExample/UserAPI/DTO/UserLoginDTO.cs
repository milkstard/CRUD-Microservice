using UserAPI.Models;

namespace UserAPI.DTO
{
    public class UserLoginDTO
    {
        public string UserName;
        public string Password;
        public string Role;
        public UserScopes Scopes;
    }
}
