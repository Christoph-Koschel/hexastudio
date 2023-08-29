async function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
}

function scrollTo(identifier) {
    if (!identifier) {
        return;
    }
    const element = document.querySelector(identifier);
    if (!!element) {
        element.scrollIntoView();
    }
}

function openView(url, type) {
    window.open(url, type);
}

function resizeTracks() {
    const map = document.querySelector(".timeline-map");
    if (!map) {
        return;
    }
    function calc_height(ele) {
        let height = 0;
        for (let i = 0; i < ele.children.length; i++) {
            const child = ele.children.item(i);
            height += child.getBoundingClientRect().height;
        }
        return height;
    }

    let items = map.querySelectorAll(".item");

    for (let i = 9; i < items.length; i += 9) {
        const required = items[i].getBoundingClientRect().height;
        for (let k = i; k < i + 9 && k < items.length; k++) {
            const height = calc_height(items[k]);


            if (height === required) {
                continue;
            }

            const first = items[k].querySelector(".first");
            if (required - height < 0) {
                continue;
            }

            first.style.height = (first.getBoundingClientRect().height + (required - height)) + "px";
        }
    }
}

function initMapDragging() {
    waitForElm(".timeline-map").then(async (draggableElement) => {
        draggableElement.style.width = draggableElement.getBoundingClientRect().width + "px";
        draggableElement.style.height = draggableElement.getBoundingClientRect().height + "px";

        let isDragging = false;
        let offsetX, offsetY;

        draggableElement.addEventListener('mousedown', (event) => {
            isDragging = true;
            offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
            offsetY = event.clientY - draggableElement.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', (event) => {
            if (!isDragging) return;

            const newX = event.clientX - offsetX;
            const newY = event.clientY - offsetY;

            draggableElement.style.left = newX + 'px';
            draggableElement.style.top = newY + 'px';
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
            }
        });
    });
}

function readProp(prop) {
    return sessionStorage.getItem(prop);
}

function writeProp(prop, value) {
    sessionStorage.setItem(prop, value);
}

function waitForElm(selector, base = document.body) {
    return new Promise(resolve => {
        if (base.querySelector(selector)) {
            return resolve(base.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (base.querySelector(selector)) {
                resolve(base.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(base, {
            childList: true,
            subtree: true
        });
    });
}

function getValue(name) {
    return document.querySelector(`[name=${name}]`).value;
}

async function submitContact() {
    return new Promise((resolve) => {
        let form = document.forms["contact-form"];
        let name = form[0].value;
        let phone = form[1].value;
        let email = form[2].value;
        let subject = form[3].value;
        let message = form[4].value;

        let data = new FormData();
        data.set("name", name);
        data.set("phone", phone);
        data.set("email", email);
        data.set("subject", subject);
        data.set("message", message);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    let res = JSON.parse(xhr.responseText);
                    if (!res.ok) {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                } catch {
                    resolve(false);
                }
            }
        }
        try {
            xhr.open("POST", "https://hexa-studio.de/forward.php", true);
            xhr.send(data);
        } catch {
            resolve(false);
        }
    });
}

window.addEventListener("load", () => {
    document.addEventListener("scroll", () => {
        document.querySelectorAll(".nav-bar").forEach((element) => {
            if (element.classList.contains("stays")) {
                return;
            }

            if (document.scrollingElement.scrollTop == 0) {
                element.classList.remove("fixed");
            } else {
                element.classList.add("fixed");
            }
        });
    });

    waitForElm(".page").then((e) => {
        if (!!window.location.hash && window.location.hash !== "" && !!document.querySelector(window.location.hash)) {
            scrollTo(window.location.hash);
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.ctrlKey && e.key === "i") {
            openView("/admin/login", "_blank")
        }
    });
});