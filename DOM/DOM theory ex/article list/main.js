const articlesBox = document.querySelector("#articles");
articlesBox.className = 'articlesBox';
function createArticle() {
    const article = document.createElement("article");
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const input = document.querySelector("#createTitle");
    const text = document.querySelector("#createContent");
    if (input === null || input.value === "" || text === null) {
        throw new Error("Something went wrong..");
    }
    article.appendChild(h3);
    article.appendChild(p);
    articlesBox.appendChild(article);
    h3.innerHTML = input.value;
    p.innerHTML = text.value;
}
