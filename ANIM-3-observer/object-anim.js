// the stuff/animation is similar: first make two classes like here it is a standard class and a class appear conected to the standard one and varies accordingly

// then using the observer the toggling of class is done which gives a nice effect


const faders = document.querySelectorAll(".fade-in");

const fadersOptions = {
    // threshold: 1,
    rootMargin: '0px 0px -200px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            // now its end don't observe the element anymore which means no further changes now
            appearOnScroll.unobserve(entry.target);
        }
    })
},
fadersOptions);

faders.forEach(element => {
    appearOnScroll.observe(element)
})

// _____________________________________________

const sliders = document.querySelectorAll(".slide-in");

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });


//   One more stuff is Lazy loading of image, helps saving the data