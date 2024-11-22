const gamesList = document.querySelector('.games-list');

// List of games
const games = [
    {
        title: 'Slope',
        description: 'Roll and dodge obstacles!',
        thumbnail: 'games/Slope/slope4.jpeg',
        link: 'games/Slope/index.html'
    },
    {
        title: 'OvO',
        description: 'Try and beat this imposible game!',
        thumbnail: 'games/OvO/thumbnail.png',
        link: 'games/OvO/index.html'
    }
];

// Render games dynamically
function renderGames() {
    gamesList.innerHTML = '';
    games.forEach(game => {
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

// Initial Render
renderGames();
