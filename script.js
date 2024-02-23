document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const carousel = section.querySelector('.carousel');
        const items = section.querySelectorAll('.item');
        let itemWidth = items[0].offsetWidth;

        // Update item width on window resize
        window.addEventListener('resize', function () {
            itemWidth = items[0].offsetWidth;
        });

        // Function to scroll to the selected index
        function scrollToIndex(index) {
            carousel.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
        }

        // Optional: Add touch swipe functionality
        let startX = 0;

        carousel.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchmove', function (e) {
            e.preventDefault();
        });

        carousel.addEventListener('touchend', function (e) {
            const endX = e.changedTouches[0].clientX;
            const deltaX = endX - startX;

            if (deltaX > 50) {
                scrollToIndex(Math.max(carousel.scrollLeft / itemWidth - 1, 0)); // Swipe right
            } else if (deltaX < -50) {
                scrollToIndex(Math.min(carousel.scrollLeft / itemWidth + 1, items.length - 1)); // Swipe left
            }
        });
    });
});
