using System.Text.RegularExpressions;

namespace HexaStudio.Markdown;

public class HTMLProcessor : Processor
{
    protected override string ProcessHeaders(string text)
    {
        return Regex.Replace(text, @"^(#+)\s*(.*?)\s*$", (match) =>
        {
            int level = match.Groups[1].Value.Length;
            string content = match.Groups[2].Value;
            return $"<h{level}>{content}</h{level}>";
        }, RegexOptions.Multiline);
    }

    protected override string ProcessBoldAndItalic(string text)
    {
        text = Regex.Replace(text, @"\*{2}(.*?)\*{2}", "<strong>$1</strong>");
        text = Regex.Replace(text, @"_{2}(.*?)_{2}", "<em>$1</em>");
        return text;
    }

    protected override string ProcessLinks(string text)
    {
        return Regex.Replace(text, @"\[(.*?)\]\((.*?)\)", "<a href=\"$2\">$1</a>");
    }

    protected override string ProcessImages(string text)
    {
        return Regex.Replace(text, @"!\[(.*?)\]\((.*?)\)", "<img alt=\"$1\" src=\"$2\">");
    }

    protected override string ProcessLists(string text)
    {
        text = Regex.Replace(text, @"^\s*-\s+(.*)", "<li>$1</li>", RegexOptions.Multiline);
        text = Regex.Replace(text, @"^\s*([0-9]+)\.\s+(.*)", "<li>$2</li>", RegexOptions.Multiline);
        text = Regex.Replace(text, @"<li>(.*)<\/li>", "<ul><li>$1</li></ul>", RegexOptions.Singleline);
        return text;
    }
}