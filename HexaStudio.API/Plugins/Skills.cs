using System.Text.Json;

namespace HexaStudio.API.Plugins;

public class SkillsRequest : Request
{
    public SkillsRequest(Method method) : base(method, "skills.handler")
    {
    }
}

public class SkillsResponse : ResponseWrapper
{
    public SkillData[] GetSkills()
    {
        List<SkillData> skills = new List<SkillData>();

        for (int i = 0; i < data.GetArrayLength(); i++)
        {
            skills.Add(new SkillData(data[i]));
        }

        return skills.ToArray();
    }
}

public class SkillData
{
    private readonly JsonElement data;
    public SkillData(JsonElement data)
    {
        this.data = data;
    }

    public string name => data.GetProperty("name").GetString() ?? "";
    public string url => Request.DOMAIN + data.GetProperty("resource").GetProperty("url").GetString();
}