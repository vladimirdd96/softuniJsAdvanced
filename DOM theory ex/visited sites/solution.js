const template = x => `visited ${x} times`

const clickState = {
    "SOFTUNI": 1,
    "GOOGLE": 2,
    "YOUTUBE": 4,
    "WIKIPEDIA": 4,
    "GMAIL": 7,
    "STACKOVERFLOW": 6
}

document.addEventListener('click', e => {
    if (e.target.classList.contains("linkCta")) {
        e.target
            .parentNode
            .querySelector(".linkOut")
            .innerHTML = template(
                ++clickState[
                e
                    .target
                    .innerText
                ])
    }
})