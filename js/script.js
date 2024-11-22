const gamesList = document.querySelector('.games-list');
const gameSearch = document.getElementById('back-to-top');
const themeToggle = document.getElementById('theme-toggle');

// List of games
const games = [
    {
        title: 'Slope',
        description: 'Control the ball down the slope for as long as posible.',
        thumbnail: 'games/Slope/slope4.jpeg', // Add thumbnails to each game's folder
        link: 'games/Slope/index.html'
    },
];

// Render games dynamically
function renderGames(filter = '') {
    gamesList.innerHTML = '';
    games
        .filter(game => game.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(game => {
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

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
    const isDark = document.body.dataset.theme === 'dark';
    document.body.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', isDark ? 'light' : 'dark'); // Save preference
});

// Load saved theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
};

// Search Functionality
gameSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    renderGames(searchTerm);
});

// Back to Top Button Logic
const backToTop = document.getElementById('back-to-top');
window.onscroll = () => {
    backToTop.style.display = document.documentElement.scrollTop > 200 ? 'block' : 'none';
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial Render
renderGames();