const list = document.getElementById("items")

function createElement(type, content) {
    const e = document.createElement(type.toString())
    e.innerHTML = content
    return e
}

function addItem() {
    const input = document.getElementById("newItemText")
    const createLi = createElement('li', input.value)
    const createA = createElement('a', ` [Delete]`)

    createA.setAttribute('href', 'javascript:;')

    if (list === null || input.value === "") {
        throw new Error("Please enter smth")
    }

    list.appendChild(createLi)
    createLi.appendChild(createA)
}

function findChildIndexByRef(parent, child) {
    return Array.prototype.findIndex.call(
        parent.children,
        x => x === child
    )
}



function listClickHandler(e) {
    let elem = undefined
    if (e.target.nodeName === "A") {
        elem = e.target.parentNode
        // list.children.removeChild(list.children[findChildIndexByRef(e.currentTarget, e.target.parentNode)])
        console.log(list.children);
    }


}

function main() {
    const butt = document.getElementById("addCTA")
    butt.addEventListener('click', addItem)
    list.addEventListener('click', listClickHandler)

}

const onPageLoad = document.addEventListener('DOMContentLoaded', main())