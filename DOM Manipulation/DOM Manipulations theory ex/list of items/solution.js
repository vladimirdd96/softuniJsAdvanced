function createElement(type, content) {
    const e = document.createElement(type)
    e.innerHTML = content
    return e
}

function callBackF() {
    const list = document.getElementById("items")
    const input = document.getElementById("newItemText")

    if (list === null || input.value === "") {
        throw new Error("Please enter smth")
    }

    list.appendChild(createElement('li', input.value))
}

function main() {
    const butt = document.getElementById("addCTA")
    butt.addEventListener('click', callBackF)
}

const onPageLoad = document.addEventListener('DOMContentLoaded', main())