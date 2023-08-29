using System.Text.Json;

namespace HexaStudio.API;

public class Response<T> where T : ResponseWrapper, new()
{
    private readonly JsonElement content;
    public Response(JsonElement content)
    {
        this.content = content;
    }

    public Status status => (Status)content.GetProperty("code").GetInt32();
    public string url => content.GetProperty("url").GetString() ?? "";
    public string logicalName => content.GetProperty("logicalName").GetString() ?? "";
    public T data => (T)new T().SetData(content.GetProperty("data"));
    public bool containsError => status != Status.OK;
    public string errorMessage => content.GetProperty("data").GetProperty("error").GetString() ?? "";
}