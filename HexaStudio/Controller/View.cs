using HexaStudio.API;
using Microsoft.JSInterop;

namespace HexaStudio.Controller;

public static class View
{
    private static IJSRuntime runtime;

    public static void Init(IJSRuntime runtime)
    {
        View.runtime ??= runtime;
    }

    public static async void ScrollTo(string identifier)
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        await runtime.InvokeVoidAsync("scrollTo", identifier);
    }

    public static async Task<int> GetScrollPosition()
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        return await runtime.InvokeAsync<int>("getScrollPosition");
    }

    public static async Task<bool> SubmitContactForm()
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        return await runtime.InvokeAsync<bool>("submitContact");
    }

    public static async void Open(string url, OpenType type = OpenType.BLANK)
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        string str = "";

        switch (type)
        {
            case OpenType.BLANK:
                str = "_blank";
                break;
            case OpenType.PARENT:
                str = "_parent";
                break;
            case OpenType.SELF:
                str = "_self";
                break;
            case OpenType.TOP:
                str = "_top";
                break;
        }

        await runtime.InvokeVoidAsync("openView", url, str);
    }

    public static async void ResizeTracks()
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        await runtime.InvokeVoidAsync("resizeTracks");
    }

    public static async void InitMapDragging()
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        await runtime.InvokeVoidAsync("initMapDragging");
    }

    public static async Task<Authenticator> LoadAuthenticator()
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        string authName = await runtime.InvokeAsync<string>("readProp", "authName");
        if (authName == null)
        {
            return Authenticator.basicAuthenticator;
        }
        string token = await runtime.InvokeAsync<string>("readProp", "token");
        if (token == null)
        {
            return Authenticator.basicAuthenticator;
        }

        return new Authenticator(token, authName);
    }

    public static async void StoreAuthenticator(Authenticator authenticator)
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        await runtime.InvokeVoidAsync("writeProp", "authName", authenticator.authName);
        await runtime.InvokeVoidAsync("writeProp", "token", authenticator.token);
    }

    public static async Task<string> GetValue(string name)
    {
        if (runtime == null)
        {
            throw new Exception("Runtime not initialized");
        }
        return await runtime.InvokeAsync<string>("getValue", name);
    }

    public enum OpenType
    {
        /// _blank URL is loaded into a new window, or tab. This is the default
        BLANK,

        /// _parent URL is loaded into the parent frame
        PARENT,

        /// _self URL replaces the current page
        SELF,

        /// _top URL replaces any framesets that may be loaded
        TOP
    }
}