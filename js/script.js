// List of games with categories
const games = [
    {
        title: 'Slope',
        description: 'Roll and dodge obstacles!',
        thumbnail: 'games/Slope/thumbnail.png',
        link: 'games/Slope/index.html',
        category: 'arcade'
    },
    {
        title: 'OvO',
        description: 'Try and beat this impossible game!',
        thumbnail: 'games/OvO/thumbnail.png',
        link: 'games/OvO/index.html',
        category: 'puzzle'
    },
    {
        title: 'Moto X3M',
        description: 'Fun game about motorcycles',
        thumbnail: 'games/MotoX3M/moto-x3m.png',
        link: 'games/MotoX3M/index.html',
        category: 'racing'
    },
    {
        title: 'Idle Breakout',
        description: 'An idle game where your goal is to break blocks that spawn in.',
        thumbnail: 'games/IdleBreakout/img/thumbnail.png',
        link: 'games/IdleBreakout/index.html',
        category: 'idle'
    },
    {
        title: 'Sandtris',
        description: 'Tetris but with physics!',
        thumbnail: 'games/Sandtris/thumbnail.png',
        link: 'games/Sandtris/index.html',
        category: 'puzzle'
    },
    {
        title: 'House Of Hazards',
        description: 'Dodge your friends or NPCs as you complete tasks to win the game!',
        thumbnail: 'games/HouseOfHazards/thumbnail.png',
        link: 'games/HouseOfHazards/index.html',
        category: 'arcade'
    },
    {
        title: 'Rooftop Snipers',
        description: 'Shoot the other person to win.',
        thumbnail: 'games/RooftopSnipers/thumbnail.png',
        link: 'games/RooftopSnipers/index.html',
        category: 'arcade'
    },
    {
        title: 'Basket Random',
        description: 'Play some basketball and shoot at some hoops.',
        thumbnail: 'games/BasketRandom/thumbnail.png',
        link: 'games/BasketRandom/index.html',
        category: 'sports'
    },
    {
        title: 'Soccer Random',
        description: 'Play some soccer and score some goals!',
        thumbnail: 'games/SoccerRandom/thumbnail.png',
        link: 'games/SoccerRandom/index.html',
        category: 'sports'
    },
    {
        title: 'Retro Bowl',
        description: 'Play some foot bowl with your favorite teams!',
        thumbnail: 'games/RetroBowl/thumbnail.png',
        link: 'games/RetroBowl/index.html',
        category: 'sports'
    },
    {
        title: 'Cookie Clicker',
        description: 'Start clicking that cookie and take over the world!',
        thumbnail: 'games/CookieClicker/thumbnail.png',
        link: 'games/CookieClicker/index.html',
        category: 'idle'
    }
];

// Function to display the games based on selected category and search query
function displayGames(filteredGames) {
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = ''; // Clear the current list

    filteredGames.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game-item');

        gameElement.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="${game.link}">Play Now</a>
        `;

        gamesList.appendChild(gameElement);
    });

    // Show "No results" if no games are found
    if (filteredGames.length === 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('no-results-message');
        noResultsMessage.textContent = 'No games found.';
        gamesList.appendChild(noResultsMessage);
    }
}

// Search functionality
document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categorySelect').value;

    let filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || game.category === category;
        return matchesSearch && matchesCategory;
    });

    displayGames(filteredGames);
});

// Clear search and reset filters
document.getElementById('clearSearchButton').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('categorySelect').value = 'all';
    displayGames(games);
});

// Category filter change
document.getElementById('categorySelect').addEventListener('change', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categorySelect').value;

    let filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || game.category === category;
        return matchesSearch && matchesCategory;
    });

    displayGames(filteredGames);
});

// Initial display of all games
displayGames(games);
