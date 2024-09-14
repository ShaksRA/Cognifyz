function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const timeElement = document.getElementById('time');
    const greetingElement = document.getElementById('greeting');

    // Update time
    timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Update greeting
    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else if (hour >= 18 && hour < 22) {
        greeting = 'Good evening';
    } else {
        greeting = 'Good night';
    }
    greetingElement.textContent = `${greeting}, user!`;
}

// Update greeting immediately and then every minute
updateGreeting();
setInterval(updateGreeting, 60000);