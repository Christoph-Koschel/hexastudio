using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class Resource
{
    private readonly JsonElement data;

    public Resource(JsonElement data)
    {
        this.data = data;
    }

    public string name => data.GetProperty("name").GetString() ?? "";
    public string url => Request.DOMAIN + data.GetProperty("url").GetString();

    public async Task<byte[]> Fetch()
    {
        HttpResponseMessage res = await Request.client.GetAsync(url);
        return await res.Content.ReadAsByteArrayAsync();
    }
}