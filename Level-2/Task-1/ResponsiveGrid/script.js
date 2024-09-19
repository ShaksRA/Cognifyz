const items = [
    { icon: 'fa-chart-line', title: 'Activity', description: 'Track your daily activities' },
    { icon: 'fa-bolt', title: 'Energy', description: 'Boost your energy levels' },
    { icon: 'fa-star', title: 'Favorites', description: 'Mark your favorite items' },
    { icon: 'fa-heart', title: 'Health', description: 'Monitor your health stats' },
    { icon: 'fa-smile', title: 'Mood', description: 'Log your daily mood' },
    { icon: 'fa-sun', title: 'Weather', description: 'Check the local forecast' },
    { icon: 'fa-moon', title: 'Sleep', description: 'Analyze your sleep patterns' },
    { icon: 'fa-cloud', title: 'Cloud', description: 'Access your cloud storage' },
    { icon: 'fa-coffee', title: 'Breaks', description: 'Schedule your break times' },
    { icon: 'fa-music', title: 'Music', description: 'Listen to your playlists' },
];

function createCard(item, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    card.innerHTML = `
        <div class="card-content">
            <div class="card-header">
                <div class="icon-container">
                    <i class="fas ${item.icon}"></i>
                </div>
                <div>
                    <h2 class="card-title">${item.title}</h2>
                    <p class="card-description">${item.description}</p>
                </div>
            </div>
            <div class="card-footer">
                <span class="badge">Explore</span>
                <span>Click to learn more</span>
            </div>
        </div>
    `;
    return card;
}

function initializeGrid() {
    const grid = document.getElementById('grid');
    items.forEach((item, index) => {
        const card = createCard(item, index);
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initializeGrid);