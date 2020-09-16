function main() {
    const btnGetNotified = document.getElementById('btnGetNotified');
    const notification = document.getElementById('notification');
    function notify(str) {
        notification.style.display = 'block';
        notification.textContent = str;
        setTimeout(e => {
            e = notification;
            e.style.display = 'none';
        }, 3000);
    }
    btnGetNotified.addEventListener('click', () => notify('Something happened!'));
}
document.addEventListener('DOMContentLoaded', main);
