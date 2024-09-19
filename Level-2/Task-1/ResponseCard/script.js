document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.querySelector('.card');
    const button = document.querySelector('.cta-button');

    // Add a subtle animation when hovering over the card
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });

    // Add a click event to the button
    button.addEventListener('click', () => {
        alert('You clicked the Read More button!');
    });
});