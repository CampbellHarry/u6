const jobdescid = document.getElementById('jobdesc');
const skillsreqid = document.getElementById('skillsreq');
const qualreqid = document.getElementById('qualreq');
const contentsectionjobs = document.getElementById('contentsectionjobs');

function jobdesc(){
    jobdescid.classList.add('activeblocksection')
    skillsreqid.classList.remove('activeblocksection')
    qualreqid.classList.remove('activeblocksection')

    contentsectionjobs.innerHTML = ``;
    contentsectionjobs.innerHTML = `Hot beans web is looking for junior web developer to join our team. The ideal candidate will have a strong understanding of web development and be able to work in a fast-paced environment. The candidate will be responsible for developing and maintaining web applications, as well as working with the team to develop new features and functionality. The candidate should have experience with HTML, CSS, JavaScript, and other web technologies.`
}

function skilldesc(){
    jobdescid.classList.remove('activeblocksection')
    skillsreqid.classList.add('activeblocksection')
    qualreqid.classList.remove('activeblocksection')

    contentsectionjobs.innerHTML = ``;
    contentsectionjobs.innerHTML = `The ideal candidate will have a strong understanding of web development and be able to work in a fast-paced environment. The candidate should have experience with HTML, CSS, JavaScript, and other web technologies.`
}

function qualdesc(){
    jobdescid.classList.remove('activeblocksection')
    skillsreqid.classList.remove('activeblocksection')
    qualreqid.classList.add('activeblocksection')

    contentsectionjobs.innerHTML = ``;
    contentsectionjobs.innerHTML = `A level 5 (HND) or a level 6 qualification (Degree) in Web Development, or a related field is essential • any other relevant courses or certification and/or experience of web development is desirable.`
}