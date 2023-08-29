using System.Text;

namespace HexaStudio.Markdown;

public class MarkdownConverter
{
    private readonly string text;

    public MarkdownConverter(string text)
    {
        this.text = text;
    }

    public string ToHtml()
    {
        HTMLProcessor processor = new HTMLProcessor();
        return UseProcessor(processor);
    }

    public string UseProcessor(Processor processor)
    {
        return processor.Process(text);
    }
}