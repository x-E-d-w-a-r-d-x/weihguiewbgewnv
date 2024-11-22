const gamesList = document.querySelector('.games-list');

// List of games
const games = [
    {
        title: 'Game 1',
        description: 'A fun platformer game.',
        thumbnail: 'games/game1/thumbnail.jpg', // Add thumbnails to each game's folder
        link: 'games/game1/index.html'
    },
    {
        title: 'Game 2',
        description: 'Test your reflexes in this action-packed game.',
        thumbnail: 'games/game2/thumbnail.jpg',
        link: 'games/game2/index.html'
    }
];

// Render games dynamically
games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');
    gameItem.innerHTML = `
        <img src="${game.thumbnail}" alt="${game.title} Thumbnail">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <a href="${game.link}" target="_blank">Play Now</a>
    `;
    gamesList.appendChild(gameItem);
});
