using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class DetailedProjectData : ProjectData
{
    public DetailedProjectData(JsonElement data) : base(data)
    {
    }

    public Resource description => new Resource(data.GetProperty("description"));
    public Detail[] details => Details();

    public string github => data.GetProperty("github").GetString();

    private Detail[] readDetails;
    private Detail[] Details()
    {
        if (readDetails == null)
        {
            JsonElement details = data.GetProperty("details");
            readDetails = new Detail[details.GetArrayLength()];

            for (int i = 0; i < details.GetArrayLength(); i++)
            {
                readDetails[i] = new Detail(details[i]);
            }
        }

        return readDetails;
    }
}