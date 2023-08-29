using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class Schema
{
    private readonly JsonElement data;
    public Schema(JsonElement data)
    {
        this.data = data;
    }

    public SchemaColumn[] columns => Columns();

    private SchemaColumn[] readColumns;
    private SchemaColumn[] Columns()
    {
        if (readColumns == null)
        {
            readColumns = new SchemaColumn[data.GetArrayLength()];

            for (int i = 0; i < data.GetArrayLength(); i++)
            {
                readColumns[i] = new SchemaColumn(data[i]);
            }
        }

        return readColumns;
    }
}