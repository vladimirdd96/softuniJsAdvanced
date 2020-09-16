function main(): void {
    const addBtn = <HTMLInputElement>document.getElementById('addBtn')
    const textValueInput = <HTMLInputElement>document.getElementById('newItemValue')
    const textInput = <HTMLInputElement>document.getElementById('newItemText')
    const select = <HTMLInputElement>document.getElementById('menu')
    const newOption = document.createElement('option')


    function addToOpt(e) {
        e.preventDefault()
        newOption.value = textValueInput.value
        newOption.textContent = textInput.value
        select.appendChild(newOption)

        textValueInput.value = ''
        textInput.value = ''
    }

    addBtn.addEventListener('click', addToOpt)
}

document.addEventListener('DOMContentLoaded', main)