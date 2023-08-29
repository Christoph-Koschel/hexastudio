namespace HexaStudio.API;

public enum Status
{
    OK = 0x0,
    FAIL = 0x1,
    FORBIDDEN = 0x2,
    NOT_SUPPORT = 0x3,
    FETCH = 0x4,
    UPDATE = 0x5,
    INSERT = 0x6,
    DELETE = 0x7,
    UNDEFINED_METHOD = 0x8,
    CORRUPTED_REQUEST = 0x9,
    WRONG_ARGUMENT_TYPE = 0xA,
    PLUGIN_NOT_FOUND = 0xB
}