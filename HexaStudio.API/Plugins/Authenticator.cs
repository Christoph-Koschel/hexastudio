namespace HexaStudio.API.Plugins;

public enum AuthenticatorRequestAction
{
    LOGIN,
    VALIDATE
}

public class AuthenticatorRequest : Request
{
    public AuthenticatorRequest(Method method) : base(method, "authenticator")
    {
    }

    public string password;
    public string username;
    public AuthenticatorRequestAction action = AuthenticatorRequestAction.LOGIN;

    protected override void BeforeSend()
    {
        switch (action)
        {
            case AuthenticatorRequestAction.LOGIN:
                attributes["action"] = "login";
                break;
            case AuthenticatorRequestAction.VALIDATE:
                attributes["action"] = "valid";
                break;
        }

        if (action == AuthenticatorRequestAction.LOGIN)
        {
            if (string.IsNullOrWhiteSpace(password) || string.IsNullOrWhiteSpace(username))
            {
                throw new ApiException("'username' and 'password' must be set");
            }

            attributes["password"] = password;
            attributes["username"] = username;
        }
    }
}

public class AuthenticatorLoginResponse : ResponseWrapper
{
    public string token => data.GetProperty("token").GetString();
}

public class AuthenticatorValidResponse : ResponseWrapper
{
    public bool valid => data.GetProperty("valid").GetBoolean();
}