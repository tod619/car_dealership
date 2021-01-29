// add change to menu, navbar + sections on click to change how they display
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
});

// remove chnge from all when user clicks on the section wrappers
document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.remove('change')
        })
    });
});

// Play videos on hover
const videos = document.querySelectorAll('.video');

videos.forEach((video) => {

    // Play on mouse hover
    video.addEventListener('mouseover', () => {
        video.play();
    })

    // Pause video on mouseout event
    video.addEventListener('mouseout', () => {
        video.pause();
    })
});

