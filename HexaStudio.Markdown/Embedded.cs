using System.Reflection;

namespace HexaStudio.Markdown;

public static class Embedded
{
    public static string ReadMarkdown()
    {
        return ReadX("HexaStudio.Markdown.Embedded.Markdown.css");
    }

    private static string ReadX(string path)
    {
        StreamReader reader = new StreamReader(Assembly.GetExecutingAssembly().GetManifestResourceStream(path) ?? throw new NullReferenceException());
        return reader.ReadToEnd();
    }
}