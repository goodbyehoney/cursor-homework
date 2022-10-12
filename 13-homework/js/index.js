
    const ID_BTN = document.querySelector("#id-btn");
    const NUMBER_BTN = document.querySelector("#number-btn");
    const idGenerator = createIdGenerator();

    function* createIdGenerator() {
        let id = 0;
        while (true) { yield id++ }
    };

    ID_BTN.addEventListener("click", () => {
        NUMBER_BTN.textContent = idGenerator.next().value;
    });

    const plus = document.getElementById("+");
    const minus = document.getElementById("-");
    const data = document.getElementById("lorem");

    function* newFontGenerator(font) {
    let promotion = yield;
    while (true) {
        if (promotion === "plus") {
        font += 1;
        } else if (promotion === "minus") {
        font -= 1;
        }
        promotion = yield font;
        }
    }
    const fontGenerator = newFontGenerator(16);

    fontGenerator.next();

    plus.addEventListener("click", () => {
        lorem.style.fontSize = `${fontGenerator.next('plus').value}px`;
    });

    minus.addEventListener("click", () => {
        lorem.style.fontSize = `${fontGenerator.next('minus').value}px`;
    });