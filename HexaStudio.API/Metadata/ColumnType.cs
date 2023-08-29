using System.Text.Json;

namespace HexaStudio.API.Metadata;

public class ColumnType
{
    public const string TEXT = "sql.primitive.text";
    public const string INT = "sql.primitive.int";
    public const string BOOL = "sql.primitive.bool";
    public const string FLOAT = "sql.primitive.float";
    public const string DOUBLE = "sql.primitive.double";
    public const string DECIMAL = "sql.primitive.decimal";
    public const string DATE = "sql.primitive.date";
    public const string TIMESTAMP = "sql.primitive.timestamp";
    public const string BLOB = "sql.primitive.blob";
    public const string MEDIUM_BLOB = "sql.extends.mediumblob";
    public const string REF = "sql.extends.ref";
    public const string GROUP = "sql.extends.group";

    private readonly JsonElement data;

    public ColumnType(JsonElement data)
    {
        this.data = data;
    }

    public string logicalName => data.GetProperty("logicalName").GetString();
    public string value => data.GetProperty("value").GetRawText();

    public string displayName
    {
        get
        {
            switch (logicalName)
            {
                case TEXT:
                    return "Text";
                case INT:
                    return "Int";
                case BOOL:
                    return "Boolean";
                case FLOAT:
                    return "Float";
                case DOUBLE:
                    return "Double";
                case DECIMAL:
                    return "Decimal";
                case DATE:
                    return "Date";
                case TIMESTAMP:
                    return "Timestamp";
                case BLOB:
                    return "Blob";
                case MEDIUM_BLOB:
                    return "Medium Blob";
                case REF:
                    return "Reference";
                case GROUP:
                    return "Group";
            }

            return logicalName;
        }
    }

    public string displayValue
    {
        get
        {
            string val = value;

            switch (logicalName)
            {
                case REF:
                case GROUP:
                    return val.Substring(1, val.Length - 2);
            }

            return "-";
        }
    }
}