document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('imageGrid');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    const images = [
        { src: 'https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699', alt: 'Abstract Art 1' },
        { src: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg', alt: 'Abstract Art 2' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkpAMeQ7efqBOQKrfmaR28jcKnHZgK5cQ9w&s', alt: 'Abstract Art 3' },
        { src: 'https://www.pacegallery.com/media/images/16_9-2.width-2000.png', alt: 'Abstract Art 4' },
        { src: 'https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1500462918059-b1a0cb512f1d%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Drandom%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fHx8MTcyNzI1Mjg5NXww%26ixlib%3Drb-4.0.3&blend-w=1&auto=format&fit=crop&q=60', alt: 'Abstract Art 5' },
        { src: 'https://images.pexels.com/photos/3844796/pexels-photo-3844796.jpeg?cs=srgb&dl=pexels-didsss-3844796.jpg&fm=jpg', alt: 'Abstract Art 6' },
    ];

    // Populate the image grid
    images.forEach((image, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}">
            <div class="image-overlay">
                <span>View Image</span>
            </div>
        `;
        imageItem.addEventListener('click', () => openModal(image));
        imageGrid.appendChild(imageItem);
    });

    // Open modal with clicked image
    function openModal(image) {
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modal.style.display = 'flex';
    }

    // Close modal
    function closeModalFunction() {
        modal.style.display = 'none';
    }

    closeModal.addEventListener('click', closeModalFunction);

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModalFunction();
        }
    });
});