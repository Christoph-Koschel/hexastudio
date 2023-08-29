using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class Page
{
    private readonly JsonElement data;

    public Page(JsonElement data)
    {
        this.data = data;
    }

    public string[] keywords => data.GetProperty("keywords").GetString()?.Split(',');
    public string name => data.GetProperty("name").GetString();
    public string url => data.GetProperty("url_path").GetString();
}