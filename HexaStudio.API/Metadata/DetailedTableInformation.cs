using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class DetailedTableInformation : TableInformation
{
    public DetailedTableInformation(JsonElement data) : base(data)
    {
    }

    public Schema schema => new Schema(data.GetProperty("schema"));

}