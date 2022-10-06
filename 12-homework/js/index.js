    const PLANETS = document.querySelector(".one");
    const CHARACTERS = document.querySelector(".two");
    let episod = document.querySelector(".input");
    let urlPlanets = "https://swapi.dev/api/planets/";
    let card = document.getElementById("card");

    async function getInfoCharacters() {
        const request = await fetch(
            `https://swapi.dev/api/films/${episod.value}`,
            {
            method: "GET",
            }
        );
        const response = await request.json();
        let characters = [];
        let element = [];
        for (let i = 0; i < response.characters.length; i++) {
            element[i] = await fetch(response.characters[i]);
            characters[i] = await element[i].json();
        }
        infoAboutCharacter(characters);
        } 
    
    
    async function getInfoPlanets() {
        try {
        let request = await fetch(urlPlanets, {
            method: "GET",
        });
        let response = await request.json();
        namePlanets(response.results);
    
        let buttonPrevious = createButton("button_menu", "<-");
        let buttonNext = createButton("button_menu", "->");
        if (!response.previous == 0) {
            buttonPrevious.addEventListener("click", function () {
                urlPlanets = response.previous;
            getInfoPlanets();
            });
        }
        if (!response.next == 0) {
            buttonNext.addEventListener("click", function () {
                urlPlanets = response.next;
            getInfoPlanets();
            });
        }
        } catch (err) {
        console.log({ err });
        }
    }
    function namePlanets(arr) {
        document.querySelector("#card").innerHTML = "";
        arr.forEach((el) => {
        createDiv("planet").innerHTML = "Planet is " + el.name;
        });
    }
    function infoAboutCharacter(arr) {
        document.querySelector("#card").innerHTML = "";
        arr.forEach((el) => {
        if (el.gender.toLowerCase() == "male") {
            el.gender = "male";
        } else if (el.gender.toLowerCase() == "female") {
            el.gender = "female";
        } else {
            el.gender = "robot";
        }
        createDiv("divHeroes").innerHTML =
            "Heroes name is " +
            el.name +
            ". His b-day is  " +
            el.birth_year +
            ". He/She/It is " +
            el.gender;
        });
    }
    
    function createDiv(titleClass) {
        let div = document.createElement("div");
        card.append(div);
        div.classList.add(titleClass);
        return div;
    }
    function createButton(titleClass, html) {
        let button = document.createElement("button");
        document.querySelector("#card").append(button);
        button.classList.add(titleClass);
        button.innerHTML = html;
        return button;
    }
    
    CHARACTERS.addEventListener("click", function () {
        getInfoCharacters();
        card.classList.remove("planets");
        card.classList.add("heroes");
    });
    PLANETS.addEventListener("click", function () {
        getInfoPlanets();
        card.classList.remove("heroes");
        card.classList.add("planets");
    });