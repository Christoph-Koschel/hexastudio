using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class Language
{
    private readonly JsonElement data;

    public Language(JsonElement data)
    {
        this.data = data;
    }

    public string displayName => data.GetProperty("display_name").GetString();
    public string name => data.GetProperty("name").GetString();
    public bool language => data.GetProperty("language").GetBoolean();
    public string color => data.GetProperty("color").GetString();
}