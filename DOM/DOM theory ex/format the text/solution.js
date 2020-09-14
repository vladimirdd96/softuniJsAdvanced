function solve() {
    const input = document.querySelector("#exercise")
    const output = document.querySelector("#output")

    if(input === null || output === null) {
        throw new Error("smth wrong")
    }

    const p = input.innerHTML.split('.')
        .map(x => {
            x += '.'
            let doc = document.createElement('p')
            doc.innerHTML = x
            output.appendChild(doc)
        })
}