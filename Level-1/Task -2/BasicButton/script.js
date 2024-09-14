document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');

    button.addEventListener('click', function() {
        if (this.classList.contains('primary')) {
            this.classList.remove('primary');
            this.classList.add('secondary');
        } else {
            this.classList.remove('secondary');
            this.classList.add('primary');
        }
    });
});