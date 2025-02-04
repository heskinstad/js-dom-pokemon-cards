console.log(data);

const cards = document.querySelector(".cards");

function firstLetterToUpper(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function makeCard(id) {
    // create card
    const card = document.createElement("li");
    card.classList.add("card");

    // add title
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card--title");
    cardTitle.innerText = firstLetterToUpper(data[id].name);
    card.append(cardTitle);

    // add image
    const cardImage = document.createElement("img");
    cardImage.classList.add("card--img")
    cardImage.src = data[id].sprites.other["official-artwork"].front_default;
    card.append(cardImage);

    // add stats
    const cardStats = document.createElement("ul");
    cardStats.classList.add("card--text");

    for (let s = 0; s < 6; s++) {
        const cardStat = document.createElement("li");
        cardStat.innerText = data[id].stats[s].stat.name.toUpperCase() + ": " + data[id].stats[s].base_stat;
        cardStats.append(cardStat);
    }

    card.append(cardStats);

    cards.append(card);
}

for (let p = 0; p < data.length; p++) {
    makeCard(p);
}

console.log(data[0]);
