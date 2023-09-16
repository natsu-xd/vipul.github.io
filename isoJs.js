document.addEventListener('DOMContentLoaded', function () {
    // Initialize Isotope
    var $grid = $('.gallery').isotope({
        itemSelector: '.project',
        layoutMode: 'fitRows'
    });

    // Filter items when a button is clicked
    $('.filter-buttons button').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Add event listener to initially display "All" items on page load
    $('.filter-buttons button[data-filter="All"]').click();
});
