namespace HexaStudio.API;

public class Authenticator
{
    public readonly string token;
    public readonly string authName;

    public Authenticator(string token, string authName)
    {
        this.token = token;
        this.authName = authName;
    }

    public static Authenticator basicAuthenticator => new Authenticator("$2y$10$hJ9DR2OIzUaFoEI1bHU32OrDf1bGQ4jpDzBIPoeBYQkPT33ZwHTWO", "HexaStudio");
}