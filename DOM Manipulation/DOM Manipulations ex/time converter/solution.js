function main() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const inputMap = {
        'days': days => {
            const hours = days * 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;
            return [hours, minutes, seconds];
        },
        'hours': hours => {
            const days = hours / 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;
            return [days, minutes, seconds];
        },
        'minutes': minutes => {
            const hours = minutes / 60;
            const days = hours / 24;
            const seconds = minutes * 60;
            return [hours, days, seconds];
        },
        'seconds': seconds => {
            const minutes = seconds / 60;
            const hours = minutes / 60;
            const days = hours / 24;
            return [minutes, hours, days];
        },
    };
    function inputConvert(currentInput, unit, firstI, secondI, thirdI) {
        const value = +currentInput.value;
        let [firstUnit, secondUnit, thirdUnit] = inputMap[unit](value);
        firstI.value = firstUnit;
        secondI.value = secondUnit;
        thirdI.value = thirdUnit;
    }
    daysBtn.addEventListener('click', inputConvert.bind(undefined, daysInput, 'days', hoursInput, minutesInput, secondsInput));
    hoursBtn.addEventListener('click', inputConvert.bind(undefined, hoursInput, 'hours', daysInput, minutesInput, secondsInput));
    minutesBtn.addEventListener('click', inputConvert.bind(undefined, minutesInput, 'minutes', hoursInput, daysInput, secondsInput));
    secondsBtn.addEventListener('click', inputConvert.bind(undefined, secondsInput, 'seconds', minutesInput, hoursInput, daysInput));
}
document.addEventListener('DOMContentLoaded', main);
