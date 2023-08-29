using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class TableInformation
{
    protected readonly JsonElement data;
    public TableInformation(JsonElement data)
    {
        this.data = data;
    }

    public string logicalName => data.GetProperty("logicalName").GetString();
    public string displayName => data.GetProperty("displayName").GetString();
    public int columns => data.GetProperty("columns").GetInt32();
}