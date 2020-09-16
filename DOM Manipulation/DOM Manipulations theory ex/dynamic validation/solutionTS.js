function main() {
    const inputBox = document.getElementById('email');
    function addSyle(e) {
        e.classList.add('error');
    }
    function removeSyle(e) {
        e.classList.remove('error');
    }
    function validate() {
        if (inputBox.value.match(/@/gi) === null ||
            inputBox.value.match(/\./gi) === null) {
            addSyle(inputBox);
        }
        else {
            removeSyle(inputBox);
        }
    }
    inputBox.addEventListener("blur", validate, true);
}
const onPageLoad = document.addEventListener('DOMContentLoaded', main());
