function main(): void {
    const inputBox = <HTMLInputElement>document.getElementById('email')

    function addSyle(e): void {
        e.classList.add('error')
    }

    function removeSyle(e): void {
        e.classList.remove('error')
    }

    function validate(): void {
        if (
            inputBox.value.match(/@/gi) === null ||
            inputBox.value.match(/\./gi) === null
        ) {
            addSyle(inputBox)
        } else {
            removeSyle(inputBox)
        }
    }

    inputBox.addEventListener("blur", validate, true)
}
main()