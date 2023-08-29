using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class SchemaColumn
{
    private readonly JsonElement data;
    public SchemaColumn(JsonElement data)
    {
        this.data = data;
    }

    public string logicalName => data.GetProperty("logicalName").GetString();
    public int attributes => data.GetProperty("attributes").GetInt32();
    public ColumnType type => new ColumnType(data.GetProperty("type"));

    public const int SCHEMA_PRIMARY_KEY = 0b1;
    public const int SCHEMA_NULLABLE = 0b10;
    public const int SCHEMA_AUTO_INCREMENT = 0b100;
    public const int SCHEMA_UNIQUE = 0b1000;
    public const int SCHEMA_PRIVATE = 0b10000;
}