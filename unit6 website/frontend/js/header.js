function dropdowntrigger() {
    const dropdownpart = document.getElementsByClassName('tooltipprofile')[0];
    const profilePicHolder = document.querySelector('.profilepicture');
    if (window.innerWidth > 898) {
        dropdownpart.style.display = 'flex';
        dropdownpart.classList.add('showtop');
        dropdownpart.classList.remove('hiddentop');
    } else if (window.innerWidth < 898) {
        const mobilesupportmenu = document.getElementsByClassName('mobilesupportmenu')[0];
        if (mobilesupportmenu) {
            mobilesupportmenu.classList.add('showtop');
            mobilesupportmenu.classList.remove('hiddentop');
            mobilesupportmenu.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
}
document.addEventListener("click", function(event) {
    const iconimageholder = document.getElementsByClassName('iconimageholder')[0];
    if (iconimageholder.contains(event.target)) {
        const mobilesupportmenu = document.getElementsByClassName('mobilesupportmenu')[0];
        mobilesupportmenu.classList.remove('showtop');
        mobilesupportmenu.classList.add('hiddentop');
        setTimeout(() => {
            mobilesupportmenu.style.display = 'none';
            document.body.style.overflowY = 'visible';

        }, 450);
    }
});

function setActiveHeaderOnScroll() {
    var headerHeight = document.querySelector('header').offsetHeight; 

    // Get all section elements
    var sections = document.querySelectorAll('section[id]');
    
    // Iterate through sections to find the one in view
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - headerHeight;
        var sectionBottom = sectionTop + section.offsetHeight;
        var scrollPosition = window.scrollY;

        // Check if the section is in view
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            var sectionId = section.id;
            var headerElement = document.getElementById(sectionId + 'header');

            // Remove "activeheader" class from all header elements
            var headerElements = document.querySelectorAll('.headerelement');
            headerElements.forEach(function(element) {
                element.classList.remove('activeheader');
            });

            // Add "activeheader" class to the current section's header element
            if (headerElement) {
                headerElement.classList.add('activeheader');
            }
        }
    });
}

// Call the function whenever the user scrolls
window.addEventListener('scroll', setActiveHeaderOnScroll);