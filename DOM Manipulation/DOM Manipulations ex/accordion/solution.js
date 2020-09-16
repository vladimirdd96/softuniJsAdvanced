function main() {
    const btnMore = document.getElementById('btnMore');
    const txt = document.getElementById('extra');
    function accordion() {
        if (btnMore.textContent === 'More') {
            txt.style.display = 'inline-block';
            btnMore.textContent = 'Less';
        }
        else {
            txt.style.display = 'none';
            btnMore.textContent = 'More';
        }
    }
    btnMore.addEventListener('click', accordion);
}
document.addEventListener('DOMContentLoaded', main);
