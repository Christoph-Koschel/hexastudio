namespace HexaStudio.API;

public static class RequestMethod
{
    public static string Convert(Method method)
    {
        switch (method)
        {
            case Method.FETCH:
                return "fetch";
            case Method.INSERT:
                return "insert";
            case Method.DELETE:
                return "delete";
            case Method.UPDATE:
                return "update";
            default:
                throw new ArgumentOutOfRangeException(nameof(method), method, null);
        }
    }
}