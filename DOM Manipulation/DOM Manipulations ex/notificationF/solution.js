function main() {
    const btnGetNotified = document.getElementById('btnGetNotified');
    const notification = document.getElementById('notification');
    function notify(str) {
        notification.style.display = 'block';
        notification.textContent = str;
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
    btnGetNotified.addEventListener('click', () => notify('Something happened!'));
}
document.addEventListener('DOMContentLoaded', main);
