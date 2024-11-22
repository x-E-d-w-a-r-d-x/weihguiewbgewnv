const gamesList = document.querySelector('.games-list');
const backToTop = document.getElementById('back-to-top');

// List of games
const games = [
    {
        title: 'Slope',
        description: 'Control the ball down the slope for as long as posible.',
        thumbnail: 'games/Slope/slope4.jpeg', // Add thumbnails to each game's folder
        link: 'games/Slope/index.html'
    }
];

// Render games dynamically
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

// Show button when scrolling
window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
};

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
