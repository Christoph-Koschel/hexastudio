using HexaStudio.API.Metadata.GitHub;

namespace HexaStudio.API.Plugins;

public class GitHubCommitsFetchRequest : Request
{
    public GitHubCommitsFetchRequest(Method method) : base(method, "github.tracker")
    {
    }
}

public class GitHubCommitsFetchResponse : ResponseWrapper
{
    private Commit[] readCommits;
    private Commit[] GetCommits()
    {
        if (readCommits == null)
        {
            readCommits = new Commit[data.GetArrayLength()];

            for (int i = 0; i < data.GetArrayLength(); i++)
            {
                readCommits[i] = new Commit(data[i]);
            }
        }

        return readCommits;
    }

    public Commit[] commits => GetCommits();
}