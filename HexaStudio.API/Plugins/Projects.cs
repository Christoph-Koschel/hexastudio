using HexaStudio.API.Metadata;

namespace HexaStudio.API.Plugins;

public enum ProjectsRequestAction
{
    FETCH_ALL,
    FETCH,
    EXISTS,
}

public class ProjectsRequest : Request
{
    public ProjectsRequest(Method method) : base(method, "projects.handler")
    {
    }

    public ProjectsRequestAction action = ProjectsRequestAction.FETCH_ALL;
    public string project = null;

    protected override void BeforeSend()
    {
        switch (action)
        {
            case ProjectsRequestAction.FETCH:
                attributes["action"] = "FETCH";
                break;
            case ProjectsRequestAction.FETCH_ALL:
                attributes["action"] = "FETCH_ALL";
                break;
            case ProjectsRequestAction.EXISTS:
                attributes["action"] = "EXISTS";
                break;
        }

        if (project != null)
        {
            attributes["project"] = project;
        }


        base.BeforeSend();
    }
}

public class ProjectsFetchResponse : ResponseWrapper
{
    private ProjectData[] readProjectData;
    private ProjectData[] GetProjects()
    {
        if (readProjectData == null)
        {
            readProjectData = new ProjectData[data.GetArrayLength()];

            for (int i = 0; i < data.GetArrayLength(); i++)
            {
                readProjectData[i] = new ProjectData(data[i]);
            }
        }

        return readProjectData;
    }

    public ProjectData[] projects => GetProjects();
}

public class ProjectFetchResponse : ResponseWrapper
{
    public DetailedProjectData project => new DetailedProjectData(data);
}

public class ProjectExistsResponse : ResponseWrapper
{
    public bool exists => data.GetProperty("exists").GetBoolean();
}