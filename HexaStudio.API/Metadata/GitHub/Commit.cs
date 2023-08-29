using System.Text.Json;

namespace HexaStudio.API.Metadata.GitHub;

public class Commit
{
    private readonly JsonElement data;
    public Commit(JsonElement data)
    {
        this.data = data;
    }

    public string author => data.GetProperty("author").GetString();
    public string message => data.GetProperty("message").GetString();
    public string repo => data.GetProperty("repo").GetString();
    public DateTime date => DateTime.Parse(data.GetProperty("date").GetString() ?? string.Empty);
}