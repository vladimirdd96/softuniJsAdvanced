function main() {
    const addBtn = document.getElementById('addBtn');
    const textValueInput = document.getElementById('newItemValue');
    const textInput = document.getElementById('newItemText');
    const select = document.getElementById('menu');
    function addToOpt(e) {
        e.preventDefault();
        const newOption = document.createElement('option');
        newOption.value = textValueInput.value;
        newOption.textContent = textInput.value;
        select.appendChild(newOption);
        textValueInput.value = '';
        textInput.value = '';
    }
    addBtn.addEventListener('click', addToOpt);
}
document.addEventListener('DOMContentLoaded', main);
