state = 0

function growingWord() {
    let colorMap = ['#5b88bd', '#8ff897', '#a40014']
    let grow = document.querySelector(".grow")
    let fontSize = window.getComputedStyle(grow).fontSize.replace('px', '')

    if (state >= colorMap.length) {
        state = 0
    }

    grow.style.color = colorMap[state]
    state++
    grow.style.fontSize = (fontSize === '0' ? '2' : fontSize * 2) + 'px'

}