function displayAlert(type, data, time) {
    const elem = document.createElement("div");
    if (type == "success") {
        elem.style.backgroundColor = "#009900";
    } else if (type == "error") {
        elem.style.backgroundColor = "#990000";
    } else {
        elem.style.backgroundColor = "#e6b800";
    }
    elem.id = "elem";
    elem.style.position = "absolute";
    elem.style.minWidth = "100px";
    elem.style.minHeight = "10px";
    elem.style.height = "auto";
    elem.style.right = "0";
    elem.style.padding = "2px";
    elem.style.top = "25%";
    elem.style.color = "white";
    elem.style.fontSize = "25px";
    elem.style.borderRadius = "20px";
    elem.style.textAlign = "center";
    elem.style.lineHeight = "60px";

    var id = setInterval(frame, 15);
    var pos: number = 0;

    function frame() {
        if (pos >= 200) {
            clearInterval(id);
        } else {
            pos++
            elem.style.marginTop = -pos + "px"
            elem.style.opacity = (150 - pos) + "%"
        }
    }

    if (document.getElementById("elem") == null) {
        document.body.appendChild(elem);
        elem.innerHTML = data;
        setTimeout(function () {
            document.body.removeChild(elem);
        }, time);
    }
}

export function LogSuccess(info: string) {
    displayAlert("success", info, 1500);
}

export function LogError(info: string) {
    displayAlert("error", info, 1000);
}

export function LogInfo(info: string) {
    displayAlert("info", info, 1500);
}