import { MOCK } from './MOCK_DATA.js';

class DomElement {
    _tag;
    _content;
    static _domFactory;

    constructor(_tag, _content) {
        this._tag = _tag;
        this._content = _content;
    }

    static get domFactory() {
        return DomElement._domFactory
    }

    static set domFactory(x) {
        DomElement._domFactory = x;
    }

    generateDomElement() {
        return DomElement.domFactory(this._tag)
    }

    render() {
        const elementInstance = this.generateDomElement()
        if (Array.isArray(this._content)) {
            this._content.forEach(
                x => {
                    if (x instanceof DomElement) {
                        elementInstance.appendChild(x.render())
                    } else if (x instanceof HTMLElement) {
                        elementInstance.appendChild(x)
                    } else {
                        elementInstance.innerHTML = x.toString()
                    }
                }
            )
        } else {
            if (this._content instanceof DomElement) {
                elementInstance.appendChild(this._content.render())
            } else if (this._content instanceof HTMLElement) {
                elementInstance.appendChild(this._content)
            } else {
                elementInstance.innerHTML = this._content.toString()
            }
        }

        return elementInstance
    }
}

class DomTable extends DomElement {
    constructor(content) {
        super('table', content)
    }
}
class DomThead extends DomElement {
    constructor(content) {
        super('thead', content)
    }
}
class DomTbody extends DomElement {
    constructor(content) {
        super('tbody', content)
    }
}
class DomTr extends DomElement {
    constructor(content) {
        super('tr', content)
    }
}
class DomTd extends DomElement {
    constructor(content) {
        super('td', content)
    }
}
class DomTh extends DomElement {
    constructor(content) {
        super('th', content)
    }
}

class GenericFactory {
    _registry = new Map()

    register(key, classRef) {
        if (!this._registry.has(key)) {
            this._registry.set(key, classRef)
        }
    }

    create(key, ...params) {
        if (!this._registry.has(key)) {
            return null
        }
        const classRef = this._registry.get(key)
        return new classRef(...params)
    }
}

class Grid {
    keys = []
    data = []
    wrapper
    elements
    constructor(data, elements, wrapper) {
        this.data = data;
        this.wrapper = wrapper;
        this.elements = elements;
        this.keys = Object.keys(this.data[0]).filter(x => x !== "friends")
    }

    render() {
        return this.wrapper.appendChild(
            this.buildTable(this.buildContent()).render()
        )
    }

    buildTable(x) {
        return this.elements.create("table", x)
    }
    buildContent() {
        return [
            this.buildHead(),
            this.buildBody()
        ]
    }
    buildHead() {
        return this.elements.create("thead",
            this.buildTr(
                this.buildCells(this.keys, "th")
            )
        )
    }
    buildBody() {
        return this.elements.create("tbody",
            this.data.map(row => this.buildTr(
                this.keys.map(cell => this.buildCell("td", row[cell]))
            ))
        )
    }
    buildTr(x) {
        return this.elements.create("tr", x)
    }
    buildCell(type, x) {
        return this.elements.create(type, x)
    }
    buildCells(arr, type, x) {
        return arr.map(x => this.buildCell(type, x))
    }
}

class Main {
    handleEvent(e) {

        DomElement.domFactory = document.createElement.bind(document)
        const DomElementsFactory = new GenericFactory()
        DomElementsFactory.register("table", DomTable)
        DomElementsFactory.register("thead", DomThead)
        DomElementsFactory.register("tbody", DomTbody)
        DomElementsFactory.register("tr", DomTr)
        DomElementsFactory.register("th", DomTh)
        DomElementsFactory.register("td", DomTd)

        console.log(
            new Grid(
                MOCK.slice(0, 10),
                DomElementsFactory,
                document.all.app
            ).render()
        );

    }
}
document.addEventListener('DOMContentLoaded', new Main());
