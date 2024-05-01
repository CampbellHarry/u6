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