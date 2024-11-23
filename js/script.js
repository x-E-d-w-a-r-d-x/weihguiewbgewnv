// Grab the required DOM elements
const gamesList = document.querySelector('.games-list');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Debug: Check if elements are loaded
if (!gamesList) {
    console.error('Error: .games-list element not found!');
} else {
    console.log('.games-list element found successfully.');
}

if (!searchInput || !searchButton) {
    console.error('Error: Search bar elements not found!');
} else {
    console.log('Search bar elements found successfully.');
}

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
        description: 'Dodge your freinds or npcs as you complete tasks to win the game!',
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
        description: 'Play some basket ball and shoot at some hoops.',
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
        description: 'Play some foot bowl with your favorite teams!',
        thumbnail: 'games/RetroBowl/thumbnail.png',
        link: 'games/RetroBowl/index.html'
    },
    {
        title: 'Cookie Clicker',
        description: 'start clicking that cookie and take over the world!',
        thumbnail: 'games/CookieClicker/thumbnail.png',
        link: 'games/CookieClicker/index.html'
    },
];

// Render games dynamically
function renderGames(gameList = games) {
    gamesList.innerHTML = ''; // Clear the game list
    gameList.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title} Thumbnail" loading="lazy">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="${game.link}" target="_blank">Play Now</a>
        `;
        gamesList.appendChild(gameItem);
    });
}

// Search Functionality
function searchGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );

    // Debug: Log filtered results
    console.log(`Search Term: ${searchTerm}`);
    console.log(`Filtered Games:`, filteredGames);

    // Render filtered games
    renderGames(filteredGames);
}

// Add event listeners for search
searchButton.addEventListener('click', searchGames);
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchGames();
    }
});

// Initial Render
renderGames();