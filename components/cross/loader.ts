export function load(url: string, obj: string | null) {
    let base = window.location.pathname;

    if (base == url && !!obj) {
        document.getElementById(obj)?.scrollIntoView({
            behavior: "smooth"
        });
        window.history.replaceState({}, "", url + "#" + obj);
    } else {

        window.location.href = url + (!!obj ? "#" + obj : "");

    }
}

export const links = {
    github: "https://github.com/Christoph-Koschel",
    mail: "mailto:christoph@hexa-studio.de"
}