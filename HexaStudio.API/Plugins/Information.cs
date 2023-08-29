using System.Text;
using System.Text.Json;
using HexaStudio.API.Metadata;

namespace HexaStudio.API.Plugins;

public enum InformationRequestAction
{
    TABLES,
    TABLE,
    ACCOUNTS,
    ACCESS_KEY,
    CREATE_ROW
}

public class InformationRequest : Request
{
    public InformationRequest(Method method) : base(method, "information")
    {
    }

    public InformationRequestAction action = InformationRequestAction.TABLES;
    public string table;
    public readonly List<string> columns = new List<string>();

    protected override void BeforeSend()
    {
        switch (action)
        {
            case InformationRequestAction.TABLES:
                attributes["action"] = "tables";
                break;
            case InformationRequestAction.TABLE:
                attributes["action"] = "table";
                attributes["table"] = table;
                break;
            case InformationRequestAction.ACCOUNTS:
                attributes["action"] = "accounts";
                break;
            case InformationRequestAction.ACCESS_KEY:
                attributes["action"] = "accesskey";
                attributes["table"] = table;
                break;
            case InformationRequestAction.CREATE_ROW:
                attributes["action"] = "createrow";
                attributes["table"] = table;
                StringBuilder builder = new StringBuilder();
                builder.Append('[');

                bool first = true;

                foreach (string column in columns)
                {
                    if (!first)
                    {
                        builder.Append(',');
                    }
                    else
                    {
                        first = false;
                    }
                    builder.Append('"');
                    builder.Append(column);
                    builder.Append('"');
                }
                builder.Append(']');

                attributes["columns"] = builder.ToString();

                break;
        }
    }
}

public class InformationTablesResponse : ResponseWrapper
{
    private TableInformation[] readTableInformation;

    public TableInformation[] tables
    {
        get
        {
            if (readTableInformation == null)
            {
                readTableInformation = new TableInformation[data.GetArrayLength()];
                for (int i = 0; i < data.GetArrayLength(); i++)
                {
                    readTableInformation[i] = new TableInformation(data[i]);
                }
            }

            return readTableInformation;
        }
    }
}

public class InformationTableResponse : ResponseWrapper
{
    public DetailedTableInformation table => new DetailedTableInformation(data);
}

public class InformationAccessKeyResponse : ResponseWrapper
{
    private string[] readValues;
    private string[] Values()
    {
        if (readValues == null)
        {
            JsonElement data = this.data.GetProperty("values");
            readValues = new string[data.GetArrayLength()];

            for (int i = 0; i < data.GetArrayLength(); i++)
            {
                readValues[i] = data[i].GetString();
            }
        }

        return readValues;
    }

    public string[] values => Values();
}

public class InformationCreateRowResponse : ResponseWrapper
{
    public bool finished => data.GetProperty("finished").GetBoolean();
}