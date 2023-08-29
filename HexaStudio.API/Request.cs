using System.Net.Http.Json;
using System.Text;
using System.Text.Json;

namespace HexaStudio.API;

public class Request
{
#if DEBUG
    public const string DOMAIN = "http://localhost/";
#else
    public const string DOMAIN = "https://hexa-studio.de/api/";
#endif
    public static HttpClient client;
    public static Authenticator authenticator = null;


    private readonly Method method;
    private readonly string logicalName;
    public readonly Dictionary<string, object> attributes;
    public Dictionary<string, Stream> files;
    public Request(Method method, string logicalName)
    {
        this.method = method;
        this.logicalName = logicalName;
        this.attributes = new Dictionary<string, object>();
        this.files = new Dictionary<string, Stream>();
    }


    public async Task<Response<T>> SendRequest<T>() where T : ResponseWrapper, new()
    {
        string url = DOMAIN + RequestMethod.Convert(method);
        attributes["logicalName"] = logicalName;
        if (authenticator != null)
        {
            attributes["token"] = authenticator.token;
            attributes["authName"] = authenticator.authName;
        }
        BeforeSend();

        HttpRequestMessage req = new HttpRequestMessage(HttpMethod.Post, url);

        req.Content = ConvertAttributes();

        HttpResponseMessage message = await client.SendAsync(req);
        JsonElement response = await message.Content.ReadFromJsonAsync<JsonElement>();
        if (!response.TryGetProperty("code", out JsonElement _))
        {
            throw new ApiException("Undefined API Response");
        }

        return new Response<T>(response);
    }

    private MultipartFormDataContent ConvertAttributes()
    {
        MultipartFormDataContent content = new MultipartFormDataContent();

        foreach ((string key, object value) in attributes)
        {
            if (value == null)
            {
                continue;
            }

            content.Add(new StringContent(value.ToString() ?? string.Empty), key);
        }
        foreach ((string key, Stream file) in files)
        {
            content.Add(new StreamContent(file), key, key);
        }
        return content;
    }

    protected static string ToSqlString(string str)
    {
        return $"'{str}'";
    }

    protected virtual void BeforeSend()
    {
    }
}