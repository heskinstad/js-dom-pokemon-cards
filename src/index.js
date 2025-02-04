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

    for (let s = 0; s < data[id].stats.length; s++) {
        const cardStat = document.createElement("li");
        cardStat.innerText = data[id].stats[s].stat.name.toUpperCase() + ": " + data[id].stats[s].base_stat;
        cardStats.append(cardStat);
    }

    card.append(cardStats);

    // add included games
    const cardGamesHeader = document.createElement("h3");
    cardGamesHeader.innerText = "Games:"
    card.append(cardGamesHeader);

    const cardGames = document.createElement("ul");
    cardGames.classList.add("card--text");

    for (let s = 0; s < data[id].game_indices.length; s++) {
        const cardGame = document.createElement("li");
        cardGame.innerText = firstLetterToUpper(data[id].game_indices[s].version.name);
        cardGames.append(cardGame);
    }

    card.append(cardGames);

    cards.append(card);
}

for (let p = 0; p < data.length; p++) {
    makeCard(p);
}

console.log(data[0]);
