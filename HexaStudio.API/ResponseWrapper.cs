using System.Text.Json;

namespace HexaStudio.API;

public abstract class ResponseWrapper
{
    protected JsonElement data { get; private set; }

    public ResponseWrapper SetData(JsonElement data)
    {
        this.data = data;
        return this;
    }
}