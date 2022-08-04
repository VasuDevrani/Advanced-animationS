// dynamic animation/change for header of the webpage
// simply create two classes acc to the use and toggle them acc to the intersection of banner with viewport

// navbar
const header = document.querySelector("header");
// banner
const sectionOne = document.querySelector(".home-intro");

const bannerOptions = {
    rootMargin: '-200px 0px 0px 0px',
    // root:
    // threshold:
};

const bannerObserver = new IntersectionObserver((entries, bannerObserver) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            // thats if the navbar isn't over the banner
            header.classList.add('nav-scrolled');
        }else{
            header.classList.remove('nav-scrolled');
        }
    })
},
bannerOptions);

bannerObserver.observe(sectionOne);
