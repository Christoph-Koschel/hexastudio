using HexaStudio.API;
using HexaStudio.Pages.Components;
using Microsoft.JSInterop;

namespace HexaStudio.Controller;

public static class API
{
    public static ErrorModal errorModal => receiver();
    public static Func<ErrorModal> receiver;

    public static void DisplayError(string message)
    {
        errorModal.message = message;
        errorModal.showModal = true;
    }

    public static async Task<Authenticator> Init(IJSRuntime jsRuntime)
    {
        View.Init(jsRuntime);
        return  await View.LoadAuthenticator();
    }
}