document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const galleryItems = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove the "active" class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active'); // Add "active" to the clicked button

            const category = this.getAttribute('data-filter');

            // Loop through gallery items to show/hide based on category with animations
            galleryItems.forEach(item => {
                const itemCategories = item.classList;

                if (category === 'All' || itemCategories.contains(category)) {
                    item.style.display = 'block';
                    item.style.animation = 'slideIn 1s ease';
                } else {
                    item.style.display = 'none';
                    item.style.animation = 'fadeOut 1 ease';
                }
            });
        });
    });

    // Add event listener to initially display "All" items on page load
    filterButtons[0].click();

    // Ensure that "All" category shows all items even after selecting another category
    document.querySelector('[data-filter="All"]').addEventListener('click', function () {
        galleryItems.forEach(item => {
            item.style.display = 'block';
            item.style.animation = 'slideIn 1s ease';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the elements you want to animate
    const animatedElements = document.querySelectorAll('.animated-content');

    // Define a function to add animation classes
    function addAnimationClasses() {
        animatedElements.forEach(function (element) {
            element.classList.add('fadeInUp'); // Add your animation class
        });
    }

    // Trigger the animation function after a delay (adjust as needed)
    setTimeout(addAnimationClasses, 500); // 500 milliseconds delay
});