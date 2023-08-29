using HexaStudio.API.Metadata;

namespace HexaStudio.API.Plugins;

public class ResourceRequest : Request
{
    public ResourceRequest(Method method, string name) : base(method, "resource.handler")
    {
        attributes["name"] = name;
    }
}

public class ResourceResponse : ResponseWrapper
{
    private Resource resource;

    private Resource Check()
    {
        return resource ??= new Resource(data);
    }

    public string name => Check().name;
    public string url => Check().url;
}