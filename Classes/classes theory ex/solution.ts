import { MOCK } from './MOCK_DATA.js'

class Main {
    handleEvent(e) {
        let keys = Object.keys(MOCK[0])
        let html = ""

        html += "<table>"
        html += "<tr>"
        html += keys.map(x => `<th> ${x} </th>`).join("")
        html += "</tr>"
        html += "</table>"

        document.all.app.innerHTML = html
    }
}

document.addEventListener('DOMContentLoaded', new Main())