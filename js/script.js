// List of games
const games = [
    {
        title: 'Slope',
        description: 'Roll and dodge obstacles!',
        thumbnail: 'games/Slope/thumbnail.png',
        link: 'games/Slope/index.html'
    },
    {
        title: 'OvO',
        description: 'Try and beat this impossible game!',
        thumbnail: 'games/OvO/thumbnail.png',
        link: 'games/OvO/index.html'
    },
    {
        title: 'Moto X3M',
        description: 'Fun game about motorcycles',
        thumbnail: 'games/MotoX3M/moto-x3m.png',
        link: 'games/MotoX3M/index.html'
    },
    {
        title: 'Idle Breakout',
        description: 'An idle game where your goal is to break blocks that spawn in.',
        thumbnail: 'games/IdleBreakout/img/thumbnail.png',
        link: 'games/IdleBreakout/index.html'
    },
    {
        title: 'Sandtris',
        description: 'Tetris but with physics!',
        thumbnail: 'games/Sandtris/thumbnail.png',
        link: 'games/Sandtris/index.html'
    },
    {
        title: 'House Of Hazards',
        description: 'Dodge your friends or NPCs as you complete tasks to win the game!',
        thumbnail: 'games/HouseOfHazards/thumbnail.png',
        link: 'games/HouseOfHazards/index.html'
    },
    {
        title: 'Rooftop Snipers',
        description: 'Shoot the other person to win.',
        thumbnail: 'games/RooftopSnipers/thumbnail.png',
        link: 'games/RooftopSnipers/index.html'
    },
    {
        title: 'Basket Random',
        description: 'Play some basketball and shoot at some hoops.',
        thumbnail: 'games/BasketRandom/thumbnail.png',
        link: 'games/BasketRandom/index.html'
    },
    {
        title: 'Soccer Random',
        description: 'Play some soccer and score some goals!',
        thumbnail: 'games/SoccerRandom/thumbnail.png',
        link: 'games/SoccerRandom/index.html'
    },
    {
        title: 'Retro Bowl',
        description: 'Play some football with your favorite teams!',
        thumbnail: 'games/RetroBowl/thumbnail.png',
        link: 'games/RetroBowl/index.html'
    },
    {
        title: 'Cookie Clicker',
        description: 'Start clicking that cookie and take over the world!',
        thumbnail: 'games/CookieClicker/thumbnail.png',
        link: 'games/CookieClicker/index.html'
    },
];

// Function to render the game items
function renderGames(gamesToRender) {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = ''; // Clear current games

    if (gamesToRender.length === 0) {
        gameList.innerHTML = '<p class="no-results-message">No results found</p>';
    } else {
        gamesToRender.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');
            gameItem.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.link}" target="_blank">Play Game</a>
            `;
            gameList.appendChild(gameItem);
        });
    }
}

// Initial render
renderGames(games);

// Search functionality
document.getElementById('searchButton').addEventListener('click', function () {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm));
    renderGames(filteredGames);
});

// Clear search input and display all games
document.getElementById('clearSearchButton').addEventListener('click', function () {
    document.getElementById('searchInput').value = '';
    renderGames(games);
});
