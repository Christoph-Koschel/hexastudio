namespace HexaStudio.Markdown;

public abstract class Processor
{
    public string Process(string markdownText)
    {
        markdownText = ProcessHeaders(markdownText);
        markdownText = ProcessBoldAndItalic(markdownText);
        markdownText = ProcessImages(markdownText);
        markdownText = ProcessLinks(markdownText);
        markdownText = ProcessLists(markdownText);

        return markdownText;
    }

    protected abstract string ProcessHeaders(string text);
    protected abstract string ProcessBoldAndItalic(string text);
    protected abstract string ProcessLinks(string text);
    protected abstract string ProcessImages(string text);
    protected abstract string ProcessLists(string text);
}