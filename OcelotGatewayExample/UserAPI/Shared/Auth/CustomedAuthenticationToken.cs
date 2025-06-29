namespace UserAPI.Shared.Auth
{
    public class CustomedAuthenticationToken
    {
        public string? Token { get; set; }
        public int? ExpiresIn { get; set; }
    }
}
