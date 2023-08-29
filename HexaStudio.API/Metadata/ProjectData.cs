using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class ProjectData
{
    protected readonly JsonElement data;
    public ProjectData(JsonElement data)
    {
        this.data = data;
    }

    public string name => data.GetProperty("name").GetString() ?? "";
    public Language primaryLanguage => new Language(data.GetProperty("primary_language"));
    public Page page => new Page(data.GetProperty("page"));
    public Resource banner => new Resource(data.GetProperty("banner"));
}