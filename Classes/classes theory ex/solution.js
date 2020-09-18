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
class DomUl extends DomElement {
    constructor(content) {
        super('ul', content
            .reduce(
                (aggregate, element) =>
                    [...aggregate, Object.values(element).join(" ")],
                []
            )
            .map(x => new DomLi(x))
        )
    }
}
class DomLi extends DomElement {
    constructor(content) {
        super('li', content)
    }
}

class DomImg extends DomElement {
    src
    constructor(src) {
        super("img", "")
        this.src = src
    }

    render() {
        const img = this.generateDomElement();
        img.src = this.src

        return img
    }
}

class DomA extends DomElement {
    href
    props
    constructor(content, href, props) {
        super("a", content)
        this.href = href
        this.props = props
    }

    render() {
        const a = super.render()
        a.href = this.href
        if (this.props) {
            let prps = Object.entries(this.props)[0]
            a.dataset[prps[0]] = prps[1]
        }
        return a
    }
}

class MailLink extends DomA {
    constructor(content) {
        super(content, `mailto:${content}`)
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
    dict
    wrapper
    elements
    headTemplates = {
        first_name: "a",
    }
    cellTemplates = {
        avatar: "img",
        friends: "ul",
        email: "mail"
    }

    constructor(data, elements, dict, wrapper) {
        this.data = data;
        this.dict = dict;
        this.wrapper = wrapper;
        this.elements = elements;
        this.keys = Object.keys(this.data[0])

        this.wrapper.addEventListener('click', this)
    }

    handleEvent(e) {
        if (e.target.dataset.sortBy) {
            this.sortBy(e.target.dataset.sortBy)
            this.render()
        }
    }

    sortBy(prop) {
        this.data = this.data.sort((a, b) => {
            if (!isNaN(Number(a[prop]))) {
                return Number(a[prop]) - Number(b[prop]);
            }
            return a[prop].localeCompare(b[prop]);
        })
    }

    cleanHTML() {
        while (this.wrapper.firstElementChild !== null) {
            this.wrapper.removeChild(this.wrapper.firstElementChild);
        }
    }

    render() {
        this.cleanHTML()
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
                this.buildHeadCells(this.keys, "th")
            )
        )
    }
    buildBody() {
        return this.elements.create("tbody",
            this.data.map(row => this.buildTr(
                this.keys.map(cell => this.buildCell(
                    "td", this.buildCellBody(cell, row[cell]
                    )
                ))
            ))
        )
    }
    buildCellBody(type, content) {
        return this.elements.create(this.cellTemplates[type], content) || content
    }
    buildTr(x) {
        return this.elements.create("tr", x)
    }
    buildCell(type, x) {
        return this.elements.create(type, x)
    }
    buildCells(arr, type) {
        return arr.map(x => this.buildCell(type, x))
    }

    buildHeadLink(key, x) {
        return this.elements.create("a", x, "javascript:;", { sortBy: key })
    }

    buildHeadCell(type, x) {
        return this.elements.create(type, this.buildHeadLink(x, this.dict[x] || x))
    }
    buildHeadCells(arr, type, x) {
        return arr.map(x => this.buildHeadCell(type, x))
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
        DomElementsFactory.register("img", DomImg)
        DomElementsFactory.register("li", DomLi)
        DomElementsFactory.register("ul", DomUl)
        DomElementsFactory.register("a", DomA)
        DomElementsFactory.register("mail", MailLink)

        console.log(
            new Grid(
                MOCK.slice(0, 10),
                DomElementsFactory,
                {
                    id: "Идент.",
                    email: "Мейл",
                    gender: "Пол",
                    ip_address: "IP",
                    first_name: "Име",
                    avatar: "Картинка",
                    friends: "Приятел",
                    last_name: "Фамилия",
                },
                document.all.app
            ).render()
        );

    }
}
document.addEventListener('DOMContentLoaded', new Main());
