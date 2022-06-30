window.sr = ScrollReveal(
    { reset: true });

sr.reveal('.social-media', 
{
    duration: 2000
});

sr.reveal('.card-text', 
{
    delay: 150,
    duration: 2000,
    cleanup: false
});

sr.reveal('.card', 
{
    delay: 150,
    duration: 2000,
    cleanup: false,
    rotate: {
        x: 100,
        y: 100,
        z: 0,
    }
});