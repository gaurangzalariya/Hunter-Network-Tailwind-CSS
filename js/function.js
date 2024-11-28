// dropdown
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('navbar-default');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// Accordion
function toggleAccordion(event) {
    // Check if the clicked element is a <div> with an associated <p> element
    const content = event.currentTarget.querySelector('p.toggle');
    if (content) {
        content.classList.toggle('hidden');
        const link = event.currentTarget.querySelector('.toggle-link');
        if (link) {
            const isHidden = content.classList.contains('hidden');
            link.textContent = isHidden ? '+' : '-';
        }
    }
}
// fade in fadeout
function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
}

$(document).ready(function() {
    fade($('.quoteLoop > .quote').first()); // Start with the first quote
});
