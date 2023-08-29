using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class Detail
{
    private readonly JsonElement data;
    public Detail(JsonElement data)
    {
        this.data = data;
    }

    public string project => data.GetProperty("project").GetString();
    public Language language => new Language(data.GetProperty("language"));
    public double percentage => data.GetProperty("percentage").GetDouble();
}