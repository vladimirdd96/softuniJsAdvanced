function main() {
    const btnGetNotified = <HTMLElement>document.getElementById('btnGetNotified')
    const notification = <HTMLElement>document.getElementById('notification')

    function notify(str: string) {
        notification.style.display = 'block'
        notification.textContent = str

        setTimeout(() => {
            notification.style.display = 'none'
        }, 3000)
    }

    btnGetNotified.addEventListener('click', () => notify('Something happened!'))
}

document.addEventListener('DOMContentLoaded', main);